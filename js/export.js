/**
 * Client-Side Data Export Helper (CSV / JSON Downloads)
 */
const DataExporter = {
  downloadJSON(data, filename = 'export.json') {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    Utils.showToast(`Exported ${filename} successfully!`, 'success');
  },

  downloadCSV(items, filename = 'export.csv') {
    if (!items || !items.length) {
      Utils.showToast('No records available to export.', 'warning');
      return;
    }
    const keys = Object.keys(items[0]);
    let csv = keys.join(',') + '\n';

    items.forEach(item => {
      const row = keys.map(k => {
        let val = item[k];
        if (typeof val === 'object') val = JSON.stringify(val);
        return `"${String(val || '').replace(/"/g, '""')}"`;
      });
      csv += row.join(',') + '\n';
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    Utils.showToast(`Exported ${filename} successfully!`, 'success');
  }
};

window.DataExporter = DataExporter;
