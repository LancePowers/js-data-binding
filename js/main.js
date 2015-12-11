var scope = {};
var classNamesArray = ['name'];

function getElements() {
    var outputArray = [];
    for (var i = 0; i < classNamesArray.length; i++) {
        outputArray.push(document.getElementsByClassName(classNamesArray[i]));

    }
    return outputArray;
}

function domBinding(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].onkeyup =
            function () {
                for (var j = 0; j < elements.length; j++) {
                    elements[j].value = this.value;
                }
            };
    }
}

function modelBinding(elements) {
    for (var i = 0; i < elements.length; i++) {
        console.log(elements);
        Object.defineProperty(scope, classNamesArray[i], {
            set: function (newValue) {
                for (var j = 0; j < elements.length; j++) {
                    elements[j].value = newValue;
                }
            },
            get: function () {
                return this.name
            }
        });
    };
}

//
var domElements = getElements();
domBinding(domElements[0]);
modelBinding(domElements[0]);