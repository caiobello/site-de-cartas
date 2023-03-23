import { Personagem } from "./personagem.js"


export class Arqueiro extends Personagem {
    destreza
    static tipo = 'Arqueiro'
    static descricao = 'Bem no alvo! <br> A destreza do foco, resistência e disciplina.'

constructor(nome, destreza) {
    super(nome)
    this.destreza = destreza

}
obterInsignia() {
    if(this.destreza >= 3 && this.level >= 5){
        return `Dominador de flechas`
    }
    return super.obterInsignia()
}

}