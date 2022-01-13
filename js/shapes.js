let shapesTools = document.getElementById('shapes-tools');
let lineProperties = document.getElementById('line-properties');
let circleProperties = document.getElementById('circle-properties');
let rectProperties = document.getElementById('rect-properties');
let PolygonProperties = document.getElementById('polygon-properties');

function setShapesMenu() {
    shapesTools.style.display = 'block';
    lineProperties.style.display = 'none';
    circleProperties.style.display = 'none';
    rectProperties.style.display = 'none';
    PolygonProperties.style.display = 'none';
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            if (layers[i].type === 'line') {
                lineProperties.style.display = 'block';
                circleProperties.style.display = 'none';
                rectProperties.style.display = 'none';
                PolygonProperties.style.display = 'none';
            } else if (layers[i].type === 'circle') {
                circleProperties.style.display = 'block';
                rectProperties.style.display = 'none';
                lineProperties.style.display = 'none';
                PolygonProperties.style.display = 'none';
            } else if (layers[i].type === 'rect') {
                rectProperties.style.display = 'block';
                circleProperties.style.display = 'none';
                lineProperties.style.display = 'none';
                PolygonProperties.style.display = 'none';
            } else if (layers[i].type === 'polygon') {
                circleProperties.style.display = 'none';
                lineProperties.style.display = 'none';
                rectProperties.style.display = 'none';
                PolygonProperties.style.display = 'block';
            }
        }
    }
}



document.getElementById('shapes-circle').addEventListener('click', function(e) {
    addLayer(
        new Circle({
            type: 'circle',
            id: id,
            x: 0,
            y: 0,
            zIndex: id + 5,
            radius: 50,
            fill: '#1648c7',
            stroke: '#c20606',
            originX: 0,
            originY: 0,
            rotate: 0,
            visibleStroke: true,
            visibleFill: true,
            strokeWeight: 10,
            visible: true,
            opacity: 100
        })
    );
    selectedLayer = id - 1;
    renderLayersAll();
    // console.log('here');
});
document.getElementById('shapes-rect').addEventListener('click', function(e) {
    addLayer(
        new Rect({
            type: 'rect',
            id: id,
            x: 100,
            y: 100,
            zIndex: id + 5,
            width: 100,
            height: 50,
            fill: '#1648c7',
            stroke: '#c20606',
            originX: 0,
            originY: 0,
            rotate: 0,
            strokeWeight: 10,
            visibleStroke: true,
            visibleFill: true,
            visible: true,
            opacity: 100
        })
    );
    selectedLayer = id - 1;
    renderLayersAll();
    // console.log('here');
});

document.getElementById('shapes-polygon').addEventListener('click', function(e) {
    insertPolygon();
});


function insertPolygon() {
    let sides = parseFloat(document.getElementById('polygon-sides').value);
    let arr = [];
    let rad = 200;
    for (let i = 0; i < sides; i++) {
        arr.push({
            x: rad + rad * Math.cos(i * Math.PI * 2 / (sides)),
            y: rad + rad * Math.sin(i * Math.PI * 2 / (sides))
        });
    }
    // console.log('before: ' + arr);
    addLayer(
        new Polygon({
            type: 'polygon',
            id: id,
            x: 100,
            y: 100,
            sides: 5,
            zIndex: id + 5,
            width: cropWidth,
            height: cropHeight,
            fill: '#1648c7',
            stroke: '#c20606',
            originX: 0,
            originY: 0,
            rotate: 0,
            strokeWeight: 10,
            point: arr,
            visibleStroke: true,
            visibleFill: true,
            visible: true,
            opacity: 100,
            angle: 0,
            radius: 200
        })
    );
    selectedLayer = id - 1;
    renderLayersAll();
    // console.log('here');
}

function updatePolygon() {
    let sides = parseFloat(document.getElementById('polygon-sides').value);
    let arr = [];
    let rad = parseFloat(document.getElementById('polygon-radius').value);
    let angle = document.getElementById('polygon-angle').value;
    for (let i = 0; i < sides; i++) {
        arr.push({
            x: rad + rad * Math.cos(i * Math.PI * 2 / (sides) + parseFloat(angle * Math.PI / 180)),
            y: rad + rad * Math.sin(i * Math.PI * 2 / (sides) + parseFloat(angle * Math.PI / 180))
        });
    }
    layers[indexOfSelectedLayer()].point = arr;
    layers[indexOfSelectedLayer()].sides = sides;
    layers[indexOfSelectedLayer()].radius = rad;
    layers[indexOfSelectedLayer()].angle = angle;
    renderLayer(layers[indexOfSelectedLayer()]);
}


