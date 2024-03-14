TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})

TweenMax.to(".overlay", 2, {
    delay: 1,
    top: "-100vh",
    ease: Expo.easeInOut
})

TweenMax.from(".logo", 1, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("nav ul li", 1, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".social-media ul li", 1, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".side-strip", 2, {
    delay: 2.4,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
})


TweenMax.from(".box-title h1", 2, {
    delay: 3.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".box-title p", 2, {
    delay: 3.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".box-title button", 2, {
    delay: 3.6,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".row", 5, {
    delay: 4,
    opacity: 0,
    x: 40,
    ease: Expo.easeInOut,
})

TweenMax.from(".row h5", 6, {
    delay: 4.2,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut,
})

TweenMax.from(".row p", 7, {
    delay: 4.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
})

//* MARQUEE 

let currentScroll = 0
let isScrollingDown = true
let arrows = document.querySelectorAll(".arrow")

let tween = gsap
    .to(".marquee-part", {
        xPercent: -100,
        repeat: -1,
        duration: 5,
        ease: "linear"
    })
    .totalProgress(0.5)

gsap.set(".marquee-inner", {
    xPercent: -50,
})

window.addEventListener("scroll", function () {
    if (window.scrollY > currentScroll) {
        isScrollingDown = true
    } else {
        isScrollingDown = false
    }

    gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1
    })

    arrows.forEach((arrow) => {
        if (isScrollingDown) {
            arrow.classList.remove('active')
        } else {
            arrow.classList.add('active')
        }
    })

    currentScroll = window.scrollY
})


//* Menu responsive
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
});

//* Footer reveal on scroll

gsap.from(".fixed-footer", {
    y: -50,
    scrollTrigger: {
        trigger: ".content-reveal",
        start: "bottom bottom",
        scrub: true,
    }
})


//* Gallery FancyBox

Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,

    closeButton: 'top',

    Images: {
        zoom: false,
    },

    Thumbs: {
        type: 'classic',
    },

    Carousel: {
        transition: false,
        friction: 0,
    },

    iframe: {
        css: {
            width: '90%', 
            height: '90%',
        },
    },

    on: {
        'Carousel.ready Carousel.change': (fancybox) => {
            fancybox.container.style.setProperty(
                '--bg-image',
                `url("${fancybox.getSlide().thumbSrc}")`
            );
        },
    },
});
