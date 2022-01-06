let uploadFile = document.getElementById('upload-file');
uploadFile.addEventListener('change', function() {
    let image = new Image();
    let reader = new FileReader();
    reader.readAsDataURL(uploadFile.files[0]);
    reader.addEventListener('load', function() {
        image.src = this.result;
        document.getElementById('upload-file').remove();
        document.getElementById('upload-button').remove();
        image.onload = function() {
            addLayer(new ImageLayer({
                type: 'image',
                id: id,
                width: image.width,
                height: image.height,
                image: image,
                x: 0,
                y: 0,
                zIndex: id + 5,
                brightness: 100,
                contrast: 100,
                hue: 0,
                saturation: 100,
                blur: 0
            }));
            selectedLayer = 0;
            renderLayersAll();
        }

    });
});