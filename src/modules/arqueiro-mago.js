import { Personagem } from "./personagem.js";
import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";

export class ArqueiroMago extends Personagem {
   
    ladoArquerio
    ladoMago
    static tipo = 'ArqueiroMago'
    static descricao = 'Flechas em chamas!<br>A destreza do foco com o poder da sabedoria.'

    constructor (nome, destreza, elementoMagico, levelMagico, inteligencia) {
    super(nome)
    this.ladoArqueiro = new Arqueiro(nome, destreza)
    this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia)

    }

    obterInsignia() {
        if(this.levelMagico >= 5 && this.inteligencia >= 3 && this.level >= 5){
            return `Mestre do ${this.elementoMagico}`
        } else { 
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}` 
        }

    }
}