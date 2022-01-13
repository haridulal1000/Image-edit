let canvas = document.createElement('canvas');
let context = canvas.getContext('2d');
let cropCanvas = document.createElement('canvas');
let cropContext = cropCanvas.getContext('2d');
let finalCanvas = document.createElement('canvas');
let finalContext = finalCanvas.getContext('2d');
let exportFormat = 'png';
document.getElementsByName('export-info').forEach(element => {
    element.addEventListener('change', function(e) {
        if (this.value === 'png') {
            exportFormat = 'png';
        } else {
            exportFormat = 'jpg';
        }
    })
});

function Export() {
    canvas.width = cropWidth;
    canvas.height = cropHeight;
    cropCanvas.width = canvas.width;
    cropCanvas.height = canvas.height;
    finalCanvas.width = canvas.width;
    finalCanvas.height = canvas.height;
    let x = 0;
    let y = 0;
    let height = cropCanvas.height;
    let width = cropCanvas.width;










    // context.globalCompositeOperation = 'source-in';




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
        if (layers[i].type === 'polygon' &&
            layers[i].visible === true) {
            exportPolygon(layers[i]);
        }
    }
    cropCanvas.width = canvas.width;
    cropCanvas.height = canvas.height;
    // let x = 0;
    // let y = 0;
    // let height = cropCanvas.height;
    // let width = cropCanvas.width;

    cropContext.beginPath();
    cropContext.moveTo(x + parseFloat(cropRadius), y);
    cropContext.lineTo(x + width - parseFloat(cropRadius), y);
    cropContext.quadraticCurveTo(x + width, y, x + width, y + parseFloat(cropRadius));
    cropContext.lineTo(x + width, y + height - parseFloat(cropRadius));
    cropContext.quadraticCurveTo(x + width, y + height, x + width - parseFloat(cropRadius), y + height);
    cropContext.lineTo(x + parseFloat(cropRadius), y + height);
    cropContext.quadraticCurveTo(x, y + height, x, y + height - parseFloat(cropRadius));
    cropContext.lineTo(x, y + parseFloat(cropRadius));
    cropContext.quadraticCurveTo(x, y, x + parseFloat(cropRadius), y);
    cropContext.closePath();
    cropContext.fill();
    cropContext.globalCompositeOperation = 'source-in';
    if (exportFormat === 'png') {
        // cropContext.clearRect(0, 0, cropCanvas.width, cropCanvas.height);
        cropContext.drawImage(canvas, 0, 0);
        finalContext.drawImage(cropCanvas, 0, 0);
        var jpegUrl = finalCanvas.toDataURL();

        const link = document.createElement("a");
        document.body.appendChild(link);


        link.setAttribute("href", jpegUrl);
        link.setAttribute("download", 'Image.png');
        link.click();
        document.body.removeChild(link);
    } else {
        cropContext.drawImage(canvas, 0, 0);
        finalContext.fillStyle = document.getElementById('bg-color').value;
        finalContext.fillRect(0, 0, canvas.width, canvas.height);
        finalContext.drawImage(cropCanvas, 0, 0);
        var jpegUrl = finalCanvas.toDataURL("image/jpg");

        const link = document.createElement("a");
        document.body.appendChild(link);


        link.setAttribute("href", jpegUrl);
        link.setAttribute("download", 'Image.jpg');
        link.click();
        document.body.removeChild(link);
    }

}

