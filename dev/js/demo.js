import {gsap} from "gsap";


/* -----------------
    Demo Script
----------------- */

// gsap call / what do you want to animate / how long should it animate / what should change?

var timeOfAnimation = 3;

gsap.from(".purple-box",{duration: timeOfAnimation, rotation: 360, x: 500, scale: 0.5});
gsap.to(".purple-box",{duration: timeOfAnimation, rotation: 360, y: 250, alpha: 0.75, delay: timeOfAnimation});

gsap.from(".orange-box",{duration: timeOfAnimation, rotation: 360, x: 500, scale: 0.5});
gsap.to(".orange-box",{duration: timeOfAnimation, rotation: 360, y: 100, alpha: 0.75, delay: timeOfAnimation});

gsap.from(".magenta-box",{duration: timeOfAnimation, rotation: 360, x: 500, scale: 0.5});
gsap.to(".magenta-box",{duration: timeOfAnimation, rotation: 360, y: 175, alpha: 0.75, delay: timeOfAnimation});

gsap.from(".yellow-box",{duration: timeOfAnimation, rotation: 360, x: 500, scale: 0.5});
gsap.to(".yellow-box",{duration: timeOfAnimation, rotation: 360, y: 25, alpha: 0.75, delay: timeOfAnimation});
