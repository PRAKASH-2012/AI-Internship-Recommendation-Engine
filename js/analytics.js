/**
 * Analytics Engine: Native Canvas & SVG Charts Renderer (No external library dependency)
 */
class AnalyticsEngine {
  renderBarChart(canvasId, dataLabels, values, color = '#6366f1') {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.parentElement.clientWidth || 400;
    const height = canvas.height = 220;

    ctx.clearRect(0, 0, width, height);

    const maxVal = Math.max(...values, 10);
    const barWidth = Math.floor((width - 60) / values.length) - 15;
    const startX = 40;

    values.forEach((val, i) => {
      const barHeight = (val / maxVal) * (height - 60);
      const x = startX + i * (barWidth + 15);
      const y = height - 40 - barHeight;

      // Draw Bar Gradient
      const gradient = ctx.createLinearGradient(0, y, 0, height - 40);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, 'rgba(99, 102, 241, 0.2)');

      ctx.fillStyle = gradient;
      ctx.fillRect(x, y, barWidth, barHeight);

      // Draw Value text
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(val, x + barWidth / 2, y - 6);

      // Draw Label text
      ctx.fillText(dataLabels[i], x + barWidth / 2, height - 20);
    });
  }

  renderDonutChart(svgId, slices) {
    const svg = document.getElementById(svgId);
    if (!svg) return;
    // Pure SVG Donut visualization logic
    let cumulativeAngle = 0;
    const total = slices.reduce((acc, s) => acc + s.value, 0) || 1;

    let html = '';
    slices.forEach(slice => {
      const angle = (slice.value / total) * 360;
      // Draw slice indicator legend
      html += `<div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px;">
        <span style="display:inline-block; width:12px; height:12px; background:${slice.color}; border-radius:3px; margin-right:8px;"></span>
        <span style="flex:1; font-size:13px; color:#cbd5e1;">${slice.label}</span>
        <span style="font-weight:600; color:#fff;">${slice.value} (${Math.round((slice.value/total)*100)}%)</span>
      </div>`;
    });
    svg.innerHTML = html;
  }
}

window.analyticsEngine = new AnalyticsEngine();
