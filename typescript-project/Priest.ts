import { Personagem } from "./Personagem"
import { Util } from "./Util"
export class Priest extends Personagem{
    private _espirito: number;
    private _versatilidade: number
    
    constructor(nome: string){
        super(nome)
        this._armadura=Util.randomizar(30, 1000);
        this._vidaMaxima=Util.randomizar(50, 1000);
        this._vidaAtual=Util.randomizar(10, 500);
        this._espirito=Util.randomizar(30, 1000);
        this._versatilidade=Util.randomizar(100, 1000);
    }
}