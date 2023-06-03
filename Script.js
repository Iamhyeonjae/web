document.addEventListener("DOMContentLoaded", function () {
    var navItems = document.querySelectorAll("#myNav li");
    var screens = document.querySelectorAll(".screen");

    function hideAllScreens() {
        screens.forEach(function (screen) {
            screen.style.display = "none";
        });
    }

    function showScreen(screenId) {
        var targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            hideAllScreens();
            targetScreen.style.display = "block";
        }
    }

    navItems.forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.preventDefault();

            var targetId = this.querySelector("a").id;
            showScreen(targetId + "Screen");
        });
    });

    hideAllScreens();
    showScreen("introScreen");
});
document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.getElementById('menuButton');
    var navBar = document.getElementById('myNav');

    menuButton.addEventListener('click', function () {
        navBar.classList.toggle('show');
        var expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
        menuButton.setAttribute('aria-expanded', !expanded);
    });
});