import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section4TL = gsap.timeline();

section4TL.from("#section-4 div", {duration: 2, alpha: 0})

export function section4Animation(){
    ScrollTrigger.create({
        // markers: true,
        animation: section4TL,
        toggleActions: "restart none reverse none",
        trigger: "#section-4",
        scrub: 1,
        start: "top, 80%",
        end: "bottom 100%"
    });
}