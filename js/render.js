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
    if (layer.type === 'circle') {
        renderCircleLayer(layer);
    }
    if (layer.type === 'rect') {
        renderRectLayer(layer);
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

function renderCircleLayer(layer) {
    let div = document.createElement('div');
    div.setAttribute('id', 'view' + layer.id);
    div.style.position = 'absolute';
    div.style.left = layer.x + 'px';
    div.style.top = layer.y + 'px';
    div.style.zIndex = layer.zIndex;
    let strokeOpacity;
    let fillOpacity;
    if (layer.visibleStroke) {
        strokeOpacity = 1.0;
    } else {
        strokeOpacity = 0.0;
    }
    if (layer.visibleFill) {
        fillOpacity = 1.0;
    } else {
        fillOpacity = 0.0;
    }
    div.innerHTML = ` <svg  width="${layer.radius*2+layer.strokeWeight}" height="${layer.radius*2+layer.strokeWeight}">
      <circle stroke-opacity="${strokeOpacity}" fill-opacity="${fillOpacity}" cx="${layer.radius+layer.strokeWeight/2}" cy="${layer.radius+layer.strokeWeight/2}" r="${layer.radius}" fill="rgb(${layer.fill.r},${layer.fill.g},${layer.fill.b})" stroke="rgb(${layer.stroke.r},${layer.stroke.g},${layer.stroke.b})" stroke-width="${layer.strokeWeight}"/>
    </svg>
    `;
    document.getElementById('imageView').appendChild(div);
}

function renderRectLayer(layer) {
    let div = document.createElement('div');
    div.setAttribute('id', 'view' + layer.id);
    div.style.position = 'absolute';
    div.style.left = layer.x + 'px';
    div.style.top = layer.y + 'px';
    div.style.zIndex = layer.zIndex;
    let strokeOpacity;
    let fillOpacity;
    if (layer.visibleStroke) {
        strokeOpacity = 1.0;
    } else {
        strokeOpacity = 0.0;
    }
    if (layer.visibleFill) {
        fillOpacity = 1.0;
    } else {
        fillOpacity = 0.0;
    }

    div.innerHTML = ` <svg  width="${parseFloat(layer.width)+parseFloat(layer.strokeWeight)}" height="${parseFloat(layer.height)+parseFloat(layer.strokeWeight)}">
      <rect stroke-opacity="${strokeOpacity}" fill-opacity="${fillOpacity}" x="${layer.strokeWeight/2}" y="${layer.strokeWeight/2}" width="${layer.width}" height="${layer.height}" fill="rgb(${layer.fill.r},${layer.fill.g},${layer.fill.b})" stroke="rgb(${layer.stroke.r},${layer.stroke.g},${layer.stroke.b})" stroke-width="${layer.strokeWeight}"/>
    </svg>
    `;
    console.log('here')
    document.getElementById('imageView').appendChild(div);
}