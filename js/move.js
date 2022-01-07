let currentTool;
let move = false;
document.getElementById('viewport').addEventListener('mousedown', function(e) {
    if (currentTool === 'move' && move === false) {
        move = true;
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
        // var x = e.clientX - rect.left; //x position within the element.
        // var y = e.clientY - rect.top; //y position within the element.


        for (let i = 0; i < layers.length; i++) {
            if (selectedLayer == layers[i].id) {
                layers[i].x = e.clientX - rect.left - layers[i].width / 2;
                layers[i].y = e.clientY - rect.top - layers[i].height / 2;
                renderLayersAll();
                break;
            }
        }
    }
});