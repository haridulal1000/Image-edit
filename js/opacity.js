let opacity = document.getElementById('opacity-slider');
let opacityValue = document.getElementById('opacity-value');
opacity.addEventListener('change', function(e) {
    opacityValue.innerHTML = this.value;
    layers[indexOfSelectedLayer()].opacity = this.value;
    renderLayer(layers[indexOfSelectedLayer()]);
});

function setOpacity() {
    opacity.value = layers[indexOfSelectedLayer()].opacity;
    opacityValue.innerHTML = opacity.value;
}