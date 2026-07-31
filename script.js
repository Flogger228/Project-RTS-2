/*
======================================================
            ВСЕ ИЗОБРАЖЕНИЯ САЙТА
======================================================

Меняй ТОЛЬКО эти ссылки.

Можно использовать:

1) Локальные файлы

images/logo.png
images/main.jpg
images/python1.png

2) Или ссылки из интернета

https://site.com/image.jpg

======================================================
*/

// ======================
// ЛОГО
// ======================

const logo = "https://i.postimg.cc/QNy6r92M/Chat-GPT-Image-30-iun-2026-g-20-44-08.png";

// ======================
// ГЛАВНАЯ КАРТИНКА
// ======================

const heroImage = "https://i.postimg.cc/LhF9c0H3/6315eda12a2d41662381473.png";

// ======================
// ИКОНКИ ПРЕИМУЩЕСТВ
// ======================

const icons = [
    "https://i.postimg.cc/TwpFrLZS/Chat-GPT-Image-28-iul-2026-g-17-48-09.png",
    "https://i.postimg.cc/4y8Yj08R/Chat-GPT-Image-28-iul-2026-g-17-48-45-removebg-preview.png",
    "https://i.postimg.cc/fRYw9Fxc/Chat-GPT-Image-28-iul-2026-g-17-49-15-removebg-preview.png",
    "https://i.postimg.cc/brvJ0Tqg/Chat-GPT-Image-28-iul-2026-g-17-49-43-removebg-preview.png"
];

// ======================
// КАРТОЧКИ
// ======================

const cards = [
    "https://i.postimg.cc/Dwm7C0kF/Chat-GPT-Image-28-iul-2026-g-18-08-47.png",
    "https://i.postimg.cc/N0JpcXzv/Chat-GPT-Image-31-iul-2026-g-18-37-45.png",
    "https://i.postimg.cc/C10LwZBH/Chat-GPT-Image-31-iul-2026-g-18-40-55.png",
    "https://i.postimg.cc/3NSvyj2T/Chat-GPT-Image-31-iul-2026-g-18-47-15.png",
    "https://i.postimg.cc/mrBgszFS/Chat-GPT-Image-31-iul-2026-g-18-49-45.png",
    "https://i.postimg.cc/KjPmwm8F/Chat-GPT-Image-31-iul-2026-g-18-51-22.png"
];

// ======================
// ПРИМЕРЫ КОДА
// ======================

const codeImages = [
    "https://i.postimg.cc/G2R7zRV1/Chat-GPT-Image-31-iul-2026-g-18-53-07.png",
    "https://i.postimg.cc/TYy8HrCD/Gemini-Generated-Image-hmhosdhmhosdhmho.png",
    "https://i.postimg.cc/T1FsX4Cc/Gemini-Generated-Image-3s5xuh3s5xuh3s5x.png"
];


// ======================
// О САЙТЕ
// ======================

const aboutImage = "images/about.jpg";

// ======================
// БАННЕР
// ======================

const banner = "https://i.postimg.cc/8zmVhTyQ/Gemini-Generated-Image-3fp9p03fp9p03fp9.png";

// ======================
// ЛОГО В ФУТЕРЕ
// ======================

const footerLogo = "https://i.postimg.cc/QNy6r92M/Chat-GPT-Image-30-iun-2026-g-20-44-08.png";



/*======================================================
        НИЖЕ НИЧЕГО НЕ МЕНЯЙ
======================================================*/

// Лого
document.getElementById("logo").src = logo;
document.getElementById("footerLogo").src = footerLogo;

// Главная картинка
document.getElementById("heroImage").src = heroImage;

// Иконки преимуществ
document.getElementById("icon1").src = icons[0];
document.getElementById("icon2").src = icons[1];
document.getElementById("icon3").src = icons[2];
document.getElementById("icon4").src = icons[3];

// Карточки
document.getElementById("card1").src = cards[0];
document.getElementById("card2").src = cards[1];
document.getElementById("card3").src = cards[2];
document.getElementById("card4").src = cards[3];
document.getElementById("card5").src = cards[4];
document.getElementById("card6").src = cards[5];

// Код
document.getElementById("codeImage1").src = codeImages[0];
document.getElementById("codeImage2").src = codeImages[1];
document.getElementById("codeImage3").src = codeImages[2];

// Галерея
document.getElementById("gallery1").src = gallery[0];
document.getElementById("gallery2").src = gallery[1];
document.getElementById("gallery3").src = gallery[2];
document.getElementById("gallery4").src = gallery[3];
document.getElementById("gallery5").src = gallery[4];
document.getElementById("gallery6").src = gallery[5];
document.getElementById("gallery7").src = gallery[6];
document.getElementById("gallery8").src = gallery[7];

// О сайте
document.getElementById("aboutImage").src = aboutImage;

// Баннер
document.getElementById("bannerImage").src = banner;

console.log("Python Start успешно загружен!");