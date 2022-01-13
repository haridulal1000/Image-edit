let rotateSlide = document.getElementById('rotate-slide');
let rotateValue = document.getElementById('rotate-value');
let originX = document.getElementById('origin-x');
let originY = document.getElementById('origin-y');

function setRotateProperties() {
    if (layers[indexOfSelectedLayer()] === null || layers.length <= 0) {
        return;
    }
    rotateSlide.value = layers[indexOfSelectedLayer()].rotate;
    rotateValue.innerHTML = layers[indexOfSelectedLayer()].rotate;
    originX.value = layers[indexOfSelectedLayer()].originX;
    originY.value = layers[indexOfSelectedLayer()].originY;
}
let rotateInputs = document.querySelectorAll('#rotate-menu input');
rotateInputs.forEach(element => {
    element.addEventListener('change', function(e) {
        if (this.getAttribute('id') === 'rotate-slide') {
            layers[indexOfSelectedLayer()].rotate = this.value;
            rotateValue.innerHTML = this.value;
        }
        if (this.getAttribute('id') === 'origin-x') {
            layers[indexOfSelectedLayer()].originX = this.value;
        }
        if (this.getAttribute('id') === 'origin-y') {
            layers[indexOfSelectedLayer()].originY = this.value;
        }
        renderLayer(layers[indexOfSelectedLayer()]);
    });


    element.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowUp') {
            if (this.getAttribute('id') === 'origin-x') {
                originX.value = parseInt(originX.value) + 1;
                layers[indexOfSelectedLayer()].originX = this.value;
            }
            if (this.getAttribute('id') === 'origin-y') {
                originY.value = parseInt(originY.value) + 1;
                layers[indexOfSelectedLayer()].originY = this.value;
            }
            renderLayer(layers[indexOfSelectedLayer()]);
        }
        if (e.key === 'ArrowDown') {
            if (this.getAttribute('id') === 'origin-x') {
                originX.value = parseInt(originX.value) - 1;
                layers[indexOfSelectedLayer()].originX = this.value;
            }
            if (this.getAttribute('id') === 'origin-y') {
                originY.value = parseInt(originY.value) - 1;
                layers[indexOfSelectedLayer()].originY = this.value;
            }
            renderLayer(layers[indexOfSelectedLayer()]);
        }


    });





});