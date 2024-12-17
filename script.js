// Adding a dynamic copyright year to the footer
const footer = document.getElementById('footer');
const today = new Date();
const year = today.getFullYear();
const dateEl = document.createElement('p');
dateEl.textContent = `© ${year} - SonnieCodes - My Tech Journey Blog. All Rights Reserved.`;
footer.appendChild(dateEl);
