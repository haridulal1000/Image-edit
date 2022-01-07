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