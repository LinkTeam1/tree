function toggleDarkMode() {
   const body = document.body;
   const moonIcon = document.getElementById('moon-icon');
   const logoImg = document.querySelector('#elementId img');
 
   body.classList.toggle('dark-mode');
   moonIcon.classList.toggle('fa-moon');
   moonIcon.classList.toggle('fa-sun');
 
   // Change the logo source based on dark mode state
   const isDarkMode = body.classList.contains('dark-mode');
   if (isDarkMode) {
     // Dark mode logo source
     logoImg.src = 'img/dark_logo.png'; // Replace 'dark_logo.png' with the path to your dark mode logo
   } else {
     // Light mode logo source
     logoImg.src = 'img/light_logo.png'; // Replace 'light_logo.png' with the path to your light mode logo
   }
 }

    let element = document.getElementById("elementId");
    let opacity = 0;
    let fadeIn = setInterval(() => {
       if (opacity >= 1) {
          clearInterval(fadeIn);
       }
       element.style.opacity = opacity;
       opacity += 0.01;
    }, 10);

    function updateTransformOrigin(event) {
        const h1 = document.querySelector('h1');
        const boundingBox = h1.getBoundingClientRect();
        const mouseX = event.clientX - boundingBox.left;
        const width = boundingBox.width;
        const percentage = (mouseX / width) * 100;
        h1.style.setProperty('--mouseX', `${percentage}%`);
    }

    document.addEventListener('DOMContentLoaded', function () {
      const currentYear = new Date().getFullYear();
      const footerText = document.getElementById('footer-text');
      footerText.textContent = `© ${currentYear} Link Team`;
  });
    