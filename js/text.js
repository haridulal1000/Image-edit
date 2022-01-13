let newText = document.getElementById('new-text');
let editText = document.getElementById('edit-text');
let textColor = document.getElementById('text-color');
let textValue = document.getElementById('text-value');
let fontSize = document.getElementById('font-size');



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
        color: '#c20606',
        x: 20,
        y: 20,
        originX: 0,
        originY: 0,
        rotate: 0,
        zIndex: (id + 5),
        visible: true,
        opacity: 100
    }));
    selectedLayer = id - 1;
    renderLayersAll();
});

function setTextProperties() {
    for (let i = 0; i < layers.length; i++) {
        if (layers[i].id == selectedLayer && layers[i].type === 'text') {
            textColor.value = layers[i].color;
            fontSize.value = layers[i].fontSize;
            textValue.value = layers[i].text;
        }
    }
}

textColor.addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (layers[i].id == selectedLayer) {
            layers[i].color = this.value;
            renderLayersAll();
            break;

        }
    }
})

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