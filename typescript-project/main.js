"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Priest_1 = require("./Priest");
const Warrior_1 = require("./Warrior");
const Mage_1 = require("./Mage");
let mage = new Mage_1.Mage("Angelo mage");
let warrior = new Warrior_1.Warrior("Angelo warrior");
let priest = new Priest_1.Priest("Angelo priest");
console.log("mage :>> ", mage);
console.log("warrior :>> ", warrior);
console.log("priest :>> ", priest);
