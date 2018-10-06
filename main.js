var allstrings = ["school", "extra", "sport"];

function addClass(idName, className) {
    for(var i = 0; i < allstrings.length; i++) {
        if(allstrings[i] != idName) {
            var other = document.getElementById(allstrings[i]);
            if(other.classList.contains(className)) {
                other.classList.remove(className);
            }
        }
    }
    var element = document.getElementById(idName);
    element.classList.add(className);
}

function removeClass(idName, className) {
    var element = document.getElementById(idName);
    element.classList.remove(className);
}
