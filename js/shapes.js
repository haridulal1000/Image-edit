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
            x: 0,
            y: 0,
            zIndex: id + 5,
            radius: 50,
            fill: {
                r: 255,
                g: 0,
                b: 0
            },
            stroke: {
                r: 0,
                g: 255,
                b: 0
            },
            originX: 0,
            originY: 0,
            rotate: 0,
            visibleStroke: true,
            visibleFill: true,
            strokeWeight: 10,
            visible: true
        })
    );
    renderLayersAll();
    console.log('here');
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
            fill: {
                r: 255,
                g: 0,
                b: 0
            },
            stroke: {
                r: 0,
                g: 255,
                b: 0
            },
            originX: 0,
            originY: 0,
            rotate: 0,
            strokeWeight: 10,
            visibleStroke: true,
            visibleFill: true,
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
    document.getElementById('circle-radius').value = layer.radius;
    document.getElementById('circle-stroke').value = layer.strokeWeight;

    document.getElementById('circle-fill-red').value = layer.fill.r;
    document.getElementById('circle-fill-red-value').innerHTML = layer.fill.r;
    document.getElementById('circle-fill-blue').value = layer.fill.b;
    document.getElementById('circle-fill-blue-value').innerHTML = layer.fill.b;
    document.getElementById('circle-fill-green').value = layer.fill.g;
    document.getElementById('circle-fill-green-value').innerHTML = layer.fill.g;

    document.getElementById('circle-stroke-red').value = layer.stroke.r;
    document.getElementById('circle-stroke-red-value').innerHTML = layer.stroke.r;
    document.getElementById('circle-stroke-blue').value = layer.stroke.b;
    document.getElementById('circle-stroke-blue-value').innerHTML = layer.stroke.b;
    document.getElementById('circle-stroke-green').value = layer.stroke.g;
    document.getElementById('circle-stroke-green-value').innerHTML = layer.stroke.g;
}

function setRectProperties(layer) {
    document.getElementById('rect-width').value = layer.width;
    document.getElementById('rect-height').value = layer.height;
    document.getElementById('rect-stroke').value = layer.strokeWeight;

    document.getElementById('rect-fill-red').value = layer.fill.r;
    document.getElementById('rect-fill-red-value').innerHTML = layer.fill.r;
    document.getElementById('rect-fill-blue').value = layer.fill.b;
    document.getElementById('rect-fill-blue-value').innerHTML = layer.fill.b;
    document.getElementById('rect-fill-green').value = layer.fill.g;
    document.getElementById('rect-fill-green-value').innerHTML = layer.fill.g;

    document.getElementById('rect-stroke-red').value = layer.stroke.r;
    document.getElementById('rect-stroke-red-value').innerHTML = layer.stroke.r;
    document.getElementById('rect-stroke-blue').value = layer.stroke.b;
    document.getElementById('rect-stroke-blue-value').innerHTML = layer.stroke.b;
    document.getElementById('rect-stroke-green').value = layer.stroke.g;
    document.getElementById('rect-stroke-green-value').innerHTML = layer.stroke.g;
}




let inputs = document.querySelectorAll('#shapes-menu input');
inputs.forEach(element => {
    element.addEventListener('change', function(e) {
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
        if (e.target.getAttribute('id') === 'circle-stroke-red') {
            layers[parseInt(indexOfSelectedLayer())].stroke.r = parseInt(this.value);
            document.getElementById('circle-stroke-red-value').innerHTML = this.value;
        }
        if (e.target.getAttribute('id') === 'circle-stroke-green') {
            layers[parseInt(indexOfSelectedLayer())].stroke.g = parseInt(this.value);
            document.getElementById('circle-stroke-green-value').innerHTML = this.value;
        }
        if (e.target.getAttribute('id') === 'circle-stroke-blue') {
            layers[parseInt(indexOfSelectedLayer())].stroke.b = parseInt(this.value);
            document.getElementById('circle-stroke-blue-value').innerHTML = this.value;
        }
        if (e.target.getAttribute('id') === 'circle-fill-red') {
            layers[parseInt(indexOfSelectedLayer())].fill.r = parseInt(this.value);
            document.getElementById('circle-fill-red-value').innerHTML = this.value;
        }
        if (e.target.getAttribute('id') === 'circle-fill-green') {
            layers[parseInt(indexOfSelectedLayer())].fill.g = parseInt(this.value);
            document.getElementById('circle-fill-green-value').innerHTML = this.value;
        }
        if (e.target.getAttribute('id') === 'circle-fill-blue') {
            layers[parseInt(indexOfSelectedLayer())].fill.b = parseInt(this.value);
            document.getElementById('circle-fill-blue-value').innerHTML = this.value;
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
        if (e.target.getAttribute('id') === 'rect-stroke-red') {
            layers[parseInt(indexOfSelectedLayer())].stroke.r = parseInt(this.value);
            document.getElementById('rect-stroke-red-value').innerHTML = this.value;
        }
        if (e.target.getAttribute('id') === 'rect-stroke-green') {
            layers[parseInt(indexOfSelectedLayer())].stroke.g = parseInt(this.value);
            document.getElementById('rect-stroke-green-value').innerHTML = this.value;
        }
        if (e.target.getAttribute('id') === 'rect-stroke-blue') {
            layers[parseInt(indexOfSelectedLayer())].stroke.b = parseInt(this.value);
            document.getElementById('rect-stroke-blue-value').innerHTML = this.value;
        }
        if (e.target.getAttribute('id') === 'rect-fill-red') {
            layers[parseInt(indexOfSelectedLayer())].fill.r = parseInt(this.value);
            document.getElementById('rect-fill-red-value').innerHTML = this.value;
        }
        if (e.target.getAttribute('id') === 'rect-fill-green') {
            layers[parseInt(indexOfSelectedLayer())].fill.g = parseInt(this.value);
            document.getElementById('rect-fill-green-value').innerHTML = this.value;
        }
        if (e.target.getAttribute('id') === 'rect-fill-blue') {
            layers[parseInt(indexOfSelectedLayer())].fill.b = parseInt(this.value);
            document.getElementById('rect-fill-blue-value').innerHTML = this.value;
        }

        renderLayer(layers[parseInt(indexOfSelectedLayer())]);
    });
});
let textInputs = document.querySelectorAll('#shapes-menu input[type="text"]');
textInputs.forEach(element => {
    element.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowUp') {
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
            renderLayer(layers[indexOfSelectedLayer()]);
        }
        if (e.key === 'ArrowDown') {
            if (parseInt(this.value) <= 0) {
                return;
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
            renderLayer(layers[indexOfSelectedLayer()]);
        }

    })
});