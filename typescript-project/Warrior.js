"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
const Personagem_1 = require("./Personagem");
const Util_1 = require("./Util");
class Warrior extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome);
        this._armadura = Util_1.Util.randomizar(10, 100);
        this._vidaMaxima = Util_1.Util.randomizar(20, 1000);
        this._vidaAtual = Util_1.Util.randomizar(50, 500);
        this._forca = Util_1.Util.randomizar(30, 1000);
        this._agilidade = Util_1.Util.randomizar(100, 1000);
    }
}
exports.Warrior = Warrior;
