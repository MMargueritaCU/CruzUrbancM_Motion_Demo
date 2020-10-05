import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2TL = gsap.timeline();

section2TL.from("#section-2-inside aside", {duration: 0.5, alpha: 0})
        .from("#article h2", {duration: 0.5, alpha: 0})
        .from("#article p", {duration: 0.5, alpha: 0})

export function section2Animation(){
    ScrollTrigger.create({
        

    });
}