let opacity = document.getElementById('opacity-slider');
let opacityValue = document.getElementById('opacity-value');
opacity.addEventListener('change', function(e) {
    opacityValue.innerHTML = this.value;
    layers[indexOfSelectedLayer()].opacity = this.value;
    renderLayer(layers[indexOfSelectedLayer()]);
});

function setOpacity() {
    if (layers[indexOfSelectedLayer()] === null || layers.length <= 0) {
        return;
    }
    opacity.value = layers[indexOfSelectedLayer()].opacity;
    opacityValue.innerHTML = opacity.value;
    blendModes.forEach(element => {
        if (layers[indexOfSelectedLayer()].blendMode === element.value) {
            element.checked = true;
        }
    });
}
let blendModes = document.getElementsByName('blend-mode');

for (let i = 0; i < blendModes.length; i++) {
    blendModes[i].addEventListener('change', function(e) {
        blendModes.forEach(element => {
            if (element.checked === true) {
                layers[indexOfSelectedLayer()].blendMode = element.value;
                console.log(element.value);
                renderLayer(layers[indexOfSelectedLayer()]);
            }
        });
    });
}