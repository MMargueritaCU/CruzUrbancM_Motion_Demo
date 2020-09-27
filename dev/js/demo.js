import {gsap} from "gsap";


/* -----------------
    Demo Script
----------------- */

// gsap call / what do you want to animate / how long should it animate / what should change?

var timeOfAnimation = 3;

gsap.to(".purple-box",{duration: timeOfAnimation,borderRadius: "20"});
gsap.to(".red-box",{duration: timeOfAnimation, rotation:360, repeat:3, delay:timeOfAnimation });
