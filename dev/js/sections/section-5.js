import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section5TL = gsap.timeline();

section5TL.from("#section-5 ul", {duration: 1, alpha: 0})
        .from("#gallery-1", {duration: 1, x: -300, alpha: 0})
        .from("#gallery-2", {duration: 1, x: 300, alpha: 0})
        .from("#gallery-3", {duration: 1, y: 300, alpha: 0})

export function section5Animation(){
    ScrollTrigger.create({
        // markers: true,
        animation: section5TL,
        toggleActions: "restart none reverse none",
        trigger: "#section-5",
        scrub: 1,
        start: "top, 50%",
        end: "bottom 50%"
    });
}