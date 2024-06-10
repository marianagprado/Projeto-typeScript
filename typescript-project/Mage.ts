import { Personagem } from "./Personagem"
import { Util } from "./Util"
export class Mage extends Personagem{
    private _intelecto: number;
    private _velocidade: number;
    
    constructor(nome: string){
        super(nome)
        this._armadura=Util.randomizar(10, 100);
        this._vidaMaxima=Util.randomizar(20, 1000);
        this._vidaAtual=Util.randomizar(50, 500);
        this._velocidade=Util.randomizar(30, 1000);
        this._intelecto=Util.randomizar(100, 1000);
    }
}