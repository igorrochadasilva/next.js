import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import Porta from "../../../components/Porta"
import {atualizarPortas, criarPortas} from "../../../functions/portas"

import Link from "next/link"

import styles from "../../../styles/Jogo.module.css"

export default function Jogo(){
  
  const router = useRouter()
  
  const [valido, setValido] = useState(false)
  const [portas, setPortas] = useState([])          
  
  //renderiza portas 
  const renderizarPortas = () => {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} 
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}
      />    
    })
  }    
  
  //validar se portas são validas
  useEffect(() => {
    const portas = +router?.query.portas
    const temPresente = +router?.query.temPresente
    
    const qtdePortasValida = portas >= 3 && portas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente <= portas
    
    setValido(qtdePortasValida && temPresenteValido)
  }, [portas, router?.query.temPresente, router?.query.portas])
  
  //verificar a alteração do router para pegar os parametros e criar as portas
  useEffect(() => {
    const portas = +router?.query.portas
    const temPresente = +router?.query.temPresente
    
    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])

  return (
    <div id={styles.jogo}>
        <div className={styles.portas}>
        {valido ? renderizarPortas() : <h1>Valores invalidos!</h1>}    
        </div>
      <div className={styles.botoes}>
            <Link href="/"  passHref>
                <button>Reiniciar Jogo</button>
            </Link>
      </div>
    </div>
  );
}