let newText = document.getElementById('new-text');
let editText = document.getElementById('edit-text');
let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let textValue = document.getElementById('text-value');
let fontSize = document.getElementById('font-size');

let redValue = document.getElementById('red-value');
let greenValue = document.getElementById('green-value');
let blueValue = document.getElementById('blue-value');

function setTextMenu() {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            if (layers[i].type === 'text') {
                newText.style.display = 'block';
                editText.style.display = 'block';
            } else {
                newText.style.display = 'block';
                editText.style.display = 'none';
            }
        }
    }
}
document.getElementById('new-text-btn').addEventListener('click', function() {
    addLayer(new TextLayer({
        type: 'text',
        id: id,
        text: 'Your Text',
        fontSize: 40,
        color: { r: 255, g: 0, b: 0 },
        x: 20,
        y: 20,
        zIndex: (id + 5)
    }));
    renderLayersAll();
});

function setTextProperties() {
    for (let i = 0; i < layers.length; i++) {
        if (layers[i].id == selectedLayer) {
            red.value = layers[i].color.r;
            green.value = layers[i].color.g;
            blue.value = layers[i].color.b;
            redValue.innerHTML = layers[i].color.r;
            greenValue.innerHTML = layers[i].color.g;
            blueValue.innerHTML = layers[i].color.b;
            fontSize.value = layers[i].fontSize;
            textValue.value = layers[i].text;
        }
    }
}

red.addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (layers[i].id == selectedLayer) {
            layers[i].color.r = this.value;
            redValue.innerHTML = this.value;
            renderLayersAll();
            break;

        }
    }
});

green.addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (layers[i].id == selectedLayer) {
            layers[i].color.g = this.value;
            greenValue.innerHTML = this.value;
            renderLayersAll();
            break;

        }
    }
});

blue.addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (layers[i].id == selectedLayer) {
            layers[i].color.b = this.value;
            blueValue.innerHTML = this.value;
            renderLayersAll();
            break;

        }
    }
});

fontSize.addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (layers[i].id == selectedLayer) {
            layers[i].fontSize = this.value;
            renderLayersAll();
            break;

        }
    }
});

textValue.addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (layers[i].id == selectedLayer) {
            layers[i].text = this.value;
            renderLayersAll();
            break;

        }
    }
});