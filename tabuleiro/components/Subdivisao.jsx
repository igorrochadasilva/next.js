import styles from "../styles/Subdivisao.module.css";

const Subdivisao = ({preta}) => {
  return <div 
    style={{
      backgroundColor: preta ? "#000" : "#fff"
    }}
    className={styles.subdivisao}>
  
  </div>;
};

export default Subdivisao;