document.getElementById('shapes-line').addEventListener('click', function(e) {
    addLayer(
        new Line({
            type: 'line',
            id: id,
            x: 20,
            y: 20,
            zIndex: id + 5,
            stroke: '#c20606',
            originX: 0,
            originY: 0,
            rotate: 0,
            strokeWeight: 10,
            visibleStroke: true,
            visible: true,
            point: {
                x1: 50,
                y1: 50,
                x2: 400,
                y2: 400
            }
        })
    );
    selectedLayer = id - 1;
    renderLayersAll();
    // console.log('here');
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
        if (layers[i].id == selectedLayer && layers[i].type === 'polygon') {
            setPolygonProperties(layers[i]);
        }
    }
}

function setLineProperties(layer) {
    document.getElementById('line-stroke-color').value = layer.stroke;
    document.getElementById('line-stroke').value = layer.strokeWeight;
}

function setCircleProperties(layer) {
    document.getElementById('circle-radius').value = layer.radius;
    document.getElementById('circle-stroke').value = layer.strokeWeight;

    document.getElementById('circle-fill-color').value = layer.fill;


    document.getElementById('circle-stroke-color').value = layer.stroke;
}

function setRectProperties(layer) {
    document.getElementById('rect-width').value = layer.width;
    document.getElementById('rect-height').value = layer.height;
    document.getElementById('rect-stroke').value = layer.strokeWeight;

    document.getElementById('rect-fill-color').value = layer.fill;
    document.getElementById('rect-stroke-color').value = layer.stroke;
}

function setPolygonProperties(layer) {
    document.getElementById('polygon-radius').value = layer.radius;
    document.getElementById('polygon-angle').value = layer.angle;
    document.getElementById('polygon-sides').value = layer.sides;

    document.getElementById('polygon-stroke').value = layer.strokeWeight;

    document.getElementById('polygon-fill-color').value = layer.fill;
    document.getElementById('polygon-stroke-color').value = layer.stroke;

}



