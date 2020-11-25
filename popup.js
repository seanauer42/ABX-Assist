// document.addEventListener("DOMContentLoaded", function() {

//     const bg = chrome.extension.getBackgroundPage()
//     Object.keys(bg.bears).forEach(function (url) {
//         const div = document.createElement('div')
//         div.textContent = `${url} ${bg.bears[url]}`
//         document.body.appendChild(div)
//     });
// }, false)

// var formData = new FormData(document.querySelector('pn'));
// document.getElementById('manual').innerHTML = formData.pn;

var pn = document.getElementById("part")
var elements = document.getElementsByTagName('*');

document.getElementById("submit").onclick = function(pn) {
    for (var i =0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text.replace(pn, 'normies');

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}
