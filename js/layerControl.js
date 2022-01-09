let layers = [];
let id = 0;
let scaleX = 1;
let scaleY = 1;
let selectedLayer;

function renderLayersAll() {
    if (layers.length <= 0) {
        return;
    }
    document.getElementById('imageView').innerHTML = '';
    document.getElementById('imageView').style.width = layers[0].width + 'px';
    document.getElementById('imageView').style.height = layers[0].height + 'px';
    document.getElementById('imageView').style.overflow = 'hidden';
    document.getElementById('imageView').style.transform = `scale(${scale},${scale})`;
    document.getElementById('imageView').style.border = `2px solid white`;
    document.getElementById('layers-panel').innerHTML = '';
    for (let i = 0; i < layers.length; i++) {
        renderLayer(layers[i]);
        renderLayerItem(layers[i]);
    }
    setLayer('layer' + selectedLayer);
    setProperties();
    setFilters();
    setTextMenu();
    setTextProperties();

}

function addLayer(layer) {
    layers.push(layer);
    id++;

}

function setCurrentLayer(e) {
    selectedLayer = e.slice(5);
}