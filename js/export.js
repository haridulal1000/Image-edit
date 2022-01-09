let canvas = document.createElement('canvas');
let context = canvas.getContext('2d');
document.getElementById('export').addEventListener('click', Export);

function Export() {
    canvas.width = layers[0].width;
    canvas.height = layers[0].height;
    for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === 'image') {
            exportImage(layers[i]);
        }
        if (layers[i].type === 'text') {
            exportText(layers[i]);
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
    console.log('Text export start');
    context.fillStyle = `rgb(${layer.color.r},${layer.color.g},${layer.color.b})`;
    // context.font = `${layer.fontSize}px Arial`;
    context.font = layer.fontSize + "px " + " Arial";
    // context.fillStyle = 'red';
    console.log(layer.fontSize);
    context.fillText(layer.text, layer.x, layer.y + parseInt(layer.fontSize));
    console.log('text export end');
}