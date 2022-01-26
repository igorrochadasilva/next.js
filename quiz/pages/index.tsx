import { useEffect, useState } from 'react'
import Questionario from '../components/Questionario'
import QuestaoModel from '../model/questao'
import { useRouter } from 'next/router'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()

  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respostasCertas, setRespostasCertas] = useState<number>(0)
  
  //Buscar na api de questionario ids das questões
  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resp.json()
    setIdsDasQuestoes(idsDasQuestoes)
  }
  
  //carregar questão por id
  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
    setQuestao(novaQuestao)
  }
  
  //enviar get de ids assim que compononente se renderizar
  useEffect(() => {
    carregarIdsDasQuestoes()
  }, [])
  
  //carregar questão da primeira posição
  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])
  
  //calcular respostas certas
  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
  }
  
  //ir para proxima pergunta utilizando o indice seguinte
  function idProximaPergunta() {
    const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
    return idsDasQuestoes[proximoIndice]
  }
  
  //proximo passo da questão
  function irPraProximoPasso() {
    const proximoId = idProximaPergunta()
    proximoId ? irPraProximaQuestao(proximoId) : finalizar()
  }
  
  //ir para proxima questão
  function irPraProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId)
  }

  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: idsDasQuestoes.length,
        certas: respostasCertas
      }
    })
  }

  return questao ? (
    <Questionario
      questao={questao}
      ultima={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso} />
  ) : false
}
