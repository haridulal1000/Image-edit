let shapesTools = document.getElementById('shapes-tools');
let lineProperties = document.getElementById('line-properties');
let circleProperties = document.getElementById('circle-properties');
let rectProperties = document.getElementById('rect-properties');

function setShapesMenu() {
    shapesTools.style.display = 'block';
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            if (layers[i].type === 'line') {
                lineProperties.style.display = 'block';
                circleProperties.style.display = 'none';
                rectProperties.style.display = 'none';
            } else if (layers[i].type === 'circle') {
                circleProperties.style.display = 'block';
                rectProperties.style.display = 'none';
                lineProperties.style.display = 'none';
            } else if (layers[i].type === 'rect') {
                rectProperties.style.display = 'block';
                circleProperties.style.display = 'none';
                lineProperties.style.display = 'none';
            } else {
                rectProperties.style.display = 'none';
                circleProperties.style.display = 'none';
                lineProperties.style.display = 'none';
            }
        }
    }
}

document.getElementById('shapes-circle').addEventListener('click', function(e) {
    addLayer(
        new Circle({
            type: 'circle',
            id: id,
            width: 1000,
            height: 1000,
            x: 0,
            y: 0,
            zIndex: id + 5,
            center: {
                x: 100,
                y: 100
            },
            radius: 50,
            fill: {
                r: 255,
                g: 0,
                b: 0
            },
            visible: true
        })
    );
    renderLayersAll();
    console.log('here');
});

function setShapesProperties() {
    for (let i = 0; i < layers.length; i++) {
        if (layers[i].id == selectedLayer && layers[i].type === 'line') {
            setLineProperties(layers[i]);
        }
        if (layers[i].id == selectedLayer && layers[i].type === 'circle') {
            setCircleProperties(layers[i]);
        }
        if (layers[i].id == selectedLayer && layers[i].type === 'rect') {
            setRectProperties(layers[i]);
        }
    }
}

function setCircleProperties(layer) {
    document.getElementById('circle-fill-red').value = layer.fill.r;
    document.getElementById('circle-fill-red-value').innerHTML = layer.fill.r;
    document.getElementById('circle-fill-blue').value = layer.fill.b;
    document.getElementById('circle-fill-blue-value').innerHTML = layer.fill.b;
    document.getElementById('circle-fill-green').value = layer.fill.g;
    document.getElementById('circle-fill-green-value').innerHTML = layer.fill.g;
}