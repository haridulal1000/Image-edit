function ImageLayer(info) {
    this.type = info.type;
    this.id = info.id;
    this.image = info.image;
    this.x = info.x;
    this.y = info.y;
    this.width = info.width;
    this.height = info.height;
    this.brightness = info.brightness;
    this.contrast = info.contrast;
    this.hue = info.hue;
    this.saturation = info.saturation;
    this.blue = info.blur;
    this.zIndex = info.zIndex;
    this.visible = info.visible;

}

function TextLayer(info) {
    this.type = info.type;
    this.id = info.id;
    this.text = info.text;
    this.fontSize = info.fontSize;
    this.color = info.color;
    this.zIndex = info.zIndex;
    this.x = info.x;
    this.y = info.y;
    this.visible = info.visible;
}

function Line(info) {
    this.type = info.type;
    this.id = info.id;
    this.x = info.x;
    this.y = info.y;
    this.visible = info.visible;
    this.stroke = info.stroke;
    this.strokeWeight = info.strokeWeight;
    this.width = info.width;
    this.height = info.height;
    this.point = info.point;
}

function Circle(info) {
    this.type = info.type;
    this.id = info.id;
    this.x = info.x;
    this.y = info.y;
    this.zIndex = info.zIndex;
    this.visible = info.visible;
    this.stroke = info.stroke;
    this.strokeWeight = info.strokeWeight;
    this.fill = info.fill;
    this.width = info.width;
    this.height = info.height;
    this.radius = info.radius;
    this.center = info.center;
}

function Rect(info) {
    this.type = info.type;
    this.id = info.id;
    this.x = info.x;
    this.y = info.y;
    this.visible = info.visible;
    this.stroke = info.stroke;
    this.strokeWeight = info.strokeWeight;
    this.fill = info.fill;
    this.width = info.width;
    this.height = info.height;
    this.points = info.point;

}