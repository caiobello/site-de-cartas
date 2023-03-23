import { Personagem } from"./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

// const magaAmanda = new Mago('Amanda', 5, 'Fogo', 5, 10)
// const magoCaio = new Mago('Caio', 5, 'Encanto', 5, 10)

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const arqueiroGiba = new Arqueiro('Giba', 5, 5)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 'ar', 7, 7)
const guerreiraJulia = new Guerreiro('Julia', 4)

// arqueiroGiba.#level = 15

const personagens = [magoAntonio, arqueiroGiba, arqueiroMagoChico, guerreiraJulia]

console.log(guerreiraJulia.level)
new PersonagemView(personagens).render()
// console.log(Personagem.verificarVencedor(arqueiroGiba, magoAntonio))
console.log(arqueiroGiba)