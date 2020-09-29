import {gsap} from "gsap";
import {timeOfAnimation} from "./animationSpeed.js"



export function magentaBoxAnimation(){

    var tl = gsap.timeline();

    tl.from(".magenta-box",{duration: timeOfAnimation, rotation: -360, x: 500, scale: 0.5})
    tl.to(".magenta-box",{duration: timeOfAnimation, rotation: -360, y: -225, alpha: 0.75});

    return tl;
}