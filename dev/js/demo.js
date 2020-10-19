import {gsap} from "gsap";

var darkBlue = "#4E4C80";

gsap.set("#dayMonster", {transformOrigin: "center"});
gsap.set("#tail", {transformOrigin: "center"});
gsap.set("#sparkle1", {transformOrigin: "center"});
gsap.set("#sparkle2", {transformOrigin: "center"});
gsap.set("#sparkle3", {transformOrigin: "center"});
gsap.set("#cap", {alpha: 0});
gsap.set("#zSymbols", {alpha: 0});
gsap.set("#mouthYawn", {alpha: 0});

const dayMonsterTL = gsap.timeline();
dayMonsterTL.to("#tail", {duration:1, rotation: -45, y:375, ease: "none"}, "startAnimation")
            .to("#bowtie", {duration:1, alpha: 0}, "startAnimation")
            .to("#rightHorn", {duration:1, alpha:0}, "startAnimation")
            .to("#dayBackground", {duration:1, fill: darkBlue}, "startAnimation");

export function dayMonsterAnimation(){
    return dayMonsterTL;
}

const sparkleTL = gsap.timeline();
sparkleTL.to("#sparkle1", {duration:1, rotation: 45, ease: "none", yoyo:true, repeat:3, scale:.5, alpha:0.5}, "startSparkles")
        .to("#sparkle2", {duration:1, rotation: -45, ease: "none", yoyo:true, repeat:3, scale:.25, alpha:0.5}, "startSparkles")
        .to("#sparkle3", {duration:1, rotation: 45, ease: "none", yoyo:true, repeat:3, scale:.75, alpha:0.5}, "startSparkles")
        .to("#sparkle1", {duration:1, ease: "none", scale:0, alpha:0}, "startFade")
        .to("#sparkle2", {duration:1, ease: "none", scale:0, alpha:0}, "startFade")
        .to("#sparkle3", {duration:1, ease: "none", scale:0, alpha:0}, "startFade");

export function sparkleAnimation(){
    return sparkleTL;
}