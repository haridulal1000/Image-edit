let canvas = document.createElement('canvas');
let context = canvas.getContext('2d');

function Export() {
    canvas.width = layers[0].width;
    canvas.height = layers[0].height;
    for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === 'image' && layers[i].visible === true) {
            exportImage(layers[i]);
        }
        if (layers[i].type === 'text' &&
            layers[i].visible === true) {
            exportText(layers[i]);
        }
        if (layers[i].type === 'line' &&
            layers[i].visible === true) {
            exportLine(layers[i]);
        }
        if (layers[i].type === 'circle' &&
            layers[i].visible === true) {
            exportCircle(layers[i]);
        }
        if (layers[i].type === 'rect' &&
            layers[i].visible === true) {
            exportRect(layers[i]);
        }
    }
    var jpegUrl = canvas.toDataURL("image/jpg");

    const link = document.createElement("a");
    document.body.appendChild(link);


    link.setAttribute("href", jpegUrl);
    link.setAttribute("download", 'Image.jpg');
    link.click();
    document.body.removeChild(link);
}

function exportImage(layer) {
    context.globalAlpha = parseFloat(layer.opacity) / 100;
    if (layer.blendMode != 'normal') {
        context.globalCompositeOperation = layer.blendMode;
    }
    context.filter = `brightness(${layer.brightness}%) contrast(${layer.contrast}%) hue-rotate(${layer.hue}deg) saturate(${layer.saturation}%) blur(${layer.blur}px)`;
    context.save();
    context.translate(parseFloat(layer.x) + parseFloat(layer.originX), parseFloat(layer.y) + parseFloat(layer.originY));
    context.rotate(layer.rotate * Math.PI / 180);
    context.translate(-(parseFloat(layer.x) + parseFloat(layer.originX)), -(parseFloat(layer.y) + parseFloat(layer.originY)));

    context.drawImage(layer.image, layer.x, layer.y, layer.width, layer.height);
    context.restore();
}

function exportText(layer) {
    context.globalAlpha = parseFloat(layer.opacity) / 100;
    context.fillStyle = `rgb(${layer.color.r},${layer.color.g},${layer.color.b})`;
    // context.font = `${layer.fontSize}px Arial`;
    context.font = layer.fontSize + "px " + " Arial";
    // context.fillStyle = 'red';

    context.fillText(layer.text, layer.x, layer.y + parseInt(layer.fontSize));
}

function exportCircle(layer) {

    context.fillStyle = layer.fill;

    context.globalAlpha = parseFloat(layer.opacity) / 100;
    if (layer.blendMode != 'normal') {
        context.globalCompositeOperation = layer.blendMode;
    }



    context.lineWidth = parseFloat(layer.strokeWeight);



    let centerX = parseInt(layer.x) + parseInt(layer.radius) + parseFloat(layer.strokeWeight) / 2;
    let centerY = parseInt(layer.y) + parseInt(layer.radius) + parseFloat(layer.strokeWeight) / 2;
    context.strokeStyle = layer.stroke;
    context.beginPath();
    context.arc(centerX, centerY, parseInt(layer.radius), 0, Math.PI * 2);
    if (layer.visibleFill === true) {
        context.fill();
    }
    if (layer.visibleStroke === true) {
        context.stroke();
    }

}

function exportRect(layer) {



    context.fillStyle = layer.fill;

    context.globalAlpha = parseFloat(layer.opacity) / 100;
    if (layer.blendMode != 'normal') {
        context.globalCompositeOperation = layer.blendMode;
    }

    context.lineWidth = parseFloat(layer.strokeWeight);

    context.strokeStyle = layer.stroke;
    let x = layer.x + layer.strokeWeight / 2;
    let y = layer.y + layer.strokeWeight / 2;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, y + layer.height);
    context.lineTo(x + layer.width, y + layer.height);
    context.lineTo(x + layer.width, y);
    context.closePath();
    if (layer.visibleFill === true) {
        context.fill();
    }
    if (layer.visibleStroke === true) {
        context.stroke();
    }

}

function exportLine(layer) {


    context.globalAlpha = parseFloat(layer.opacity) / 100;
    if (layer.blendMode != 'normal') {
        context.globalCompositeOperation = layer.blendMode;
    }



    context.lineWidth = parseFloat(layer.strokeWeight);

    context.strokeStyle = layer.stroke;
    let x = layer.point.x1 + 2 * layer.strokeWeight;
    let y = layer.point.y1 + 2 * layer.strokeWeight;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(layer.point.x2 + 2 * layer.strokeWeight, layer.point.y2 + 2 * layer.strokeWeight);
    context.stroke();


}