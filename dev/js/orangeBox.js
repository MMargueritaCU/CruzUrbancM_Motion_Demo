import {gsap} from "gsap";
import {timeOfAnimation} from "./animationSpeed.js"



export function orangeBoxAnimation(){

    var tl = gsap.timeline();

    tl.from(".orange-box",{duration: timeOfAnimation, rotation: 360, x: 500, scale: 0.5})
    tl.to(".orange-box",{duration: timeOfAnimation, rotation: 360, y: 100, alpha: 0.75});

    return tl;
}