window.onload = function() {
    const canvas = document.getElementById('bulbCanvas');
    const ctx = canvas.getContext('2d');
    let isBulbOn = false;

    // Function to draw the bulb
    function drawBulb(on) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the bulb
        ctx.beginPath();
        ctx.arc(150, 100, 60, 0.75 * Math.PI, 0.25 * Math.PI, false);
        ctx.lineTo(114, 200);
        ctx.lineTo(186, 200);
        ctx.closePath();
        ctx.fillStyle = on ? '#FFFF00' : '#CCCCCC'; // yellow if on, grey if off
        ctx.fill();
        ctx.stroke();

        // Draw the bulb base
        ctx.beginPath();
        ctx.rect(130, 200, 40, 30);
        ctx.fillStyle = '#666666'; // dark grey color for the base
        ctx.fill();
        ctx.stroke();

        // Draw the filament
        ctx.beginPath();
        ctx.moveTo(135, 100);
        ctx.lineTo(165, 100);
        ctx.moveTo(150, 100);
        ctx.lineTo(150, 140);
        ctx.strokeStyle = on ? '#FF8C00' : '#333333'; // dark orange if on, dark grey if off
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw the switch
        ctx.beginPath();
        ctx.rect(100, 300, 100, 50);
        ctx.fillStyle = '#BBBBBB';
        ctx.fill();
        ctx.stroke();

        // Draw the switch knob
        ctx.beginPath();
        ctx.rect(on ? 170 : 100, 310, 30, 30);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        ctx.stroke();
    }

    // Initial draw
    drawBulb(isBulbOn);

    // Add event listener for the switch
    canvas.addEventListener('click', function(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Check if the click is within the switch area
        if (x >= 100 && x <= 200 && y >= 300 && y <= 350) {
            isBulbOn = !isBulbOn; // Toggle the bulb state
            drawBulb(isBulbOn);
        }
    });
};
