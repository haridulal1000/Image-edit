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
    if (layer.type === 'line') {
        renderLineLayer(layer);
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
    if (layer.type === 'polygon') {
        renderPolygonLayer(layer);
    }
    if (selectedLayer != null) {
        setProperties();
        setFilters();
        setTextMenu();
        setTextProperties();
        setImageView();
        setRotateProperties();
        setShapesProperties();
        setShapesMenu();
        setOpacity();


    }

}

function renderImageLayer(layer) {
    let div = document.createElement('div');
    div.setAttribute('id', 'view' + layer.id);
    div.setAttribute('class', 'view');
    layer.image.style.display = 'block';
    let renderImage = document.createElement('img');
    renderImage.src = layer.image.src;
    renderImage.width = layer.width;
    renderImage.height = layer.height;
    renderImage.style = `filter: brightness(${layer.brightness}%) contrast(${layer.contrast}%) hue-rotate(${layer.hue}deg) saturate(${layer.saturation}%) blur(${layer.blur}px) invert(${layer.invert}%) grayscale(${layer.grayscale}%) sepia(${layer.sepia}%)`;
    if (layer.blendMode == null) {
        div.style.setProperty('mix-blend-mode', 'normal');
        layer.blendMode = 'normal';
    } else {
        div.style.setProperty('mix-blend-mode', layer.blendMode);
        console.log(layer.blendMode);
    }



    div.appendChild(renderImage);
    div.style.zIndex = layer.zIndex;
    div.style.position = 'absolute';
    div.style.left = (parseFloat(layer.x) - cropX) + 'px';
    div.style.top = (parseFloat(layer.y) - cropY) + 'px';
    div.style.transformOrigin = `${layer.originX}px ${layer.originY}px`;
    div.style.transform = `rotate(${layer.rotate}deg)`;
    div.style.opacity = parseFloat(layer.opacity) / 100;
    console.log('rotate: ' + layer.rotate + " " + layer.originX);
    document.getElementById('imageView').appendChild(div);


}

function renderTextLayer(layer) {
    let div = document.createElement('div');
    div.setAttribute('id', 'view' + layer.id);
    div.setAttribute('class', 'view');
    let textArray = layer.text.split('\n');
    let text = '';
    textArray.forEach(element => {
        text = text + element + '<br>';
    });
    div.innerHTML = text;
    div.style.transformOrigin = `${layer.originX}px ${layer.originY}px`;
    div.style.transform = `rotate(${layer.rotate}deg)`;
    console.log('rotate: ' + layer.rotate + " " + layer.originX);
    if (layer.blendMode == null) {
        div.style.setProperty('mix-blend-mode', 'normal');
        layer.blendMode = 'normal';
    } else {
        div.style.setProperty('mix-blend-mode', layer.blendMode);
        console.log(layer.blendMode);
    }
    div.style.setProperty('font-family', layer.fontType);
    div.style.position = 'absolute';
    div.style.width = 'fit-content';
    div.style.left = (parseFloat(layer.x) - cropX) + 'px';
    div.style.top = (parseFloat(layer.y) - cropY) + 'px';
    div.style.fontSize = layer.fontSize + 'px';
    div.style.color = layer.color;
    div.style.zIndex = layer.zIndex;
    div.style.opacity = parseFloat(layer.opacity) / 100;

    document.getElementById('imageView').appendChild(div);
}




function renderLineLayer(layer) {
    let div = document.createElement('div');
    div.setAttribute('id', 'view' + layer.id);
    div.setAttribute('class', 'view');
    div.style.position = 'absolute';
    div.style.left = (parseFloat(layer.x) - cropX) + 'px';
    div.style.top = (parseFloat(layer.y) - cropY) + 'px';
    div.style.zIndex = layer.zIndex;
    div.style.transformOrigin = `${layer.originX}px ${layer.originY}px`;
    div.style.transform = `rotate(${layer.rotate}deg)`;
    console.log('rotate: ' + layer.rotate + " " + layer.originX);
    if (layer.blendMode == null) {
        div.style.setProperty('mix-blend-mode', 'normal');
        layer.blendMode = 'normal';
    } else {
        div.style.setProperty('mix-blend-mode', layer.blendMode);
        console.log(layer.blendMode);
    }

    div.innerHTML = ` <svg  width="${Math.abs(parseFloat(layer.point.x2)-parseFloat(layer.point.x1))+parseFloat(layer.point.x1)+parseFloat(layer.strokeWeight)}" height="${Math.abs(parseFloat(layer.point.y2)-parseFloat(layer.point.y1))+parseFloat(layer.point.y1)+parseFloat(layer.strokeWeight)}">
      <line  x1="${layer.point.x1}" y1="${layer.point.y1}" x2="${layer.point.x2}" y2="${layer.point.y2}" stroke="${layer.stroke}" stroke-width="${layer.strokeWeight}"/>
    </svg>
    `;
    div.style.opacity = parseFloat(layer.opacity) / 100;
    document.getElementById('imageView').appendChild(div);
}









