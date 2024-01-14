document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.getElementsByClassName('toggleButton');
    
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            var extraContent = this.nextElementSibling;
            extraContent.style.display = extraContent.style.display === 'block' ? 'none' : 'block';
        });
    }
});
