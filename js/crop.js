let cropHeight;
let cropWidth;
let cropX = 0;
let cropY = 0;
let cropRadius = 0;

function setCrop() {
    document.getElementById('imageView').style.width = cropWidth + 'px';
    document.getElementById('imageView').style.height = cropHeight + 'px';
    document.getElementById('imageView').style.borderRadius = cropRadius + 'px';
    document.getElementById('crop-width').value = cropWidth;
    document.getElementById('crop-height').value = cropHeight;
    document.getElementById('crop-x').value = cropX;
    document.getElementById('crop-y').value = cropY;
    document.getElementById('crop-radius').value = cropRadius;
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
        if (this.getAttribute('id') === 'crop-radius') {
            cropRadius = this.value;
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
        if (this.getAttribute('id') === 'crop-radius') {
            if (e.key === 'ArrowUp') {
                cropRadius = parseFloat(cropRadius) + 5;
            }
            if (e.key === 'ArrowDown') {
                cropRadius = parseFloat(cropRadius) - 5;
            }
        }
        setCrop();
    });
});




let moveCrop = false;
let cropXoffset;
let cropYoffset;
document.getElementById('viewport').addEventListener('mousedown', function(e) {
    if (currentTool === 'crop' && moveCrop === false) {
        moveCrop = true;
        cropXoffset = e.clientX;
        cropYoffset = e.clientY;
    }
});
document.getElementById('viewport').addEventListener('mouseup', function(e) {
    if (currentTool === 'crop' && moveCrop === true) {
        moveCrop = false;
    }
});
document.getElementById('viewport').addEventListener('mousemove', function(e) {
    if (currentTool === 'crop' && moveCrop === true) {
        e.preventDefault();

        let rect = document.getElementById('viewport').getBoundingClientRect();

        cropX -= (e.clientX - cropXoffset) / scale;
        cropY -= (e.clientY - cropYoffset) / scale;
        cropXoffset = e.clientX;
        cropYoffset = e.clientY;
        setCrop();



    }
});