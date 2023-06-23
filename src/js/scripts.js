//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const year = new Date().getFullYear();
    const element = document.getElementById("copyright");
    const eStart = new Date("2023-04-27T14:00:00Z")

    element.innerHTML = `Copyright &copy; Sakura_x64 ${year}`;

    function duration() {
        const totalSeconds = Math.trunc((Date.now() - eStart) / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalSeconds / 3600);

        const seconds = totalSeconds % 60;
        const minutes = totalMinutes % 60;
        const hours = totalHours % 24;
        const days = Math.floor(totalHours / 24);

        return { d: days, h: hours, m: minutes, s: seconds };
    }

    const timer = document.getElementById("timer");

    setInterval(() => {
        timer.innerText = `${duration().d}d ${duration().h}h ${duration().m}m ${duration().s}s`;

        

    }, 1000);


});