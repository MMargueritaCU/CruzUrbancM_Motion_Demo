import {gsap} from "gsap";
import {timeOfAnimation} from "./animationSpeed.js"



export function purpleBoxAnimation(){

    var tl = gsap.timeline();

    tl.from(".purple-box",{duration: timeOfAnimation, rotation: 360, x: 500, scale: 0.5})
    tl.to(".purple-box",{duration: timeOfAnimation, rotation: 360, y: 250, alpha: 0.75});

    return tl;
}
