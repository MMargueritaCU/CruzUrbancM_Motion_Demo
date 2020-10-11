import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section6TL = gsap.timeline();

// gsap.set("#section-6-second", {transformOrigin: "left"});

section6TL.from("#portrait", {duration: 5, alpha: 0, x: -300, scale: 0.5})
        .from("#section-6-second", {duration: 3, alpha: 0})

export function section6Animation(){
    ScrollTrigger.create({
        // markers: true,
        animation: section6TL,
        toggleActions: "restart none reverse none",
        trigger: "#section-6",
        scrub: 1,
        start: "top, 80%",
        end: "bottom 100%"
    });
}