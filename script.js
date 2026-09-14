// --- ПЕРЕКЛЮЧЕНИЕ ТЕМЫ ---
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn.querySelector('.theme-toggle__icon');

// Функция смены темы
function toggleTheme() {
    const isDark = document.documentElement.hasAttribute('data-theme');
    
    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeIcon.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.textContent = '☀️';
    }
}

// Проверяем сохраненную тему при загрузке
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
}

themeBtn.addEventListener('click', toggleTheme);


// --- БУРГЕР-МЕНЮ ---
const burgerBtn = document.getElementById('burger-btn');
const navList = document.getElementById('nav-list');

// Функция открытия / закрытия меню
function toggleMenu() {
    const isOpen = navList.classList.toggle('nav-menu__list_open');
    burgerBtn.classList.toggle('nav-menu__burger-btn_active');
    document.body.classList.toggle('body_menu-open', isOpen);
}

burgerBtn.addEventListener('click', toggleMenu);

// Закрываем меню при клике на любую ссылку (только если оно открыто)
document.querySelectorAll('.nav-menu__link').forEach(link => {
    link.addEventListener('click', () => {
        if (navList.classList.contains('nav-menu__list_open')) {
            toggleMenu();
        }
    });
});
