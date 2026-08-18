/**
 * Database Backup, Restore, and Reset Controller
 */
class BackupManager {
  async exportFullDatabase() {
    if (!window.dbManager) return;
    const backup = {};
    for (const storeName of window.dbManager.stores) {
      backup[storeName] = await window.dbManager.getAll(storeName);
    }
    window.DataExporter.downloadJSON(backup, `AIInternshipDB_Backup_${new Date().toISOString().slice(0,10)}.json`);
  }

  async restoreFullDatabase(jsonObj) {
    if (!window.dbManager || typeof jsonObj !== 'object') {
      Utils.showToast('Invalid backup file format.', 'error');
      return;
    }

    try {
      for (const [storeName, records] of Object.entries(jsonObj)) {
        if (window.dbManager.stores.includes(storeName) && Array.isArray(records)) {
          await window.dbManager.clearStore(storeName);
          for (const rec of records) {
            await window.dbManager.put(storeName, rec);
          }
        }
      }
      Utils.showToast('Database restored successfully! Reloading page...', 'success');
      setTimeout(() => location.reload(), 1200);
    } catch (e) {
      console.error(e);
      Utils.showToast('Error restoring database backup.', 'error');
    }
  }

  async resetDemoData() {
    if (!window.dbManager) return;
    if (!confirm('Are you sure you want to reset all data back to original seed defaults?')) return;

    for (const storeName of window.dbManager.stores) {
      await window.dbManager.clearStore(storeName);
    }
    await window.dbManager.seedInitialData();
    Utils.showToast('Demo data reset successfully!', 'success');
    setTimeout(() => location.reload(), 1000);
  }
}

window.backupManager = new BackupManager();
