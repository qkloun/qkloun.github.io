//Theme toggle
const ThemeToggle = document.getElementById('theme-toggle');
const PortfolioProjectImg = document.getElementById('portfolio-project-img');

console.log("ThemeToggle found:", ThemeToggle);
console.log("PortfolioProjectImg found:", PortfolioProjectImg);

ThemeToggle.addEventListener('click', () => {
    const Icon = ThemeToggle.querySelector('i');
    console.log("Icon found:", Icon);
    
    if(document.body.classList.contains('dark-mode')){
        document.body.classList.remove('dark-mode');
        Icon.className = 'fas fa-sun';
        // Switch to dark mode images
        if(PortfolioProjectImg) {
            PortfolioProjectImg.src = 'images/P5XD.webp'; //light mode image
        }
    } else {
        document.body.classList.add('dark-mode');
        Icon.className = 'fas fa-moon';
        // Switch to dark mode images
        if(PortfolioProjectImg) {
            PortfolioProjectImg.src = 'images/P5X.webp'; //light mode image
        }
    }
});

//Mobile Menu button
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});
