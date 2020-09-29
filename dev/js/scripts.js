// import * as Demo from './demo.js';

import {gsap} from "gsap";

import{purpleBoxAnimation} from "./purpleBox.js"
import{orangeBoxAnimation} from "./orangeBox.js"
import{magentaBoxAnimation} from "./magentaBox.js"
import{yellowBoxAnimation} from "./yellowBox.js"

// console.log(Demo);

const mainTL = gsap.timeline({paused:true});

    mainTL.add(purpleBoxAnimation(), "startBoxes")
        .add(orangeBoxAnimation(), "startBoxes")
        // .addLabel("magenta")
        .add(magentaBoxAnimation(), "startBoxes")
        .add(yellowBoxAnimation(), "startBoxes")
        // .seek("magenta")
        .play();