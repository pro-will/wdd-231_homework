document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('show');
        // Toggle the 'display: block' style defined in CSS for .mobile-nav
        if (mobileNav.style.display === 'block') {
            mobileNav.style.display = 'none';
            this.setAttribute('aria-expanded', 'false');
        } else {
            mobileNav.style.display = 'block';
            this.setAttribute('aria-expanded', 'true');
        }
    });

    // Optional: Close menu when a link is clicked (for single-page sites or smooth UX)
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.style.display = 'none';
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
});

document.getElementById("lastModified").innerHTML = document.lastModified;