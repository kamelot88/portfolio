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


//! scroll block About
const skillRise = document.querySelectorAll('.skill-rise'),
      skillValue = document.querySelector('.title-skill>span');
    //   document.querySelector(".title-skill > span")
      const array = document.querySelector(document.querySelector(".right-block-wrap > img"));
function animationSkill() {
    let value = 1;
    let id = setInterval(frame, 5);
    function frame() {
        if (value === 100) {
            clearInterval(id);
        } else {
            value++;
            skillRise.forEach((elem) => {
                elem.style.width = value + "%";
            });
        }
    }
}

addEventListener("scroll", (event) => {
    if (window.pageYOffset > 600) {
        animationSkill();
    }
});



// window.onscroll = function() {
//     if (window.pageYOffset > 600) {
        
//     }
// };


//! Функция анимиривания увеличения числа
// const skillProgres1 = document.querySelector(".right-block > div:nth-child(1) > div.title-skill > span");
// const skillProgres2 = document.querySelector(".right-block > div:nth-child(2) > div.title-skill > span");
// const skillProgres3 = document.querySelector(".right-block > div:nth-child(3) > div.title-skill > span");
// const skillProgres4 = document.querySelector(".right-block > div:nth-child(4) > div.title-skill > span");
// const skillProgres5 = document.querySelector(".right-block > div:nth-child(5) > div.title-skill > span");

// const time = 4000; // ms
// const step = 1;

// function myProgres(num) {
//     let n = 0;
//     let t = Math.round(time / (num / step));
//     let interval = setInterval(() => {
//         n = n + step;
//         if (n == num) {
//             clearInterval(interval);
//         }
//         skillProgres1.innerHTML = n;
//         skillProgres2.innerHTML = n;
//         skillProgres3.innerHTML = n;
//         skillProgres4.innerHTML = n;
//         skillProgres5.innerHTML = n;
//     },
//         t);
// }

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

//! Replacing background image of bottom-header on mobile
function monitorScreen() {
    if (document.documentElement.clientWidth <= 500) {
        document.querySelector(".bottom-header").style.backgroundImage = 'url(./assets/Font-header-mobile.JPG)';
        document.querySelector(".center-photo > img").src = "./assets/myPhoto-mobile.jpg";
    }
}
monitorScreen();
window.addEventListener('resize', function() {
    monitorScreen();
  });

//! Link of CV
const btnCV = document.querySelector("#btn-header");
btnCV.onclick = function() {
    document.location.href = "https://kamelot88.github.io/rsschool-cv/cv";
};




//! Dynamic date script
let dataYers = document.querySelector(".content-footer > span");
dataYers.textContent = new Date().getFullYear();
