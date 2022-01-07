function renderLayerItem(layer) {
    if (layer.type === 'image') {
        renderLayerItemImage(layer);
    }
    if (layer.type === 'text') {
        renderLayerItemText(layer);
    }
}

function renderLayerItemImage(layer) {
    let layerItem = document.createElement('div');
    let renderImage = document.createElement('img');
    renderImage.src = layer.image.src;
    // console.log(renderImage);
    renderImage.width = 100;
    renderImage.height = 100;
    let layerName = document.createElement('div');
    layerName.innerHTML = layer.type + ' ' + layer.id;
    layerItem.appendChild(renderImage);
    layerItem.appendChild(layerName);
    layerItem.setAttribute('id', 'layer' + layer.id);
    layerItem.classList.add('layer-item');
    layerItem.addEventListener('click', function(e) {
        setLayer(this.getAttribute('id'));
        // console.log(this.getAttribute('id'));
        setCurrentLayer(this.getAttribute('id'));
        setProperties();
        setFilters();
        setTextMenu();

    });
    let file = document.createElement('input');
    file.setAttribute('id', 'add-layer' + id);
    file.setAttribute('type', 'file');
    file.addEventListener('change', function() {
        let image = new Image();
        let reader = new FileReader();
        reader.readAsDataURL(file.files[0]);
        reader.addEventListener('load', function() {
            image.src = this.result;
            // console.log(image);
            // document.getElementById('upload-file').remove();
            // document.getElementById('upload-button').remove();
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
                    blur: 0
                }));
                renderLayersAll();
            }

        });

    });

    document.getElementById('layers-panel').appendChild(layerItem);
    document.getElementById('layers-panel').appendChild(file);
    // document.getElementById('layers-panel').appendChild(label);
}

function renderLayerItemText(layer) {
    let layerItem = document.createElement('div');
    let layerName = document.createElement('div');
    let icon = document.createElement('img');
    icon.src = './images/text-layer-icon.png';
    icon.width = 100;
    icon.height = 100;
    layerName.innerHTML = layer.type + ' ' + layer.id;
    layerItem.appendChild(icon);
    layerItem.appendChild(layerName);
    layerItem.setAttribute('id', 'layer' + layer.id);
    layerItem.classList.add('layer-item');
    layerItem.addEventListener('click', function(e) {
        setLayer(this.getAttribute('id'));
        setCurrentLayer(this.getAttribute('id'));
        setProperties();
        setFilters();
        setTextMenu();
        setTextProperties();
    });
    let file = document.createElement('input');
    file.setAttribute('id', 'add-layer' + id);
    file.setAttribute('type', 'file');
    file.addEventListener('change', function() {
        let image = new Image();
        let reader = new FileReader();
        reader.readAsDataURL(file.files[0]);
        reader.addEventListener('load', function() {
            image.src = this.result;
            // console.log(image);
            // document.getElementById('upload-file').remove();
            // document.getElementById('upload-button').remove();
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
                    blur: 0
                }));
                renderLayersAll();
            }

        });

    });

    document.getElementById('layers-panel').appendChild(layerItem);
    document.getElementById('layers-panel').appendChild(file);
}

function setLayer(e) {
    // console.log(e);
    document.querySelectorAll('.layer-item').forEach(function(element) {
        element.style.border = 'none';
    });
    document.getElementById(e).style.border = '1px solid blue';
}