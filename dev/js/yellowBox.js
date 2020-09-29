import {gsap} from "gsap";
import {timeOfAnimation} from "./animationSpeed.js"



export function yellowBoxAnimation(){

    var tl = gsap.timeline();

    tl.from(".yellow-box",{duration: timeOfAnimation, rotation: -360, x: 500, scale: 0.5})
    tl.to(".yellow-box",{duration: timeOfAnimation, rotation: -360, y: -225, alpha: 0.75});

    return tl;
}