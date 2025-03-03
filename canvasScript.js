document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    let drawing = false;
    let color = document.getElementById('colorPicker').value;
    let size = document.getElementById('sizePicker').value;

    // Update color and size from widgets
    document.getElementById('colorPicker').addEventListener('input', function() {
        color = this.value;
    });

    document.getElementById('sizePicker').addEventListener('input', function() {
        size = this.value;
    });

    // Start drawing
    canvas.addEventListener('mousedown', function(e) {
        drawing = true;
        draw(e);
    });

    // Stop drawing
    canvas.addEventListener('mouseup', function() {
        drawing = false;
        ctx.beginPath();
    });

    // Draw on canvas
    canvas.addEventListener('mousemove', draw);

    function draw(e) {
        if (!drawing) return;
        ctx.lineWidth = size;
        ctx.lineCap = 'round';
        ctx.strokeStyle = color;

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }
});