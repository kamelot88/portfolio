// ! Реализация слайдера в блоке testimonials

// const colectionSlid = document.querySelectorAll("#testimonials > div > div > div"); // получаю коллекцию элементов
// const slide = document.querySelector(".elem-slid-tesmo");
// const sliderLine = document.querySelector('.slider-line');

// let count = 0;

// let width;

// function init() {
//     // console.log('risize');
//     width = document.querySelector('.wrap-testimonials').offsetWidth;
//     sliderLine.style.width = width * colectionSlid.length + 'px';
//     colectionSlid.forEach(item => {
//         item.style.width = width + "px";
//         item.style.height = "auto";
//     });
//     rollSlider();
// }
// window.addEventListener('resize', init);
// init();

// document.querySelector('.left').addEventListener('click', function () {
//     count--;
//     if (count < 0) {
//         count = colectionSlid.length - 1;
//     }
//     rollSlider();
// });


// document.querySelector('.right').addEventListener('click', function () {
//     count++;
//     if (count >= colectionSlid.length) {
//         count = 0;
//     }
//     rollSlider();
// });

// function rollSlider() {
//     sliderLine.style.transform = 'translate(-' + count * width + 'px)';
// }


//! Скрол блока About
var lol;
window.onscroll = function() {
    if (window.pageYOffset > 600) {
        for (let elem of document.getElementsByClassName('skill-rise')) {
            elem.style.width = 100 + '%';
            skillProgres1.textContent = elem.style.width;
        }
        // myProgres(100);
    } else {
        for (let elem of document.getElementsByClassName('skill-rise')) {
            elem.style.width = 1 + '%';
        }
    }
};

//! Функция анимиривания увеличения числа
const skillProgres1 = document.querySelector(".right-block > div:nth-child(1) > div.title-skill > span");
const skillProgres2 = document.querySelector(".right-block > div:nth-child(2) > div.title-skill > span");
const skillProgres3 = document.querySelector(".right-block > div:nth-child(3) > div.title-skill > span");
const skillProgres4 = document.querySelector(".right-block > div:nth-child(4) > div.title-skill > span");
const skillProgres5 = document.querySelector(".right-block > div:nth-child(5) > div.title-skill > span");

const time = 4000; // ms
const step = 1;

function myProgres(num) {
    let n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
        n = n + step;
        if (n == num) {
            clearInterval(interval);
        }
        skillProgres1.innerHTML = n;
        skillProgres2.innerHTML = n;
        skillProgres3.innerHTML = n;
        skillProgres4.innerHTML = n;
        skillProgres5.innerHTML = n;
    },
        t);
}
// function myProgresTop() {
//     skillProgres1.textContent = points[j]; //This prints the values that you stored in the array
//         }

//! Burger-menu
const mainMenu = document.querySelector('.main-menu'),
      btnBurger = document.querySelector('.burger'),
      blackFill = document.querySelector('.black-fill'),
      btnMainMenu = document.querySelectorAll('.btn-hover'),
      burgerLine = document.querySelectorAll('.burger-line');

function hideBurgerMenu() {
    mainMenu.classList.add('burger-menu-of');
    mainMenu.classList.remove('burger-menu-on');
}
hideBurgerMenu();

function hideBurgerLine() {
    burgerLine.forEach((line) => {
        line.classList.remove('opacity-line');
        line.classList.remove('line-rotate-agin');
        line.classList.remove('line-rotate-per');
    });
}

btnBurger.addEventListener('click', (event) => {
    if (mainMenu.classList.contains('burger-menu-of')) {
        mainMenu.classList.add('burger-menu-on');
        mainMenu.classList.remove('burger-menu-of');
        blackFill.classList.add('add-blockFill', 'showBlock');
        blackFill.classList.remove('remove-blockFill');
        burgerLine.forEach((line, i) => {
            if (i == 0 || i == 3) {
                line.classList.add('opacity-line');
            } else if (i == 1) {
                line.classList.add('line-rotate-agin');
            } else if (i == 2) {
                line.classList.add('line-rotate-per');
            }
        });
    } else {
        mainMenu.classList.add('burger-menu-of');
        mainMenu.classList.remove('burger-menu-on');
        blackFill.classList.remove('add-blockFill', 'showBlock');
        blackFill.classList.add('remove-blockFill');
        hideBurgerLine();
    }
});
blackFill.addEventListener('click', (event) => {
        mainMenu.classList.add('burger-menu-of');
        mainMenu.classList.remove('burger-menu-on');
        blackFill.classList.remove('add-blockFill', 'showBlock');
        blackFill.classList.add('remove-blockFill');
        hideBurgerLine();
});

mainMenu.addEventListener('click', (event) => {
    const target = event.target;
    btnMainMenu.forEach((item) => {
        if (item === target) {
            mainMenu.classList.add('burger-menu-of');
            mainMenu.classList.remove('burger-menu-on');
            blackFill.classList.remove('add-blockFill', 'showBlock');
            blackFill.classList.add('remove-blockFill');
            hideBurgerLine();
        }
    });
});


//! Сортировка портфолио
const clickAll = document.querySelector('.navigation-filter > nav > ul > li:nth-child(1)');
const clickLanding = document.querySelector('.navigation-filter > nav > ul > li:nth-child(2)');
const clickMultiPage = document.querySelector('.navigation-filter > nav > ul > li:nth-child(3)');
const clickWebApl = document.querySelector('.navigation-filter > nav > ul > li:nth-child(4)');
const clickAnimation = document.querySelector('.navigation-filter > nav > ul > li:nth-child(5)');
const collektionPortfolio = document.querySelectorAll('.collection-projeckt > a');
const collectionFilterClick = document.querySelectorAll('.navigation-filter > nav > ul > li');


