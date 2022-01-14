let currentTool;
let move = false;
let xoffset;
let yoffset;
document.getElementById('viewport').addEventListener('mousedown', function(e) {
    if (currentTool === 'move' && move === false) {
        move = true;
        xoffset = e.clientX;
        yoffset = e.clientY;
    }
});
document.getElementById('viewport').addEventListener('mouseup', function(e) {
    if (currentTool === 'move' && move === true) {
        move = false;
    }
});
document.getElementById('viewport').addEventListener('mousemove', function(e) {
    if (currentTool === 'move' && move === true) {
        e.preventDefault();

        let rect = document.getElementById('viewport').getBoundingClientRect();



        for (let i = 0; i < layers.length; i++) {
            if (selectedLayer == layers[i].id) {
                layers[i].x += (e.clientX - xoffset) / scale;
                layers[i].y += (e.clientY - yoffset) / scale;
                xoffset = e.clientX;
                yoffset = e.clientY;
                renderLayer(layers[i]);
                break;
            }
        }
    }
});