function exportImage(layer) {
    context.save();
    context.globalAlpha = parseFloat(layer.opacity) / 100;
    if (layer.blendMode != 'normal') {
        context.globalCompositeOperation = layer.blendMode;
    }
    context.filter = `brightness(${layer.brightness}%) contrast(${layer.contrast}%) hue-rotate(${layer.hue}deg) saturate(${layer.saturation}%) blur(${layer.blur}px) invert(${layer.invert}%) grayscale(${layer.grayscale}%) sepia(${layer.sepia}%)`;
    context.save();
    context.translate(parseFloat((parseFloat(layer.x) - cropX)) + parseFloat(layer.originX), parseFloat((parseFloat(layer.y) - cropY)) + parseFloat(layer.originY));
    context.rotate(layer.rotate * Math.PI / 180);
    context.translate(-(parseFloat((parseFloat(layer.x) - cropX)) + parseFloat(layer.originX)), -(parseFloat((parseFloat(layer.y) - cropY)) + parseFloat(layer.originY)));

    context.drawImage(layer.image, (parseFloat(layer.x) - cropX), (parseFloat(layer.y) - cropY), layer.width, layer.height);
    context.restore();
}

function exportText(layer) {
    context.globalAlpha = parseFloat(layer.opacity) / 100;
    context.fillStyle = `${layer.color}`;
    // context.font = `${layer.fontSize}px Arial`;
    context.font = layer.fontSize + "px " + layer.fontType;
    // context.fillStyle = 'red';
    let textArray = layer.text.split('\n');
    for (let i = 0; i < textArray.length; i++) {
        context.fillText(textArray[i], (parseFloat(layer.x) - cropX), (parseFloat(layer.y) - cropY) + parseInt(layer.fontSize) * (i + 1));
    };


    context.restore();
}

function exportCircle(layer) {
    context.save();

    context.fillStyle = layer.fill;

    context.globalAlpha = parseFloat(layer.opacity) / 100;
    if (layer.blendMode != 'normal') {
        context.globalCompositeOperation = layer.blendMode;
    }



    context.lineWidth = parseFloat(layer.strokeWeight);



    let centerX = parseInt((parseFloat(layer.x) - cropX)) + parseInt(layer.radius) + parseFloat(layer.strokeWeight) / 2;
    let centerY = parseInt((parseFloat(layer.y) - cropY)) + parseInt(layer.radius) + parseFloat(layer.strokeWeight) / 2;
    context.strokeStyle = layer.stroke;
    context.beginPath();
    context.arc(centerX, centerY, parseInt(layer.radius), 0, Math.PI * 2);
    if (layer.visibleFill === true) {
        context.fill();
    }
    if (layer.visibleStroke === true) {
        context.stroke();
    }
    context.restore();

}

function exportRect(layer) {


    context.save();
    context.fillStyle = layer.fill;

    context.globalAlpha = parseFloat(layer.opacity) / 100;
    if (layer.blendMode != 'normal') {
        context.globalCompositeOperation = layer.blendMode;
    }

    context.lineWidth = parseFloat(layer.strokeWeight);

    context.strokeStyle = layer.stroke;
    let x = (parseFloat(layer.x) - cropX) + layer.strokeWeight / 2;
    let y = (parseFloat(layer.y) - cropY) + layer.strokeWeight / 2;
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
    context.restore();
}

function exportLine(layer) {

    context.save();
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
    context.restore();


}

function exportPolygon(layer) {


    context.save();
    context.translate(layer.x, layer.y);
    context.fillStyle = layer.fill;

    context.globalAlpha = parseFloat(layer.opacity) / 100;
    if (layer.blendMode != 'normal') {
        context.globalCompositeOperation = layer.blendMode;
    }

    context.lineWidth = parseFloat(layer.strokeWeight);

    context.strokeStyle = layer.stroke;
    let x = (parseFloat(layer.x) - cropX) + layer.strokeWeight / 2;
    let y = (parseFloat(layer.y) - cropY) + layer.strokeWeight / 2;
    context.beginPath();
    context.moveTo(layer.point[0].x, layer.point[0].y);
    for (let i = 1; i < layer.sides; i++) {
        context.lineTo(layer.point[i].x, layer.point[i].y);
    }
    context.closePath();


    if (layer.visibleFill === true) {
        context.fill();
    }
    if (layer.visibleStroke === true) {
        context.stroke();
    }
    context.restore();

}