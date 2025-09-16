//Theme toggle
const ThemeToggle = document.getElementById('theme-toggle');
const ProfileImg = document.getElementById('profile-img');

console.log("ThemeToggle found:", ThemeToggle);
console.log("ProfileImg found:", ProfileImg);

ThemeToggle.addEventListener('click', () => {
    const Icon = ThemeToggle.querySelector('i');
    console.log("Icon found:", Icon);
    
    if(document.body.classList.contains('light-mode')){
        document.body.classList.remove('light-mode');
        Icon.className = 'fas fa-sun';
        ProfileImg.src = 'images/wonder.png';
    } else {
        document.body.classList.add('light-mode');
        Icon.className = 'fas fa-moon';
        ProfileImg.src = 'images/wonderd.png';
    }
});

//Mobile Menu button
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});