let inputs = document.querySelectorAll('#shapes-menu input');
inputs.forEach(element => {
    element.addEventListener('change', function(e) {
        if (e.target.getAttribute('id') === 'line-stroke') {
            layers[parseInt(indexOfSelectedLayer())].strokeWeight = parseInt(this.value);
        }
        if (e.target.getAttribute('id') === 'line-stroke-color') {
            layers[parseInt(indexOfSelectedLayer())].stroke = this.value;
        }
        if (e.target.getAttribute('id') === 'circle-radius') {
            layers[parseInt(indexOfSelectedLayer())].radius = parseInt(this.value);
        }
        if (e.target.getAttribute('id') === 'circle-stroke') {
            layers[parseInt(indexOfSelectedLayer())].strokeWeight = parseInt(this.value);

        }
        if (e.target.getAttribute('id') === 'circle-stroke-visible') {
            layers[parseInt(indexOfSelectedLayer())].visibleStroke = this.checked;

        }
        if (e.target.getAttribute('id') === 'circle-fill-visible') {
            layers[parseInt(indexOfSelectedLayer())].visibleFill = this.checked;

        }
        if (e.target.getAttribute('id') === 'circle-stroke-color') {
            layers[parseInt(indexOfSelectedLayer())].stroke = this.value;
        }
        if (e.target.getAttribute('id') === 'circle-fill-color') {
            layers[parseInt(indexOfSelectedLayer())].fill = this.value;
        }





        if (e.target.getAttribute('id') === 'rect-width') {
            layers[parseInt(indexOfSelectedLayer())].width = parseInt(this.value);
        }
        if (e.target.getAttribute('id') === 'rect-height') {
            layers[parseInt(indexOfSelectedLayer())].height = parseInt(this.value);
        }

        if (e.target.getAttribute('id') === 'rect-stroke-visible') {
            layers[parseInt(indexOfSelectedLayer())].visibleStroke = this.checked;

        }
        if (e.target.getAttribute('id') === 'rect-fill-visible') {
            layers[parseInt(indexOfSelectedLayer())].visibleFill = this.checked;

        }
        if (e.target.getAttribute('id') === 'rect-stroke') {
            layers[parseInt(indexOfSelectedLayer())].strokeWeight = parseInt(this.value);

        }
        if (e.target.getAttribute('id') === 'rect-stroke-color') {
            layers[parseInt(indexOfSelectedLayer())].stroke = this.value;
        }
        if (e.target.getAttribute('id') === 'rect-fill-color') {
            layers[parseInt(indexOfSelectedLayer())].fill = this.value;
        }







        if (e.target.getAttribute('id') === 'polygon-sides') {
            updatePolygon();
        }
        if (e.target.getAttribute('id') === 'polygon-radius') {
            updatePolygon();
        }
        if (e.target.getAttribute('id') === 'polygon-angle') {
            updatePolygon();
        }

        if (e.target.getAttribute('id') === 'polygon-stroke-visible') {
            layers[parseInt(indexOfSelectedLayer())].visibleStroke = this.checked;

        }
        if (e.target.getAttribute('id') === 'polygon-fill-visible') {
            layers[parseInt(indexOfSelectedLayer())].visibleFill = this.checked;

        }
        if (e.target.getAttribute('id') === 'polygon-stroke') {
            layers[parseInt(indexOfSelectedLayer())].strokeWeight = parseInt(this.value);

        }
        if (e.target.getAttribute('id') === 'polygon-stroke-color') {
            layers[parseInt(indexOfSelectedLayer())].stroke = this.value;
        }
        if (e.target.getAttribute('id') === 'polygon-fill-color') {
            layers[parseInt(indexOfSelectedLayer())].fill = this.value;
        }


        renderLayer(layers[parseInt(indexOfSelectedLayer())]);
    });
});
let textInputs = document.querySelectorAll('#shapes-menu input[type="text"]');
textInputs.forEach(element => {
    element.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowUp') {
            if (this.getAttribute('id') === 'line-stroke') {
                this.value = parseInt(this.value) + 1;
                layers[indexOfSelectedLayer()].strokeWeight = parseInt(this.value);
            }
            if (this.getAttribute('id') === 'circle-radius') {
                this.value = parseInt(this.value) + 5;
                layers[indexOfSelectedLayer()].radius = parseInt(this.value);
            }
            if (this.getAttribute('id') === 'circle-stroke') {
                this.value = parseInt(this.value) + 1;
                layers[indexOfSelectedLayer()].strokeWeight = parseInt(this.value);
            }



            if (this.getAttribute('id') === 'rect-width') {
                this.value = parseInt(this.value) + 5;
                layers[indexOfSelectedLayer()].width = parseInt(this.value);
            }
            if (this.getAttribute('id') === 'rect-height') {
                this.value = parseInt(this.value) + 5;
                layers[indexOfSelectedLayer()].height = parseInt(this.value);
            }
            if (this.getAttribute('id') === 'rect-stroke') {
                this.value = parseInt(this.value) + 1;
                layers[indexOfSelectedLayer()].strokeWeight = parseInt(this.value);
            }
            if (this.getAttribute('id') === 'polygon-sides') {
                this.value = parseInt(this.value) + 1;
                layers[indexOfSelectedLayer()].sides = parseInt(this.value);
                updatePolygon();
            }
            if (this.getAttribute('id') === 'polygon-radius') {
                this.value = parseInt(this.value) + 5;
                layers[indexOfSelectedLayer()].sides = parseInt(this.value);
                updatePolygon();
            }
            if (this.getAttribute('id') === 'polygon-stroke') {
                this.value = parseInt(this.value) + 1;
                layers[indexOfSelectedLayer()].strokeWeight = parseInt(this.value);
            }
            if (this.getAttribute('id') === 'polygon-angle') {
                this.value = parseInt(this.value) + 5;
                layers[indexOfSelectedLayer()].angle = parseInt(this.value);
                updatePolygon();
            }
            renderLayer(layers[indexOfSelectedLayer()]);
        }
        if (e.key === 'ArrowDown') {
            if (parseInt(this.value) <= 0) {
                return;
            }
            if (this.getAttribute('id') === 'line-stroke') {
                this.value = parseInt(this.value) - 1;
                layers[indexOfSelectedLayer()].strokeWeight = parseInt(this.value);
            }
            if (this.getAttribute('id') === 'circle-radius') {

                this.value = parseInt(this.value) - 5;
                layers[indexOfSelectedLayer()].radius = parseInt(this.value);
            }
            if (this.getAttribute('id') === 'circle-stroke') {
                this.value = parseInt(this.value) - 1;
                layers[indexOfSelectedLayer()].strokeWeight = parseInt(this.value);
            }




            if (this.getAttribute('id') === 'rect-width') {
                this.value = parseInt(this.value) - 5;
                layers[indexOfSelectedLayer()].width = parseInt(this.value);
            }
            if (this.getAttribute('id') === 'rect-height') {
                this.value = parseInt(this.value) - 5;
                layers[indexOfSelectedLayer()].height = parseInt(this.value);
            }
            if (this.getAttribute('id') === 'rect-stroke') {
                this.value = parseInt(this.value) - 1;
                layers[indexOfSelectedLayer()].strokeWeight = parseInt(this.value);
            }


            if (this.getAttribute('id') === 'polygon-sides') {
                this.value = parseInt(this.value) - 1;
                layers[indexOfSelectedLayer()].sides = parseInt(this.value);
            }
            if (this.getAttribute('id') === 'polygon-stroke') {
                this.value = parseInt(this.value) - 1;
                layers[indexOfSelectedLayer()].strokeWeight = parseInt(this.value);
            }
            if (this.getAttribute('id') === 'polygon-sides') {
                this.value = parseInt(this.value) - 1;
                layers[indexOfSelectedLayer()].sides = parseInt(this.value);
                updatePolygon();
            }
            if (this.getAttribute('id') === 'polygon-radius') {
                this.value = parseInt(this.value) - 5;
                layers[indexOfSelectedLayer()].sides = parseInt(this.value);
                updatePolygon();
            }
            if (this.getAttribute('id') === 'polygon-angle') {
                this.value = parseInt(this.value) - 5;
                layers[indexOfSelectedLayer()].angle = parseInt(this.value);
                updatePolygon();
            }
            renderLayer(layers[indexOfSelectedLayer()]);
        }

    })
});
let lineHold = false;
let chooseLinePoint;
let lineX;
let lineY;

