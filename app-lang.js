//! Show languan-menu
const clickLang = document.querySelector(".lang-menu"),
      languanMenu = document.querySelectorAll('.flag ');

    clickLang.addEventListener('click', () => {
        languanMenu.forEach(item => {
            if (item.style.display === 'block') {
                item.style.display = 'none';
                item.classList.remove('fade');
            } else {
                item.style.display = 'block';
                item.classList.add('fade');
            }
        });
});

//! implementation of the language switch.
const languageUk = document.querySelectorAll('.uk'),
      languagePl = document.querySelectorAll('.pl'),
      languageEn = document.querySelectorAll('.en'),
      languageRu = document.querySelectorAll('.ru'),
      flagMenu = document.querySelector('.nav-lang-menu>ul'),
      allElemLang = document.querySelectorAll('.uk', '.pl', '.en', '.ru'),
      flagUa = document.querySelector('.flag-ua'),
      flagPl = document.querySelector('.flag-pl'),
      flagEn = document.querySelector('.flag-en'),
      flagRu = document.querySelector('.flag-ru');

function hidePlLang() {
    for (let elem of languagePl) {
        elem.classList.add('display-none');
    }
}
function hideEnLang() {
    for (let elem of languageEn) {
        elem.classList.add('display-none');
    }
}
function hideRuLang() {
    for (let elem of languageRu) {
        elem.classList.add('display-none');
    }
}
function hideUaLang() {
    for (let elem of languageUk) {
        elem.classList.add('display-none');
    }
}
function showPlLang() {
    for (let elem of languagePl) {
        elem.classList.remove('display-none');
    }
}
function showEnLang() {
    for (let elem of languageEn) {
        elem.classList.remove('display-none');
    }
}
function showRuLang() {
    for (let elem of languageRu) {
        elem.classList.remove('display-none');
    }
}
function showUaLang() {
    for (let elem of languageUk) {
        elem.classList.remove('display-none');
    }
}

hidePlLang();
hideEnLang();
hideRuLang();

flagMenu.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.matches('.flag-ua')) {
        showUaLang();
        hidePlLang();
        hideEnLang();
        hideRuLang();
    } else if (target.matches('.flag-en')) {
        showEnLang();
        hidePlLang();
        hideUaLang();
        hideRuLang();
    } else if (target.matches('.flag-pl')) {
        showPlLang();
        hideEnLang();
        hideUaLang();
        hideRuLang();    
    } else if (target.matches('.flag-ru')) {
        showRuLang();
        hideEnLang();
        hideUaLang();
        hidePlLang(); 
    }
});