function renderCircleLayer(layer) {
    let div = document.createElement('div');
    div.setAttribute('id', 'view' + layer.id);
    div.setAttribute('class', 'view');
    div.style.position = 'absolute';
    div.style.left = (parseFloat(layer.x) - cropX) + 'px';
    div.style.top = (parseFloat(layer.y) - cropY) + 'px';
    div.style.zIndex = layer.zIndex;
    div.style.transformOrigin = `${layer.originX}px ${layer.originY}px`;
    div.style.transform = `rotate(${layer.rotate}deg)`;
    console.log('rotate: ' + layer.rotate + " " + layer.originX);
    if (layer.blendMode == null) {
        div.style.setProperty('mix-blend-mode', 'normal');
        layer.blendMode = 'normal';
    } else {
        div.style.setProperty('mix-blend-mode', layer.blendMode);
        console.log(layer.blendMode);
    }
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
      <circle stroke-opacity="${strokeOpacity}" fill-opacity="${fillOpacity}" cx="${layer.radius+layer.strokeWeight/2}" cy="${layer.radius+layer.strokeWeight/2}" r="${layer.radius}" fill="${layer.fill}" stroke="${layer.stroke}" stroke-width="${layer.strokeWeight}"/>
    </svg>
    `;
    div.style.opacity = parseFloat(layer.opacity) / 100;
    document.getElementById('imageView').appendChild(div);
}

function renderRectLayer(layer) {
    let div = document.createElement('div');
    div.setAttribute('id', 'view' + layer.id);
    div.setAttribute('class', 'view');
    div.style.position = 'absolute';
    div.style.left = (parseFloat(layer.x) - cropX) + 'px';
    div.style.top = (parseFloat(layer.y) - cropY) + 'px';
    div.style.zIndex = layer.zIndex;
    div.style.transformOrigin = `${layer.originX}px ${layer.originY}px`;
    div.style.transform = `rotate(${layer.rotate}deg)`;
    console.log('rotate: ' + layer.rotate + " " + layer.originX);
    if (layer.blendMode == null) {
        div.style.setProperty('mix-blend-mode', 'normal');
        layer.blendMode = 'normal';
    } else {
        div.style.setProperty('mix-blend-mode', layer.blendMode);
        console.log(layer.blendMode);
    }
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
      <rect stroke-opacity="${strokeOpacity}" fill-opacity="${fillOpacity}" x="${layer.strokeWeight/2}" y="${layer.strokeWeight/2}" width="${layer.width}" height="${layer.height}" fill="${layer.fill}" stroke="${layer.stroke}" stroke-width="${layer.strokeWeight}"/>
    </svg>
    `;
    console.log('here')
    div.style.opacity = parseFloat(layer.opacity) / 100;
    document.getElementById('imageView').appendChild(div);
}


function renderPolygonLayer(layer) {
    let div = document.createElement('div');
    div.setAttribute('id', 'view' + layer.id);
    div.setAttribute('class', 'view');
    div.style.position = 'absolute';
    div.style.left = (parseFloat(layer.x) - cropX) + 'px';
    div.style.top = (parseFloat(layer.y) - cropY) + 'px';
    div.style.zIndex = layer.zIndex;
    div.style.transformOrigin = `${layer.originX}px ${layer.originY}px`;
    div.style.transform = `rotate(${layer.rotate}deg)`;
    console.log('rotate: ' + layer.rotate + " " + layer.originX);
    if (layer.blendMode == null) {
        div.style.setProperty('mix-blend-mode', 'normal');
        layer.blendMode = 'normal';
    } else {
        div.style.setProperty('mix-blend-mode', layer.blendMode);
        console.log(layer.blendMode);
    }
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
    let points = '';
    for (let i = 0; i < layer.point.length; i++) {
        points = points + `${layer.point[i].x} ${layer.point[i].y} `;
    }
    console.log('points ' + points);
    div.innerHTML = ` <svg  width="${layer.width}" height="${layer.height}">
      <polygon points= "${points}" stroke-opacity="${strokeOpacity}" fill-opacity="${fillOpacity}" fill="${layer.fill}" stroke="${layer.stroke}" stroke-width="${layer.strokeWeight}"/>
    </svg>
    `;
    console.log('here')
    div.style.opacity = parseFloat(layer.opacity) / 100;
    document.getElementById('imageView').appendChild(div);
}