TweenMax.to(".overlay h1", 2,{
    opacity:0,
    y:-60,
    ease: Expo.easeInOut
})

TweenMax.to(".overlay", 2,{
    delay:1,
    top: "-100%",
    ease: Expo.easeInOut
})

TweenMax.from(".logo", 1,{
    delay:2.4,
    opacity:0,
    y:20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("nav ul li", 1,{
    delay:2.4,
    opacity:0,
    y:20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".social-media ul li", 1,{
    delay:2.4,
    opacity:0,
    y:20,
    ease: Expo.easeInOut
})

TweenMax.from(".side-strip", 2,{
    delay:2.4,
    opacity:0,
    y:40,
    ease: Expo.easeInOut
})


TweenMax.from(".box-title h1", 2,{
    delay:3.2,
    opacity:0,
    y:20,
    ease: Expo.easeInOut
})

TweenMax.from(".box-title p", 2,{
    delay:3.4,
    opacity:0,
    y:20,
    ease: Expo.easeInOut
})

TweenMax.from(".box-title button", 2,{
    delay:3.6,
    opacity:0,
    y:20,
    ease: Expo.easeInOut
})

TweenMax.from(".row", 5,{
    delay:5,
    opacity:0,
    x:40,
    ease: Expo.easeInOut,
})

TweenMax.from(".row h6", 6,{
    delay:5.5,
    opacity:0,
    y:40,
    ease: Expo.easeInOut,
})

TweenMax.from(".row p", 7,{
    delay:5.7,
    opacity:0,
    y:20,
    ease: Expo.easeInOut,
})