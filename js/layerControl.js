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
    setImageView();
    for (let i = 0; i < layers.length; i++) {
        renderLayer(layers[i]);
        renderLayerItem(layers[i]);
    }
    if (selectedLayer != null) {
        setLayer('layer' + selectedLayer);
        setProperties();
        setFilters();
        setTextMenu();
        setTextProperties();
        setShapesProperties();
        setShapesMenu();
        setRotateProperties();
    }
    addNextLayer();
    downloadButton();


}

function addLayer(layer) {
    layers.push(layer);
    id++;

}

function setCurrentLayer(e) {
    selectedLayer = e.slice(5);
}

function setImageView() {
    document.getElementById('imageView').style.width = layers[0].width + 'px';
    document.getElementById('imageView').style.height = layers[0].height + 'px';
    document.getElementById('imageView').style.overflow = 'hidden';
    document.getElementById('imageView').style.transform = `scale(${scale},${scale})`;
    document.getElementById('imageView').style.border = `2px solid white`;
}

function indexOfSelectedLayer() {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            return i;
        }
    }
}