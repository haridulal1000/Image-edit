let createSelection = document.getElementById('create-selection');
let makeSelection = document.getElementById('make-selection');
let cancelSelection = document.getElementById('cancel-selection');
let selectCanvas;
let selectContext;
let canvasCreated = false;
let edited = false;
createSelection.addEventListener('click', createSelectionFunction);

function createSelectionFunction() {

    createSelection.style.display = 'none';
    makeSelection.style.display = 'block';
    cancelSelection.style.display = 'block';
    let iv = document.getElementById('imageView');
    console.log('createSelection');
    selectCanvas = document.createElement('canvas');
    selectCanvas.setAttribute('id', 'select' + indexOfSelectedLayer());
    selectCanvas.style.position = 'absolute';
    selectCanvas.style.zIndex = '50';
    selectCanvas.width = layers[indexOfSelectedLayer()].width;
    selectCanvas.height = layers[indexOfSelectedLayer()].height;
    iv.append(selectCanvas);
    canvasCreated = true;
    selectContext = selectCanvas.getContext('2d');
}
let draw = false;
document.getElementById('imageView').addEventListener('mousedown', function(e) {
    if (canvasCreated === true && currentTool != 'move') {
        if (draw === false) {
            draw = true;
            selectContext.clearRect(0, 0, selectCanvas.width, selectCanvas.height);
            selectContext.beginPath();
            selectContext.moveTo(e.offsetX, e.offsetY);

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
    createSelection.style.display = 'block';
    makeSelection.style.display = 'none';
    cancelSelection.style.display = 'none';
});
makeSelection.addEventListener('click', function() {
    edited = true;
    let image = layers[indexOfSelectedLayer()].image;
    let tempCanvas = document.createElement('canvas');
    let tempContext = tempCanvas.getContext('2d');
    tempCanvas.width = layers[indexOfSelectedLayer()].width;
    tempCanvas.height = layers[indexOfSelectedLayer()].height;
    tempContext.drawImage(selectCanvas, 0, 0);
    tempContext.globalCompositeOperation = 'source-in';
    tempContext.drawImage(image, 0, 0);

    let tempImage = new Image();

    tempImage.src = tempCanvas.toDataURL('image/png');
    selectCanvas.remove();
    tempCanvas.remove();
    tempImage.onload = function() {
        addLayer(new ImageLayer({
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
            zIndex: id + 5,
            brightness: 100,
            contrast: 100,
            hue: 0,
            saturation: 100,
            blur: 0,
            visible: true
        }));
        layers[indexOfSelectedLayer()].visible = false;
        selectedLayer = id - 1;
        renderLayersAll();

    }



    createSelection.style.display = 'block';
    makeSelection.style.display = 'none';
    cancelSelection.style.display = 'none';


});