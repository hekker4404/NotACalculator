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


document.addEventListener('DOMContentLoaded', function () {
    // Existing potion functionality code (if any)

    // Back button functionality
    var backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function() {
        window.location.href = '/index.html'; // Adjust the path as needed
    });
});

