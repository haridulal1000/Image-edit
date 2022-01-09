let propCheck = document.getElementById('proportion');
propCheck.checked = true;

function setProperties() {
    let x = document.getElementById('properties-x');
    let y = document.getElementById('properties-y');
    let width = document.getElementById('properties-width');
    let height = document.getElementById('properties-height');
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            x.value = layers[i].x;
            y.value = layers[i].y;
            width.value = layers[i].width;
            height.value = layers[i].height;
        }
    }
}
//applying the propeties to each layer
document.getElementById('properties-x').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            layers[i].x = this.value;
        }
    }
    renderLayersAll();
});

document.getElementById('properties-x').addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') {
        for (let i = 0; i < layers.length; i++) {
            if (selectedLayer == layers[i].id) {
                layers[i].x = (parseInt(this.value) + 5);
            }
        }
        renderLayersAll();

    }
    if (e.key === 'ArrowDown') {
        for (let i = 0; i < layers.length; i++) {
            if (selectedLayer == layers[i].id) {
                layers[i].x = (parseInt(this.value) - 5);
            }
        }
        renderLayersAll();

    }
});



document.getElementById('properties-y').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            layers[i].y = this.value;
        }
    }
    renderLayersAll();
});
document.getElementById('properties-y').addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') {
        for (let i = 0; i < layers.length; i++) {
            if (selectedLayer == layers[i].id) {
                layers[i].y = (parseInt(this.value) + 5);
                renderLayer(layers[i]);
            }
        }


    }
    if (e.key === 'ArrowDown') {
        for (let i = 0; i < layers.length; i++) {
            if (selectedLayer == layers[i].id) {
                layers[i].y = (parseInt(this.value) - 5);
                renderLayer(layers[i]);
            }
        }


    }
});
document.getElementById('properties-width').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            if (propCheck.checked === true) {
                let ratio = layers[i].width / layers[i].height;
                layers[i].width = this.value;
                layers[i].height = this.value / ratio;

            } else {
                layers[i].width = this.value;
            }

            renderLayer(layers[i]);
        }
    }
});
document.getElementById('properties-width').addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') {
        for (let i = 0; i < layers.length; i++) {
            if (selectedLayer == layers[i].id) {
                if (propCheck.checked === true) {
                    let ratio = layers[i].width / layers[i].height;
                    layers[i].width = parseInt(this.value) + 5;
                    layers[i].height = parseInt(layers[i].width) / ratio;

                } else {
                    layers[i].width = parseInt(this.value) + 5;
                }
                renderLayer(layers[i]);
            }
        }

    }
    if (e.key === 'ArrowDown') {
        for (let i = 0; i < layers.length; i++) {
            if (selectedLayer == layers[i].id) {
                if (propCheck.checked === true) {
                    let ratio = layers[i].width / layers[i].height;
                    layers[i].width = parseInt(this.value) - 5;
                    layers[i].height = parseInt(layers[i].width) / ratio;

                } else {
                    layers[i].width = parseInt(this.value) - 5;
                }
                renderLayer(layers[i]);
            }
        }

    }
});
document.getElementById('properties-height').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            if (propCheck.checked === true) {
                let ratio = layers[i].width / layers[i].height;
                layers[i].height = this.value;
                layers[i].width = this.value * ratio;

            } else {
                layers[i].height = this.value;
            }
            renderLayer(layers[i]);
        }
    }
});
document.getElementById('properties-height').addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') {
        for (let i = 0; i < layers.length; i++) {
            if (selectedLayer == layers[i].id) {
                if (propCheck.checked === true) {
                    let ratio = layers[i].width / layers[i].height;
                    layers[i].height = parseInt(this.value) + 5;
                    layers[i].width = parseInt(layers[i].height) * ratio;

                } else {
                    layers[i].height = parseInt(this.value) + 5;
                }
                renderLayer(layers[i]);
            }
        }


    }
    if (e.key === 'ArrowDown') {
        for (let i = 0; i < layers.length; i++) {
            if (selectedLayer == layers[i].id) {

                if (propCheck.checked === true) {
                    let ratio = layers[i].width / layers[i].height;
                    layers[i].height = parseInt(this.value) - 5;
                    layers[i].width = parseInt(layers[i].height) * ratio;

                } else {
                    layers[i].height = parseInt(this.value) - 5;
                }
                renderLayer(layers[i]);

            }

        }
    }
});
//applying the propeties to each layer