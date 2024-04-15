const words = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        words.textContent = "Stremears";
    }, 0);
    setTimeout(() => {
        words.textContent = "Vlogers";
    }, 4000);
    setTimeout(() => {
        words.textContent = "fitnees coaches";
    }, 8000);
    setTimeout(() => {
        words.textContent = "ecomerse sellers";
    }, 12000);
}
textLoad();
setInterval(textLoad, 12000);
// const swiper = new Swiper('.sample-slider', {
//         loop: true, //loop
//         pagination: { //pagination(dots)
//             el: '.swiper-pagination',
//         },
//         navigation: { //navigation(arrows)
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//         },
//     })
// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     sliderPerView: "auto",
//     coverflowEffect: {
//         rotate: 15,
//         stretch: 0,
//         depth: 300,
//         modifier: 1,
//         slideShadows: true,
//     },
// });
// const swiper = new Swiper('.sample-slider', {

//     effect: "coverflow",
//     coverflowEffect: {
//         // fine adjustments
//     }
// })



const swiper = new Swiper('.sample-slider', {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: { // added
        rotate: 0, // added (Rotate of the prev and next slides)
        depth: 200, // added (Depth of the prev and next slides)
        stretch: 30, // added (Space between the slides)
        modifier: 1, // added (Multiply the values of rotate, depth, and stretch)
        scale: 1, // added (Size ratio of the prev and next slides)
        slideShadows: false, // added (Presence of shadow on the surfaces of the prev and next slides)
    }, // added
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
let n_img = 5;
let corrent = 1;

function succ() {
    corrent++;
    if (corrent > n_img) {
        corrent = 1;
    }
    for (let i = n_img; i > 0; i--) {
        document.querySelector("#img_slider div:nth-child(" + i + ")").style.display = "none";

    }
    document.querySelector("#img_slider div:nth-child(" + corrent + ")").style.display = "block";
}

function prec() {
    corrent++;
    if (corrent > n_img) {
        corrent = 1;
    }
    for (let i = n_img; i > 0; i--) {
        document.querySelector("#img_slider div:nth-child(" + i + ")").style.display = "none";

    }
    document.querySelector("#img_slider div:nth-child(" + corrent + ")").style.display = "block";
}


const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));


// setInterval(succ, 5000)