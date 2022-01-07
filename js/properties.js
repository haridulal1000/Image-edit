function setProperties() {
    console.log('set properties');
    let x = document.getElementById('properties-x');
    let y = document.getElementById('properties-y');
    let width = document.getElementById('properties-width');
    let height = document.getElementById('properties-height');
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            console.log(layers[i]);
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
            }
        }
        renderLayersAll();

    }
    if (e.key === 'ArrowDown') {
        for (let i = 0; i < layers.length; i++) {
            if (selectedLayer == layers[i].id) {
                layers[i].y = (parseInt(this.value) - 5);
            }
        }
        renderLayersAll();

    }
});
document.getElementById('properties-width').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            layers[i].width = this.value;
            console.log(this.value);
        }
    }
    renderLayersAll();
});
document.getElementById('properties-width').addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') {
        for (let i = 0; i < layers.length; i++) {
            if (selectedLayer == layers[i].id) {
                layers[i].width = (parseInt(this.value) + 5);
            }
        }
        renderLayersAll();

    }
    if (e.key === 'ArrowDown') {
        for (let i = 0; i < layers.length; i++) {
            if (selectedLayer == layers[i].id) {
                layers[i].width = (parseInt(this.value) - 5);
            }
        }
        renderLayersAll();

    }
});
document.getElementById('properties-height').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            layers[i].height = this.value;
            console.log(this.value);
        }
    }
    renderLayersAll();
});
document.getElementById('properties-height').addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') {
        for (let i = 0; i < layers.length; i++) {
            if (selectedLayer == layers[i].id) {
                layers[i].height = (parseInt(this.value) + 5);
            }
        }
        renderLayersAll();

    }
    if (e.key === 'ArrowDown') {
        for (let i = 0; i < layers.length; i++) {
            if (selectedLayer == layers[i].id) {
                layers[i].height = (parseInt(this.value) - 5);
            }
        }
        renderLayersAll();

    }
});
//applying the propeties to each layer