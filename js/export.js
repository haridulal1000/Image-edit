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
    context.drawImage(layer.image, layer.x, layer.y, layer.width, layer.height);
}

function exportText(layer) {
    context.fillStyle = `rgb(${layer.color.r},${layer.color.g},${layer.color.b})`;
    // context.font = `${layer.fontSize}px Arial`;
    context.font = layer.fontSize + "px " + " Arial";
    // context.fillStyle = 'red';

    context.fillText(layer.text, layer.x, layer.y + parseInt(layer.fontSize));
}

function exportCircle(layer) {

    context.fillStyle = `rgb(${layer.fill.r},${layer.fill.g},${layer.fill.b})`;





    context.lineWidth = parseFloat(layer.strokeWeight);



    let centerX = parseInt(layer.x) + parseInt(layer.radius) + parseFloat(layer.strokeWeight) / 2;
    let centerY = parseInt(layer.y) + parseInt(layer.radius) + parseFloat(layer.strokeWeight) / 2;
    context.strokeStyle = `rgb(${layer.stroke.r},${layer.stroke.g},${layer.stroke.b})`;
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



    context.fillStyle = `rgb(${layer.fill.r},${layer.fill.g},${layer.fill.b})`;



    context.lineWidth = parseFloat(layer.strokeWeight);

    context.strokeStyle = `rgb(${layer.stroke.r},${layer.stroke.g},${layer.stroke.b})`;
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