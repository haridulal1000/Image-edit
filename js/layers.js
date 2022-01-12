function ImageLayer(info) {
    this.type = info.type;
    this.id = info.id;
    this.originX = info.originX;
    this.originY = info.originY;
    this.rotate = info.rotate;
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
    this.originX = info.originX;
    this.originY = info.originY;
    this.rotate = info.rotate;
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
    this.originX = info.originX;
    this.originY = info.originY;
    this.rotate = info.rotate;
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
    this.originX = info.originX;
    this.originY = info.originY;
    this.rotate = info.rotate;
    this.x = info.x;
    this.y = info.y;
    this.zIndex = info.zIndex;
    this.visible = info.visible;
    this.stroke = info.stroke;
    this.strokeWeight = info.strokeWeight;
    this.fill = info.fill;
    this.radius = info.radius;
    this.visibleStroke = info.visibleStroke;
    this.visibleFill = info.visibleFill;
}

function Rect(info) {
    this.type = info.type;
    this.id = info.id;
    this.originX = info.originX;
    this.originY = info.originY;
    this.rotate = info.rotate;
    this.x = info.x;
    this.y = info.y;
    this.zIndex = info.zIndex;
    this.visible = info.visible;
    this.stroke = info.stroke;
    this.strokeWeight = info.strokeWeight;
    this.fill = info.fill;
    this.width = info.width;
    this.height = info.height;
    this.visibleStroke = info.visibleStroke;
    this.visibleFill = info.visibleFill;

}