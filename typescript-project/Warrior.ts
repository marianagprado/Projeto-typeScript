import { Personagem } from "./Personagem"
import { Util } from "./Util"
export class Warrior extends Personagem{
    private _forca: number;
    private _agilidade: number;
    
    constructor(nome: string){
        super(nome)
        this._armadura=Util.randomizar(10, 100);
        this._vidaMaxima=Util.randomizar(20, 1000);
        this._vidaAtual=Util.randomizar(50, 500);
        this._forca=Util.randomizar(30, 1000);
        this._agilidade=Util.randomizar(100, 1000);
    }
}