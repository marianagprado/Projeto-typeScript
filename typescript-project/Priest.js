"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Priest = void 0;
const Personagem_1 = require("./Personagem");
const Util_1 = require("./Util");
class Priest extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome);
        this._armadura = Util_1.Util.randomizar(30, 1000);
        this._vidaMaxima = Util_1.Util.randomizar(50, 1000);
        this._vidaAtual = Util_1.Util.randomizar(10, 500);
        this._espirito = Util_1.Util.randomizar(30, 1000);
        this._versatilidade = Util_1.Util.randomizar(100, 1000);
    }
}
exports.Priest = Priest;
