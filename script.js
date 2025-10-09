//Theme toggle
const ThemeToggle = document.getElementById('theme-toggle');
const PortfolioProjectImg = document.getElementById('portfolio-project-img');

console.log("ThemeToggle found:", ThemeToggle);
console.log("PortfolioProjectImg found:", PortfolioProjectImg);

ThemeToggle.addEventListener('click', () => {
    const Icon = ThemeToggle.querySelector('i');
    console.log("Icon found:", Icon);
    
    if(document.body.classList.contains('light-mode')){
        document.body.classList.remove('light-mode');
        Icon.className = 'fas fa-sun';
        // Switch to dark mode images
        if(PortfolioProjectImg) {
            PortfolioProjectImg.src = 'images/P5X.webp'; //dark mode image
        }
    } else {
        document.body.classList.add('light-mode');
        Icon.className = 'fas fa-moon';
        // Switch to light mode images
        if(PortfolioProjectImg) {
            PortfolioProjectImg.src = 'images/P5XD.webp'; //light mode image
        }
    }
});

//Mobile Menu button
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});
