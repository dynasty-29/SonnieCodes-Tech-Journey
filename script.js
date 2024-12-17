document.addEventListener('DOMContentLoaded', () => {
    // Adding a dynamic copyright year to the footer
    const footer = document.getElementById('footer');
    const today = new Date();
    const year = today.getFullYear();
    const dateEl = document.createElement('p');
    dateEl.textContent = `© ${year} - SonnieCodes - My Tech Journey Blog. All Rights Reserved.`;
    footer.appendChild(dateEl);

    const backToTopButton = document.getElementById('backToTop');

    // Check if backToTopButton exists
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
