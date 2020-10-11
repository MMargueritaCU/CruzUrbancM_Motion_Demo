import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2TL = gsap.timeline();

section2TL.from("#section-2-inside aside", {duration: 1, alpha: 0, x: -300})
        .from("#article h2", {duration: 1, alpha: 0, x: -300}, "startAnimation-2")
        .from("#article p", {duration: 1, alpha: 0, x: 300}, "startAnimation-2")

export function section2Animation(){
    ScrollTrigger.create({
        // markers: true,
        animation: section2TL,
        toggleActions: "restart none reverse none",
        trigger: "#section-2",
        scrub: 1,
        start: "top, 80%",
        end: "bottom 100%"
    });
}