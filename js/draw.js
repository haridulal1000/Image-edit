let drawStart = document.getElementById('draw-start');
let drawStroke = document.getElementById('draw-stroke');
let drawColor = document.getElementById('draw-color');
let drawClear = document.getElementById('draw-clear');
let drawProperties = document.getElementById('draw-properties');
let drawCancel = document.getElementById('draw-cancel');
let drawSet = document.getElementById('draw-set');
let drawCanvas;
let drawContext;
let drawCanvasCreated = false;


drawSet.addEventListener('click', function(e) {



    let tempImage = new Image();

    tempImage.src = drawCanvas.toDataURL('image/png');
    drawCanvas.remove();
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
        selectedLayer = id - 1;
        renderLayersAll();

    }
    drawProperties.style.display = 'none';
    drawStart.style.display = 'block';

});



drawStart.addEventListener('click', function(e) {
    drawCanvas = document.createElement('canvas');
    drawContext = drawCanvas.getContext('2d');
    drawCanvas.height = layers[0].height;
    drawCanvas.width = layers[0].width;
    drawCanvas.style.zIndex = parseInt(id) + 10;
    drawCanvas.style.position = 'absolute';
    document.getElementById('imageView').appendChild(drawCanvas);
    drawCanvas.style.border = '5px solid blue';
    drawContext = drawCanvas.getContext('2d');
    drawCanvasCreated = true;
    drawStart.style.display = 'none';
    drawProperties.style.display = 'block';

});
drawClear.addEventListener('click', function() {
    drawContext.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
});
drawCancel.addEventListener('click', function() {
    drawCanvas.remove();
    drawProperties.style.display = 'none';
    drawStart.style.display = 'block';
});


let drawStarting = false;

document.getElementById('imageView').addEventListener('mousedown', function(e) {
    if (currentTool === 'draw') {
        if (drawStarting === false) {
            drawStarting = true;
            drawContext.strokeStyle = drawColor.value;
            drawContext.lineWidth = drawStroke.value;
            canRect = drawCanvas.getBoundingClientRect();
            drawContext.beginPath();
            drawContext.moveTo((e.clientX - canRect.left) / scale, (e.clientY - canRect.top) / scale);

        }
    }
});
document.getElementById('imageView').addEventListener('mousemove', function(e) {
    if (drawCanvasCreated === true && currentTool != 'move') {
        if (drawStarting === true) {

            drawContext.lineTo(e.offsetX, e.offsetY);
            drawContext.stroke();

        }
    }
});

document.getElementById('imageView').addEventListener('mouseup', function(e) {
    if (drawStarting === true) {


        drawStarting = false;


    }
});