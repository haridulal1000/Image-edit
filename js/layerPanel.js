function renderLayerItem(layer) {
    if (layer.type === 'image') {
        renderLayerItemImage(layer);
    }
    if (layer.type === 'text') {
        renderLayerItemText(layer);
    }
}

function renderLayerItemImage(layer) {
    let deleteFlag = false;
    let layerItem = document.createElement('div');
    let renderImage = document.createElement('img');
    let del = document.createElement('button');
    del.innerHTML = "DELETE";
    del.classList.add('btn-delete');
    if (layer.id === 0) {
        del.disabled = true;
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
    renderImage.src = layer.image.src;
    // console.log(renderImage);
    renderImage.width = 100;
    renderImage.height = 100;
    let visible = document.createElement('input');
    let label = document.createElement('label');
    visible.setAttribute('type', 'checkbox');
    visible.setAttribute('id', 'visible' + layer.id);
    visible.checked = layer.visible;
    visible.addEventListener('change', function(e) {
        layer.visible = this.checked;
        console.log(this.checked);
        renderLayer(layer);
        return;
    });
    label.setAttribute('for', 'visible' + layer.id);
    label.innerHTML = 'Visible';


    let layerName = document.createElement('div');
    layerName.innerHTML = layer.type + ' ' + layer.id;
    layerItem.appendChild(renderImage);
    layerItem.appendChild(label);
    layerItem.appendChild(visible);
    layerItem.appendChild(layerName);
    layerItem.appendChild(del);

    layerItem.setAttribute('id', 'layer' + layer.id);
    layerItem.classList.add('layer-item');
    layerItem.addEventListener('click', function(e) {
        if (!deleteFlag) {
            setLayer(this.getAttribute('id'));
            // console.log(this.getAttribute('id'));
            setCurrentLayer(this.getAttribute('id'));
            setProperties();
            setFilters();
            setTextMenu();
        }


    });


    document.getElementById('layers-panel').appendChild(layerItem);

}

function renderLayerItemText(layer) {
    let deleteFlag = false;
    let layerItem = document.createElement('div');
    let layerName = document.createElement('div');
    let icon = document.createElement('img');
    let visible = document.createElement('input');
    let label = document.createElement('label');
    icon.src = './images/text-layer-icon.png';
    icon.width = 100;
    icon.height = 100;
    visible.setAttribute('type', 'checkbox');
    visible.setAttribute('id', 'visible' + layer.id);
    visible.checked = layer.visible;
    visible.addEventListener('change', function(e) {
        layer.visible = this.checked;
        renderLayer(layer);
    });
    label.setAttribute('for', 'visible' + layer.id);
    label.innerHTML = 'Visible';
    layerName.innerHTML = layer.type + ' ' + layer.id;
    layerItem.classList.add('layer-item');
    layerItem.appendChild(icon);
    layerItem.appendChild(label);
    layerItem.appendChild(visible);
    layerItem.appendChild(layerName);

    let del = document.createElement('button');
    del.classList.add('btn-delete');
    del.innerHTML = "DELETE";
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
            setTextProperties();
        }

    });
    document.getElementById('layers-panel').appendChild(layerItem);

}

function setLayer(e) {
    // console.log(e);
    if (e != null) {
        document.querySelectorAll('.layer-item').forEach(function(element) {
            element.style.border = 'none';
        });
        document.getElementById(e).style.outline = '2px solid blue';
    }
}

function addNextLayer() {
    let file = document.createElement('input');
    file.setAttribute('id', 'add-layer');
    file.setAttribute('type', 'file');
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
                    x: 0,
                    y: 0,
                    zIndex: id + 5,
                    brightness: 100,
                    contrast: 100,
                    hue: 0,
                    saturation: 100,
                    blur: 0,
                    visible: true
                }));
                selectedLayer = id - 1;
                renderLayersAll();
            }

        });

    });
    file.style.display = 'none';
    let label = document.createElement('label');
    label.setAttribute('for', 'add-layer');
    label.style.background = '#136e8a';
    label.style.padding = '10px';
    label.style.textAlign = 'center';
    label.style.display = 'block';
    label.style.margin = '5px auto 5px auto';
    label.style.borderRadius = '10px';
    label.style.color = 'white';

    label.innerHTML = 'Add New Layer';
    document.getElementById('layers-panel').appendChild(file);
    document.getElementById('layers-panel').appendChild(label);

}

function downloadButton() {
    let downloadBtn = document.createElement('button');
    downloadBtn.setAttribute('id', 'export');
    downloadBtn.innerHTML = 'Export';
    downloadBtn.style.display = 'block';
    downloadBtn.style.backgroundColor = '#3ae86e';
    downloadBtn.style.margin = '5px auto 5px auto';
    downloadBtn.style.padding = '10px';
    downloadBtn.style.textAlign = 'center';
    downloadBtn.style.width = '100%';
    downloadBtn.style.borderRadius = '10px';
    downloadBtn.addEventListener('click',
        Export);
    document.getElementById('layers-panel').appendChild(downloadBtn);

}