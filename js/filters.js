function setFilters() {
    let slides = document.querySelectorAll('.filter-item input');
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            document.getElementById('brightness').value = layers[i].brightness;
            document.getElementById('brightness-value').innerHTML = document.getElementById('brightness').value;
            document.getElementById('contrast').value = layers[i].contrast;
            document.getElementById('contrast-value').innerHTML = document.getElementById('contrast').value;
            document.getElementById('hue').value = layers[i].hue;
            document.getElementById('hue-value').innerHTML = document.getElementById('hue').value;
            document.getElementById('saturation').value = layers[i].saturation;
            document.getElementById('saturation-value').innerHTML = document.getElementById('saturation').value;
            document.getElementById('blur').value = layers[i].blur;
            document.getElementById('blur-value').innerHTML = document.getElementById('blur').value;
            document.getElementById('grayscale').value = layers[i].grayscale;
            document.getElementById('grayscale-value').innerHTML = document.getElementById('grayscale').value;
            document.getElementById('invert').value = layers[i].invert;
            document.getElementById('invert-value').innerHTML = document.getElementById('invert').value;
            document.getElementById('sepia').value = layers[i].sepia;
            document.getElementById('sepia-value').innerHTML = document.getElementById('sepia').value;
        }

    }

}


// setting filter values to layers
document.getElementById('brightness').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            layers[i].brightness = this.value;
            document.getElementById('brightness-value').innerHTML = this.value;
            renderLayer(layers[i]);
        }
    }
});

document.getElementById('contrast').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            layers[i].contrast = this.value;
            document.getElementById('contrast-value').innerHTML = this.value;
            console.log(this.value);
            renderLayer(layers[i]);
        }
    }
});
document.getElementById('saturation').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            layers[i].saturation = this.value;
            document.getElementById('saturation-value').innerHTML = this.value;
            console.log(this.value);
            renderLayer(layers[i]);
        }
    }
});
document.getElementById('hue').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            layers[i].hue = this.value;
            document.getElementById('hue-value').innerHTML = this.value;
            console.log(this.value);
            renderLayer(layers[i]);
        }
    }
});
document.getElementById('blur').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            layers[i].blur = this.value;
            document.getElementById('blur-value').innerHTML = this.value;
            console.log(this.value);
            renderLayer(layers[i]);
        }
    }
});
document.getElementById('grayscale').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            layers[i].grayscale = this.value;
            document.getElementById('grayscale-value').innerHTML = this.value;
            console.log(this.value);
            renderLayer(layers[i]);
        }
    }
});
document.getElementById('invert').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            layers[i].invert = this.value;
            document.getElementById('invert-value').innerHTML = this.value;
            console.log(this.value);
            renderLayer(layers[i]);
        }
    }
});
document.getElementById('sepia').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            layers[i].sepia = this.value;
            document.getElementById('sepia-value').innerHTML = this.value;
            console.log(this.value);
            renderLayer(layers[i]);
        }
    }
});

// setting filter values to layers