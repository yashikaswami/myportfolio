const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('open');
    });