clickAll.onclick = function() {
    for (let elem of collektionPortfolio) {
        elem.classList.remove('display-none');
        elem.classList.add('display-flex');
    }
    for (let elem of collectionFilterClick) {
        elem.classList.remove('activ-filter');
    }
    clickAll.classList.add('activ-filter');
};

clickLanding.onclick = function() {
    for (let elem of collektionPortfolio) {
        elem.classList.add('display-none');
        if (elem.classList.contains('landing')) {
            elem.classList.remove('display-none');
        }
    }
    for (let elem of collectionFilterClick) {
        elem.classList.remove('activ-filter');
    }
    clickLanding.classList.add('activ-filter');
};

clickMultiPage.onclick = function() {
    for (let elem of collektionPortfolio) {
        elem.classList.add('display-none');
        if (elem.classList.contains('multipage')) {
            elem.classList.remove('display-none');
        }
    }
    for (let elem of collectionFilterClick) {
        elem.classList.remove('activ-filter');
    }
    clickMultiPage.classList.add('activ-filter');
};

clickWebApl.onclick = function() {
    for (let elem of collektionPortfolio) {
        elem.classList.add('display-none');
        if (elem.classList.contains('web-aplikation')) {
            elem.classList.remove('display-none');
        }
    }
    for (let elem of collectionFilterClick) {
        elem.classList.remove('activ-filter');
    }
    clickWebApl.classList.add('activ-filter');
};

clickAnimation.onclick = function() {
    for (let elem of collektionPortfolio) {
        elem.classList.add('display-none');
        if (elem.classList.contains('animation')) {
            elem.classList.remove('display-none');
        }
    }
    for (let elem of collectionFilterClick) {
        elem.classList.remove('activ-filter');
    }
    clickAnimation.classList.add('activ-filter');
};

//! Замена фонового изображения bottom-header для мобильной версии

if (document.documentElement.clientWidth <= 500) {
    document.querySelector(".bottom-header").style.backgroundImage = 'url(./assets/Font-header-mobile.JPG)';
    document.querySelector(".center-photo > img").src = "./assets/myPhoto-mobile.jpg";
}


const btnCV = document.querySelector("#btn-header");

btnCV.onclick = function() {
    document.location.href = "https://kamelot88.github.io/rsschool-cv/cv";
};

//! Languan-menu

var clickLang = document.querySelector(".lang-menu");
var languanMenu = document.querySelector('.nav-lang-menu');
var languanMenu = document.querySelector('.nav-lang-menu');

// clickLang.onclick = function() {
//         languanMenu.classList.toggle('display-opaciti');
// }

// var collectionLang = document.querySelectorAll('.nav-lang-menu > ul > li');

// for (let elem of collectionLang) {
//     elem.onclick = function() {
//         languanMenu.classList.toggle('display-opaciti');
//     }
// }

function showBlock() {
    languanMenu.classList.toggle('b-show');
  }
  clickLang.addEventListener('click', showBlock);

  var collectionLang = document.querySelectorAll('.nav-lang-menu > ul > li');
  
for (let elem of collectionLang) {
    elem.onclick = function() {
        languanMenu.classList.toggle('b-show');
    };
}
// 

// implementation of the language switch.

var languageUk = document.getElementsByClassName('uk');
var languagePl = document.getElementsByClassName('pl');
var languageEn = document.getElementsByClassName('en');
var languageRu = document.getElementsByClassName('ru');

var flagUa = document.querySelector('.flag-ua');
var flagPl = document.querySelector('.flag-pl');
var flagEn = document.querySelector('.flag-en');
var flagRu = document.querySelector('.flag-ru');

for (let elem of languagePl) {
    elem.classList.add('display-none');
}
for (let elem of languageEn) {
    elem.classList.add('display-none');
}
for (let elem of languageRu) {
    elem.classList.add('display-none');
}

flagUa.onclick = function() {
    for (let elem of languageUk) {
        elem.classList.remove('display-none');
    }
    for (let elem of languagePl) {
        elem.classList.add('display-none');
    }
    for (let elem of languageEn) {
        elem.classList.add('display-none');
    }
    for (let elem of languageRu) {
        elem.classList.add('display-none');
    }
};
flagPl.onclick = function() {
    for (let elem of languageUk) {
        elem.classList.add('display-none');
    }
    for (let elem of languagePl) {
        elem.classList.remove('display-none');
    }
    for (let elem of languageEn) {
        elem.classList.add('display-none');
    }
    for (let elem of languageRu) {
        elem.classList.add('display-none');
    }
};
flagEn.onclick = function() {
    for (let elem of languageUk) {
        elem.classList.add('display-none');
    }
    for (let elem of languagePl) {
        elem.classList.add('display-none');
    }
    for (let elem of languageEn) {
        elem.classList.remove('display-none');
    }
    for (let elem of languageRu) {
        elem.classList.add('display-none');
    }
};
flagRu.onclick = function() {
    for (let elem of languageUk) {
        elem.classList.add('display-none');
    }
    for (let elem of languagePl) {
        elem.classList.add('display-none');
    }
    for (let elem of languageEn) {
        elem.classList.add('display-none');
    }
    for (let elem of languageRu) {
        elem.classList.remove('display-none');
    }
};


let dataYers = document.querySelector(".content-footer > span");
dataYers.textContent = new Date().getFullYear();
