import styles from '../styles/Porta.module.css'
import PortaModel from '../model/porta'
import Presente from './Presente'

interface OPortaProps {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void
}

const Porta = (props: OPortaProps) => {
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : '';
    
    //evento alternar selecao
    const alternarSelecao = e => props.onChange(porta.alternarSelecao())    
    //evento abrir porta
    const abrir = e => {
      e.stopPropagation()
      props.onChange(porta.abrir())
    }
    //renderizar porta
    const renderizarPorta = () => (      
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.numero}</div>
        <div className={styles.macaneta} onClick={abrir}></div>
      </div>        
    )

    return (
      <div className={styles.area} onClick={alternarSelecao}>
        <div className={`${styles.estrutura} ${selecionada}`}>
          {porta.fechada 
            ? renderizarPorta() 
            : porta.temPresente 
              ? <Presente></Presente> 
              : false}
        </div>
        <div className={styles.chao}></div>
      </div>
    );
};

export default Porta;