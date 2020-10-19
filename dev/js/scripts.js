import {gsap} from "gsap";
import {dayMonsterAnimation} from "./demo.js"

const mainTL = gsap.timeline();
mainTL.add(dayMonsterAnimation());
