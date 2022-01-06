function renderLayerItem(layer) {
    if (layer.type === 'image') {
        renderLayerItemImage(layer);
    }
}

function renderLayerItemImage(layer) {
    // <div class="layer-item clear-fix" style="border: 2px solid gray;">
    //             <img src="./img3.jpg" alt="img" width="100" height="100" style="display: block; margin: auto;" class="float-left">
    //             <div style="width: fit-content; margin: auto; font-size: 40px;" class="float-right">Layer 1</div>
    //             <input type="file" id="new-image" style="display: none;">
    //         </div>
    //         <label for="new-image" style="display: block; width: 80%;text-align: center; margin: auto; font-size: 40px; border: 2px solid gray;">+</label>

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
        let layerItems = document.querySelectorAll('.layer-item');
        layerItems.forEach(element => {
            element.style.border = 'none';
        });
        this.style.border = '1px solid blue';
        console.log(this.getAttribute('id'));
        setCurrentLayer(this.getAttribute('id'));
        setProperties();
        setFilters();

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
                    x: 50,
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