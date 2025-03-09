class Chart {
    constructor(ctx, data, labels) {
        this.ctx = ctx;
        this.data = data;
        this.labels = labels;
        this.colors = ["red", "blue", "green", "orange", "purple"];
    }
    
    draw() {
        const ctx = this.ctx;
        const maxData = Math.max(...this.data);
        const barWidth = 50;
        const gap = 30;
        const startX = 50;
        const startY = 300;
        
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.font = "16px Arial";
        
        this.data.forEach((value, index) => {
            const barHeight = (value / maxData) * 200;
            const x = startX + index * (barWidth + gap);
            const y = startY - barHeight;
            
            ctx.fillStyle = this.colors[index % this.colors.length];
            ctx.fillRect(x, y, barWidth, barHeight);
            ctx.fillStyle = "black";
            ctx.fillText(this.labels[index], x + 10, startY + 20);
            ctx.fillText(value, x + 15, y - 5);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("barChart");
    canvas.width = 500;
    canvas.height = 350;
    const ctx = canvas.getContext("2d");
    
    const data = [45, 80, 60, 30, 90];
    const labels = ["A", "B", "C", "D", "E"];
    
    const barChart = new Chart(ctx, data, labels);
    barChart.draw();
});