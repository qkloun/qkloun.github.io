//Theme Button
const ThemeToggle = document.getElementById('theme-toggle');
const ProfileImg = document.getElementById('profile-img');

ThemeToggle.addEventListener('click', ()=> {
    document.body.classList.toggle('light-mode');
    const Icon = ThemeToggle.querySelector('i');

    if(document.body.classList.contains('light-mode')){
        Icon.className = 'fas fa-moon';
        ProfileImg.src ='images/wonderd.png';
    } else {
        Icon.className = 'fas fa-sun';
        ProfileImg.src = 'images/Wonder.png';
    }
});
