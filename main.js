function addClass(idName, className) {
    var element = document.getElementById(idName);
    element.classList.add(className);
}

function removeClass(idName, className) {
    var element = document.getElementById(idName);
    element.classList.remove(className);
}
