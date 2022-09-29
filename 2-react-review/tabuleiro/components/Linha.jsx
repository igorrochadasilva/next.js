import Subdivisao from "./Subdivisao";
import styles from "../styles/Linha.module.css"

const Linha = ({ preta }) => {
  return (
    <div className={styles.linha}>
      <Subdivisao preta={preta} />
      <Subdivisao preta={!preta} />
      <Subdivisao preta={preta} />
      <Subdivisao preta={!preta} />
      <Subdivisao preta={preta} />
      <Subdivisao preta={!preta} />
      <Subdivisao preta={preta} />
      <Subdivisao preta={!preta} />
    </div>
  );
};

export default Linha;
