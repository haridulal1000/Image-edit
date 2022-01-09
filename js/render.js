function renderLayer(layer) {
    if (layer.visible === false) {
        if (document.getElementById('view' + layer.id)) {
            document.getElementById('view' + layer.id).remove();
        }
        return;
    }
    if (document.getElementById('view' + layer.id)) {
        document.getElementById('view' + layer.id).remove();
    }
    if (layer.type === 'image') {
        renderImageLayer(layer);
        // renderLayerItem(layer);
    }
    if (layer.type === 'text') {
        renderTextLayer(layer);
    }
    if (selectedLayer != null) {
        setProperties();
        setFilters();
        setTextMenu();
        setTextProperties();
        setImageView();
    }

}

function renderImageLayer(layer) {
    let div = document.createElement('div');
    div.setAttribute('id', 'view' + layer.id);
    layer.image.style.display = 'block';
    let renderImage = document.createElement('img');
    renderImage.src = layer.image.src;
    renderImage.width = layer.width;
    renderImage.height = layer.height;
    renderImage.style = `filter: brightness(${layer.brightness}%) contrast(${layer.contrast}%) hue-rotate(${layer.hue}deg) saturate(${layer.saturation}%)`;


    div.appendChild(renderImage);
    div.style.zIndex = layer.zIndex;
    div.style.position = 'absolute';
    div.style.left = layer.x + 'px';
    div.style.top = layer.y + 'px';
    document.getElementById('imageView').appendChild(div);


}

function renderTextLayer(layer) {
    let div = document.createElement('div');
    div.setAttribute('id', 'view' + layer.id);
    div.innerHTML = layer.text;
    div.style.position = 'absolute';
    div.style.width = 'fit-content';
    div.style.left = layer.x + 'px';
    div.style.top = layer.y + 'px';
    div.style.fontSize = layer.fontSize + 'px';
    div.style.fontFamily = 'Arial';
    div.style.color = `rgb(${layer.color.r},${layer.color.g},${layer.color.b})`;
    div.style.zIndex = layer.zIndex;
    document.getElementById('imageView').appendChild(div);
}