let page = document.getElementById('buttonDiv');
const kButtonColors = ['aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
        let button = document.createElement('button');
        button.style.backgroundColor = item;
        button.addEventListener('click', function() {
            chrome.storage.sync.set({color: item}, function() {
                console.log('color is ' + item);
            });
            
        });
        page.appendChild(button);
    }
};
// constructOptions(kButtonColors);
function constructButton() {
    let button = document.createElement('button');
    button.text = 'Search';
    button.addEventListener('click', function () {
        alert(pn.textContent)
    });
    page.appendChild(button);
}
constructButton();
