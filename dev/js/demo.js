import {gsap} from "gsap";

gsap.set("#dayMonster", {transformOrigin: "center"});

const dayMonsterTL = gsap.timeline();
dayMonsterTL.from("#dayMonster", {duration:1, rotation:180, x:-600, ease:"none"})
            .to("#dayMonster", {duration:1, rotation:-180, x:600, ease: "none"});

export function dayMonsterAnimation(){
    return dayMonsterTL;
}
