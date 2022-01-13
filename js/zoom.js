let zoomIn = document.getElementById('zoom-in');
let zoomOut = document.getElementById('zoom-out')
let zoomValue = document.getElementById('zoom-value');
zoomIn.addEventListener('click', function(e) {
    scale = parseFloat(scale) * 2;
    zoomValue.innerHTML = `Zoom: ${scale}`;
    renderLayersAll();

});
zoomOut.addEventListener('click', function(e) {
    scale = parseFloat(scale) / 2;
    zoomValue.innerHTML = `Zoom: ${scale}`;
    renderLayersAll();

});