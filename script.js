document.addEventListener('DOMContentLoaded', function () {
    // Search functionality
    var searchBar = document.getElementById('searchBar');

    searchBar.addEventListener('keyup', function(e) {
        var searchQuery = e.target.value.toLowerCase();
        var potions = document.getElementsByClassName('potion');

        Array.from(potions).forEach(function(potion) {
            var potionName = potion.getAttribute('data-name').toLowerCase();
            if (potionName.includes(searchQuery)) {
                potion.style.display = '';
            } else {
                potion.style.display = 'none';
            }
        });
    });

    // Toggle functionality for each potion
    var toggleButtons = document.getElementsByClassName('toggleButton');

    Array.from(toggleButtons).forEach(function(button) {
        button.addEventListener('click', function() {
            var extraContent = this.nextElementSibling;
            extraContent.style.display = extraContent.style.display === 'block' ? 'none' : 'block';
        });
    });
});



function inputValue(val) {
    document.getElementById('display').value += val;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

