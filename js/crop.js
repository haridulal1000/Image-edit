let cropHeight;
let cropWidth;
let cropX = 0;
let cropY = 0;

function setCrop() {
    console.log('setCrop');
    document.getElementById('imageView').style.width = cropWidth + 'px';
    document.getElementById('imageView').style.height = cropHeight + 'px';
    document.getElementById('crop-width').value = cropWidth;
    document.getElementById('crop-height').value = cropHeight;
    document.getElementById('crop-x').value = cropX;
    document.getElementById('crop-y').value = cropY;
    renderLayersAll();
}
document.querySelectorAll('#crop-menu input').forEach(element => {
    element.addEventListener('change', function(e) {
        if (this.getAttribute('id') === 'crop-x') {
            cropX = this.value;
        }
        if (this.getAttribute('id') === 'crop-y') {
            cropY = this.value;
        }
        if (this.getAttribute('id') === 'crop-width') {
            cropWidth = this.value;
        }
        if (this.getAttribute('id') === 'crop-height') {
            cropHeight = this.value;
        }
        setCrop();
    });
});


document.querySelectorAll('#crop-menu input').forEach(element => {
    element.addEventListener('keydown', function(e) {
        if (this.getAttribute('id') === 'crop-x') {
            if (e.key === 'ArrowUp') {
                cropX = parseFloat(cropX) + 5;
            }
            if (e.key === 'ArrowDown') {
                cropX = parseFloat(cropX) - 5;
            }
        }
        if (this.getAttribute('id') === 'crop-y') {
            if (e.key === 'ArrowUp') {
                cropY = parseFloat(cropY) + 5;
            }
            if (e.key === 'ArrowDown') {
                cropY = parseFloat(cropY) - 5;
            }
        }
        if (this.getAttribute('id') === 'crop-width') {
            if (e.key === 'ArrowUp') {
                cropWidth = parseFloat(cropWidth) + 5;
            }
            if (e.key === 'ArrowDown') {
                cropWidth = parseFloat(cropWidth) - 5;
            }
        }
        if (this.getAttribute('id') === 'crop-height') {
            if (e.key === 'ArrowUp') {
                cropHeight = parseFloat(cropHeight) + 5;
            }
            if (e.key === 'ArrowDown') {
                cropHeight = parseFloat(cropHeight) - 5;
            }
        }
        setCrop();
    });
});