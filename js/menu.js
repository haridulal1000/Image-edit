const submenuList = document.querySelectorAll('.sub-folder-item');
submenuList.forEach(function(e) {
    e.style.display = 'none';
});
document.querySelector('#properties-menu').style.display = 'block';
const menus = document.querySelectorAll('.folder-item');
for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener('click', function(e) {
        if (layers[indexOfSelectedLayer()] === null || layers.length <= 0) {
            return;
        }
        let id = e.target.getAttribute('id');
        if (id === 'select' && layers[indexOfSelectedLayer()].type != 'image') {
            return;
        }
        if (id === 'filters' && layers[indexOfSelectedLayer()].type != 'image') {
            return;
        }
        if (id === 'move') {
            currentTool = 'move';
            document.getElementById('viewport').style.cursor = 'move';
        } else if (id == 'crop') {
            currentTool = 'crop';
            document.getElementById('viewport').style.cursor = 'move';
        } else if (id == 'draw') {
            currentTool = 'draw';
            document.getElementById('viewport').style.cursor = 'crosshair';
        } else {
            currentTool = null;
            document.getElementById('viewport').style.cursor = 'auto';
        }
        setTextMenu();
        setShapesMenu();
        setShapesProperties();
        setRotateProperties();
        setOpacity();
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