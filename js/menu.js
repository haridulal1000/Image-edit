const submenuList = document.querySelectorAll('.sub-folder-item');
submenuList.forEach(function(e) {
    e.style.display = 'none';
});
document.querySelector('#properties-menu').style.display = 'block';
const menus = document.querySelectorAll('.folder-item');
for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener('click', function(e) {
        let id = e.target.getAttribute('id');
        // console.log(id);
        let menus = document.querySelectorAll('.folder-item');
        for (let j = 0; j < menus.length; j++) {
            menus[j].classList.remove('active');
        }
        if (!e.target.classList.contains('active')) {
            e.target.classList.add('active');
        }
        let element = document.querySelector(`#${id}-menu`);
        // console.log(element);
        // console.log(`#${id}-menu`);
        if (element) {
            let submenus = document.querySelectorAll(`.${element.classList[0]}`);
            // console.log(submenus);
            for (let j = 0; j < submenus.length; j++) {
                submenus[j].style.display = 'none';
            }
            element.style.display = 'block';
        } else {
            let submenus = document.querySelectorAll(`.sub-folder-item`);
            for (let j = 0; j < submenus.length; j++) {
                submenus[j].style.display = 'none';
            }
            document.querySelector('#properties-menu').style.display = 'block';
        }
    });
}

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
document.getElementById('properties-y').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            layers[i].y = this.value;
        }
    }
    renderLayersAll();
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
document.getElementById('properties-height').addEventListener('change', function(e) {
    for (let i = 0; i < layers.length; i++) {
        if (selectedLayer == layers[i].id) {
            layers[i].height = this.value;
            console.log(this.value);
        }
    }
    renderLayersAll();
});
//applying the propeties to each layer
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
            layers[i].image.style.filter = `brightness(${this.value}%)`;
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
            layers[i].image.style.filter = `contrast(${this.value}%)`;
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
            layers[i].image.style.filter = `saturate(${this.value}%)`;
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
            layers[i].image.style.filter = `hue-rotate(${this.value}deg)`;
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
            layers[i].image.style.filter = `blur(${this.value}px)`;
            renderLayersAll();
        }
    }
});

// setting filter values to layers