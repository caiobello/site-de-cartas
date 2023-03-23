import { Personagem } from "./personagem.js"


export class Guerreiro extends Personagem {
    destreza
    static tipo = 'Guerreiro'
    static descricao = 'O poder do escudo.<br>A defesa é uma arte.'

constructor(nome, forca) {
    super(nome)
    this.forca = forca

}
obterInsignia() {
    if(this.forca >= 5 && this.level >= 7){
        return `Guerreiro Furioso`
    } else {
    return super.obterInsignia()
    }

}

}