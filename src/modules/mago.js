import { Personagem } from "./personagem.js"


export class Mago extends Personagem {
    elementoMagico
    levelMagico
    inteligencia
    static tipo = 'Mago'
    static descricao = 'Inteligência filosofal! <br> Agora você tem o poder da sabedoria.'

constructor(nome, elementoMagico, levelMagico, inteligencia) {
    super(nome)
    this.elementoMagico = elementoMagico
    this.levelMagico = levelMagico
    this.inteligencia = inteligencia

}
obterInsignia() {
    if(this.levelMagico >= 5 && this.inteligencia >= 3 && this.level >= 5){
        return `Mestre do ${this.elementoMagico}`
    }
    return super.obterInsignia()
}

}