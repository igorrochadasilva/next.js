import { embaralhar } from "../functions/arrays"
import RespostaModel from "./resposta"


//Modelo de Questão com propriedades e motodos
export default class QuestaoModel {
    #id: number
    #enunciado: string
    #respostas: RespostaModel[]
    #acertou: boolean
    
    //iniciando propriedades do modelo
    constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false) {
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
    }
    
    //getters
    get id() {
        return this.#id
    }

    get enunciado() {
        return this.#enunciado
    }

    get respostas() {
        return this.#respostas
    }

    get acertou() {
        return this.#acertou
    }
    //retorna se questão não foi respondida
    get naoRespondida() {
        return !this.respondida
    }
    //buscar resposta clicada
    get respondida() {
        for (let resposta of this.#respostas) {
            if (resposta.revelada) return true
        }
        return false
    }
    //metodo de pegar resposta e indentificar se resposta selecionda é a correta
    responderCom(indice: number): QuestaoModel {
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resposta, i) => {
            const respostaSelecionada = indice === i
            const deveRevelar = respostaSelecionada || resposta.certa
            return deveRevelar ? resposta.revelar() : resposta
        })
        return new QuestaoModel(this.id, this.enunciado, respostas, acertou)
    }
    //embaralhar questoes
    embaralharRespostas(): QuestaoModel {
        let respostasEmbaralhadas = embaralhar(this.#respostas)
        return new QuestaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou)
    }
    //criar objeto da questão
    static criarUsandoObjeto(obj: QuestaoModel): QuestaoModel {
        const respostas = obj.respostas.map(resp => RespostaModel.criarUsandoObjeto(resp))
        return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou)
    }
    //converter para objeto
    paraObjeto() {
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            respondida: this.respondida,
            acertou: this.#acertou,
            respostas: this.#respostas.map(resp => resp.paraObjeto()),
        }
    }
}