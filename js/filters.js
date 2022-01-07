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
        }
    }

}


// setting filter values to layers
document.getElementById('brightness').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            layers[i].brightness = this.value;
            document.getElementById('brightness-value').innerHTML = this.value;
            console.log(this.value);
            renderLayersAll();
        }
    }
});

document.getElementById('contrast').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            layers[i].contrast = this.value;
            document.getElementById('contrast-value').innerHTML = this.value;
            console.log(this.value);
            renderLayersAll();
        }
    }
});
document.getElementById('saturation').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            layers[i].saturation = this.value;
            document.getElementById('saturation-value').innerHTML = this.value;
            console.log(this.value);
            renderLayersAll();
        }
    }
});
document.getElementById('hue').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            layers[i].hue = this.value;
            document.getElementById('hue-value').innerHTML = this.value;
            console.log(this.value);
            renderLayersAll();
        }
    }
});
document.getElementById('blur').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            layers[i].blur = this.value;
            document.getElementById('blur-value').innerHTML = this.value;
            console.log(this.value);
            renderLayersAll();
        }
    }
});

// setting filter values to layers