let currentTool;
document.getElementById('viewport').addEventListener('mousedown', function(e) {
    if (currentTool === 'move') {
        e.preventDefault();
        for (let i = 0; i < layers.length; i++) {
            if (selectedLayer == layers[i].id) {
                layers[i].x = e.offsetX;
                layers[i].y = e.offsetY;
                renderLayersAll();
                break;
            }
        }
    }
});