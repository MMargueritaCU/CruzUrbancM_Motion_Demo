import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section5TL = gsap.timeline();

section5TL.from("#gallery-1", {duration: 1, x: -300, alpha: 0, scale: 0.5})
        .from("#gallery-2", {duration: 1, x: 300, alpha: 0, scale: 0.5})
        .from("#gallery-3", {duration: 1, y: 300, alpha: 0, scale: 0.5})

export function section5Animation(){
    ScrollTrigger.create({
        // markers: true,
        animation: section5TL,
        toggleActions: "restart none reverse none",
        trigger: "#section-5",
        scrub: 1,
        start: "top, 90%",
        end: "bottom 100%"
    });
}