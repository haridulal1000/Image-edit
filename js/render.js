function renderLayer(layer) {
    if (layer.type === 'image') {
        renderImageLayer(layer);
        // renderLayerItem(layer);
    }
}

function renderImageLayer(layer) {
    if (document.getElementById('view' + layer.id)) {
        document.getElementById('view' + layer.id).remove();
    }
    let div = document.createElement('div');
    div.setAttribute('id', 'view' + layer.id);
    layer.image.style.display = 'block';
    let renderImage = document.createElement('img');
    renderImage.src = layer.image.src;
    renderImage.width = layer.width;
    renderImage.height = layer.height;
    renderImage.style.filter = `brightness(${layer.brightness}%) contrast(${layer.contrast}%) hue-rotate(${layer.hue}deg) saturate(${layer.saturation}%) blur(${layer.blur}px)`;


    div.appendChild(renderImage);
    div.style.zIndex = layer.zIndex;
    div.style.position = 'absolute';
    div.style.left = layer.x + 'px';
    div.style.top = layer.y + 'px';
    document.getElementById('imageView').appendChild(div);


}