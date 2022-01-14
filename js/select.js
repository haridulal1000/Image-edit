let createSelection = document.getElementById('create-selection');
let makeSelection = document.getElementById('make-selection');
let invertSelection = document.getElementById('invert-selection');
let cancelSelection = document.getElementById('cancel-selection');
let selectCanvas;
let selectContext;
let canvasCreated = false;
let edited = false;
createSelection.addEventListener('click', createSelectionFunction);

function createSelectionFunction() {
    document.getElementById('viewport').style.cursor = 'crosshair';

    createSelection.style.display = 'none';
    makeSelection.style.display = 'block';
    invertSelection.style.display = 'block';
    cancelSelection.style.display = 'block';
    let iv = document.getElementById('imageView');
    selectCanvas = document.createElement('canvas');
    selectCanvas.setAttribute('id', 'select' + indexOfSelectedLayer());
    selectCanvas.style.position = 'absolute';
    selectCanvas.style.zIndex = parseInt(id) + 10;
    selectCanvas.width = cropWidth;
    selectCanvas.height = cropHeight;
    selectCanvas.style.border = '2px solid blue';
    iv.append(selectCanvas);
    canvasCreated = true;
    selectContext = selectCanvas.getContext('2d');
}
let draw = false;
let ref = document.getElementById('imageView').getBoundingClientRect();
let canRect;
document.getElementById('imageView').addEventListener('mousedown', function(e) {
    if (canvasCreated === true && currentTool != 'move') {
        if (draw === false) {
            draw = true;
            canRect = selectCanvas.getBoundingClientRect();
            selectContext.clearRect(0, 0, selectCanvas.width, selectCanvas.height);
            selectContext.beginPath();
            selectContext.moveTo((e.clientX - canRect.left) / scale, (e.clientY - canRect.top) / scale);

        }
    }
});
document.getElementById('imageView').addEventListener('mousemove', function(e) {
    if (canvasCreated === true && currentTool != 'move') {
        if (draw === true) {

            selectContext.lineTo(e.offsetX, e.offsetY);
            selectContext.stroke();

        }
    }
});

document.getElementById('imageView').addEventListener('mouseup', function(e) {
    if (canvasCreated === true && currentTool != 'move') {
        if (draw === true) {
            selectContext.closePath();
            selectContext.stroke();
            selectContext.fillStyle = 'red';
            selectContext.fill();
            draw = false;

        }
    }
});
cancelSelection.addEventListener('click', function(e) {
    selectCanvas.remove();
    document.getElementById('viewport').style.cursor = 'auto';
    createSelection.style.display = 'block';
    makeSelection.style.display = 'none';
    invertSelection.style.display = 'none';
    cancelSelection.style.display = 'none';
});
makeSelection.addEventListener('click', function() {
    edited = true;
    document.getElementById('viewport').style.cursor = 'auto';
    let image = layers[indexOfSelectedLayer()].image;
    let tempCanvas = document.createElement('canvas');
    let tempContext = tempCanvas.getContext('2d');
    tempCanvas.width = selectCanvas.width
    tempCanvas.height = selectCanvas.height;
    tempContext.drawImage(selectCanvas, 0, 0);
    tempContext.globalCompositeOperation = 'source-in';
    tempContext.drawImage(image, parseFloat(layers[indexOfSelectedLayer()].x) - parseFloat(cropX), parseFloat(layers[indexOfSelectedLayer()].y) - parseFloat(cropY), layers[indexOfSelectedLayer()].width, layers[indexOfSelectedLayer()].height);

    let tempImage = new Image();

    tempImage.src = tempCanvas.toDataURL('image/png');
    selectCanvas.remove();
    tempCanvas.remove();
    tempImage.onload = function() {
        layers.splice(indexOfSelectedLayer() + 1, 0, new ImageLayer({
            type: 'image',
            id: id,
            originX: 0,
            originY: 0,
            rotate: 0,
            width: tempImage.width,
            height: tempImage.height,
            image: tempImage,
            x: 0,
            y: 0,
            zIndex: layers[indexOfSelectedLayer()].zIndex + 1,
            brightness: 100,
            contrast: 100,
            hue: 0,
            saturation: 100,
            blur: 0,
            grayscale: 0,
            invert: 0,
            sepia: 0,
            visible: true
        }));
        id++;
        for (let i = indexOfSelectedLayer() + 2; i < layers.length; i++) {
            layers[i].zIndex = parseInt(layers[i].zIndex) + 1;
        }
        layers[indexOfSelectedLayer()].visible = false;
        selectedLayer = id - 1;
        renderLayersAll();

    }



    createSelection.style.display = 'block';
    makeSelection.style.display = 'none';
    cancelSelection.style.display = 'none';


});
invertSelection.addEventListener('click', function() {
    edited = true;
    document.getElementById('viewport').style.cursor = 'auto';
    let image = layers[indexOfSelectedLayer()].image;
    // image.width = selectCanvas.width;
    // image.height = selectCanvas.height;
    let tempCanvas = document.createElement('canvas');
    let tempContext = tempCanvas.getContext('2d');
    tempCanvas.width = selectCanvas.width
    tempCanvas.height = selectCanvas.height;
    tempContext.drawImage(selectCanvas, 0, 0);
    tempContext.globalCompositeOperation = 'source-out';
    tempContext.drawImage(image, parseFloat(layers[indexOfSelectedLayer()].x) - parseFloat(cropX), parseFloat(layers[indexOfSelectedLayer()].y) - parseFloat(cropY), layers[indexOfSelectedLayer()].width, layers[indexOfSelectedLayer()].height);

    let tempImage = new Image();

    tempImage.src = tempCanvas.toDataURL('image/png');
    selectCanvas.remove();
    tempCanvas.remove();
    tempImage.onload = function() {
        layers.splice(indexOfSelectedLayer() + 1, 0, new ImageLayer({
            type: 'image',
            id: id,
            originX: 0,
            originY: 0,
            rotate: 0,
            width: tempImage.width,
            height: tempImage.height,
            image: tempImage,
            x: 0,
            y: 0,
            zIndex: layers[indexOfSelectedLayer()].zIndex + 1,
            brightness: 100,
            contrast: 100,
            hue: 0,
            saturation: 100,
            blur: 0,
            grayscale: 0,
            invert: 0,
            sepia: 0,
            visible: true
        }));
        id++;
        for (let i = indexOfSelectedLayer() + 2; i < layers.length; i++) {
            layers[i].zIndex = parseInt(layers[i].zIndex) + 1;
        }
        layers[indexOfSelectedLayer()].visible = false;
        selectedLayer = id - 1;
        renderLayersAll();

    }



    createSelection.style.display = 'block';
    makeSelection.style.display = 'none';
    invertSelection.style.display = 'none';
    cancelSelection.style.display = 'none';


});