document.getElementById('imageView').addEventListener('mousedown', function(e) {
    if (currentTool != 'move' && layers.length > 0) {
        if (layers[indexOfSelectedLayer()].type != 'line') {
            return;
        }
        let layer = layers[indexOfSelectedLayer()];
        lineHold = true;
        let rec = document.getElementById('imageView').getBoundingClientRect();
        if (distance(layer.point.x1, layer.point.y1, (e.clientX - rec.left) / scale, (e.clientY - rec.top) / scale) < distance(layer.point.x2, layer.point.y2, (e.clientX - rec.left) / scale, (e.clientY - rec.top) / scale)) {
            chooseLinePoint = 0;
        } else {
            chooseLinePoint = 1;
        }
        lineX = e.clientX;
        lineY = e.clientY;

    }
});
document.getElementById('imageView').addEventListener('mousemove', function(e) {
    e.preventDefault();
    if (lineHold === true) {

        if (chooseLinePoint === 0) {
            layers[indexOfSelectedLayer()].point.x1 = parseFloat(layers[indexOfSelectedLayer()].point.x1) + (e.clientX - lineX) / scale;
            layers[indexOfSelectedLayer()].point.y1 = parseFloat(layers[indexOfSelectedLayer()].point.y1) + (e.clientY - lineY) / scale;
        } else {
            layers[indexOfSelectedLayer()].point.x2 = parseFloat(layers[indexOfSelectedLayer()].point.x2) + (e.clientX - lineX) / scale;
            layers[indexOfSelectedLayer()].point.y2 = parseFloat(layers[indexOfSelectedLayer()].point.y2) + (e.clientY - lineY) / scale;
        }
        lineX = e.clientX;
        lineY = e.clientY;
        renderLayer(layers[indexOfSelectedLayer()]);


    }
});
document.getElementById('imageView').addEventListener('mouseup', function(e) {
    if (lineHold === true) {
        lineHold = false;
    }
});