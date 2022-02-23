let source;
let destination;

function renderLayerItem(layer) {
    renderLayerItemImage(layer);
}

function renderLayerItem(layer) {
    let deleteFlag = false;
    let layerItem = document.createElement('div');
    layerItem.setAttribute('draggable', true);
    layerItem.addEventListener('dragstart', function(e) {
        source = this.getAttribute('id').slice(5);
    });
    layerItem.addEventListener('dragover', function(e) {
        this.style.outline = '2px solid red';
    });
    layerItem.addEventListener('dragleave', function(e) {
        destination = this.getAttribute('id').slice(5);
        this.style.outline = 'none';
    });
    layerItem.addEventListener('dragend', function(e) {
        dragend();

    });
    let renderImage = document.createElement('img');
    let del = document.createElement('button');
    del.innerHTML = "DELETE";
    del.classList.add('btn-delete');

    if (layer.id === 0) {
        del.disabled = true;
        del.classList.remove('btn-delete');
        del.classList.add('disabled');
    }
    del.addEventListener('click', function() {

        for (let i = 0; i < layers.length; i++) {

            if (layer.id === layers[i].id && i != 0) {
                layers.splice(i, 1);
                selectedLayer = null;
                deleteFlag = true;

                renderLayersAll();
                return;
            }
        }
    });

    if (layer.type === 'image') {
        renderImage.src = layer.image.src;
    }

    if (layer.type === 'text') {
        renderImage.src = './images/text-layer-icon.png';
    }

    if (layer.type === 'line') {
        renderImage.src = './images/line.png';
    }

    if (layer.type === 'circle') {
        renderImage.src = './images/circle.png';
    }

    if (layer.type === 'rect') {
        renderImage.src = './images/square.png';
    }

    if (layer.type === 'polygon') {
        renderImage.src = './images/polygon.png';
    }

    renderImage.width = 50;
    renderImage.height = 50;
    renderImage.style.background = 'white';
    renderImage.style.display = 'block';
    let visible = document.createElement('input');
    let label = document.createElement('label');
    let visibleDiv = document.createElement('div');
    visible.setAttribute('type', 'checkbox');
    visible.setAttribute('id', 'visible' + layer.id);
    visible.checked = layer.visible;

    visible.addEventListener('change', function(e) {
        layer.visible = this.checked;
        renderLayer(layer);
        return;
    });

    label.setAttribute('for', 'visible' + layer.id);
    label.innerHTML = 'Visible';
    visibleDiv.appendChild(visible);
    visibleDiv.appendChild(label);
    visibleDiv.classList.add('float-right');
    const layerName = document.createElement('div');
    layerName.classList.add('float-left');
    layerName.innerHTML = (layer.type + ' ' + layer.id).toUpperCase();
    layerItem.appendChild(renderImage);
    layerItem.appendChild(visibleDiv);
    layerItem.appendChild(layerName);
    layerItem.appendChild(del);

    layerItem.setAttribute('id', 'layer' + layer.id);
    layerItem.classList.add('layer-item');
    layerItem.addEventListener('click', function(e) {

        if (!deleteFlag) {
            setLayer(this.getAttribute('id'));
            setCurrentLayer(this.getAttribute('id'));
            setProperties();
            setFilters();
            setTextMenu();
            setShapesProperties();
            setShapesMenu();
            setRotateProperties();
            setOpacity();
        }

    });

    document.getElementById('layers-panel').appendChild(layerItem);
}

function dragend() {

    let sourceIndex;
    let destinationIndex;

    if (source === destination || source == 0 || destination == 0) {
        return;
    }

    for (let i = 0; i < layers.length; i++) {

        if (layers[i].id == source) {
            sourceIndex = i;
        }

        if (layers[i].id == destination) {
            destinationIndex = i;
        }

    }

    if (sourceIndex > destinationIndex) {

        for (let i = destinationIndex; i < sourceIndex; i++) {
            layers[i].zIndex = parseInt(layers[i].zIndex) + 1;
        }
        let sourceNode = layers[sourceIndex];
        sourceNode.zIndex = parseInt(layers[destinationIndex].zIndex) - 1;
        layers.splice(sourceIndex, 1);
        layers.splice(destinationIndex, 0, sourceNode);
        renderLayersAll();

    } else {

        for (let i = destinationIndex; i > sourceIndex; i--) {
            layers[i].zIndex = parseInt(layers[i].zIndex) - 1;
        }
        let sourceNode = layers[sourceIndex];
        sourceNode.zIndex = parseInt(layers[destinationIndex].zIndex) + 1;
        layers.splice(sourceIndex, 1);
        layers.splice(destinationIndex, 0, sourceNode);
        renderLayersAll();
    }

}

function setLayer(e) {

    if (e != null) {
        document.querySelectorAll('.layer-item').forEach(function(element) {
            element.style.outline = 'none';
        });
        document.getElementById(e).style.outline = '2px solid blue';
    }
}

function addNextLayer() {
    let file = document.createElement('input');
    file.setAttribute('id', 'add-layer');
    file.setAttribute('type', 'file');
    file.setAttribute('accept', 'images/*');
    file.addEventListener('change', function() {
        let image = new Image();
        let reader = new FileReader();
        reader.readAsDataURL(file.files[0]);
        reader.addEventListener('load', function() {
            image.src = this.result;
            image.onload = function() {
                addLayer(new ImageLayer({
                    type: 'image',
                    id: id,
                    width: image.width,
                    height: image.height,
                    image: image,
                    originX: 0,
                    originY: 0,
                    rotate: 0,
                    x: 0,
                    y: 0,
                    zIndex: id + 5,
                    brightness: 100,
                    contrast: 100,
                    hue: 0,
                    saturation: 100,
                    blur: 0,
                    grayscale: 0,
                    invert: 0,
                    sepia: 0,
                    visible: true,
                    opacity: 100
                }));
                selectedLayer = id - 1;
                renderLayersAll();
            }

        });

    });
    file.style.display = 'none';
    let label = document.createElement('label');
    label.setAttribute('for', 'add-layer');
    label.setAttribute('id', 'add-layer');
    label.style.textAlign = 'center';
    label.style.display = 'block';
    label.style.margin = '10px auto';
    label.innerHTML = 'Add New Layer';
    document.getElementById('layers-panel').appendChild(file);
    document.getElementById('layers-panel').appendChild(label);

}

function downloadButton() {
    let downloadBtn = document.createElement('button');
    downloadBtn.setAttribute('id', 'exportBtn');
    downloadBtn.innerHTML = 'Export';
    downloadBtn.style.display = 'block';
    downloadBtn.style.margin = '10px auto';
    downloadBtn.style.textAlign = 'center';
    downloadBtn.style.width = '100%';
    downloadBtn.addEventListener('click',
        Export);
    document.getElementById('layers-panel').appendChild(downloadBtn);

}