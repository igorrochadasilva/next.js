const Estilo = ({ numero, color, direita }) => {    

  return (
    <div>
      <h1
        style={{
          backgroundColor: numero >= 0 ? "#2d2" : "#D22",
          color: color,
          textAlign: direita ? "right" : "left"
        }}
      >
        Texto
      </h1>
      <h2 className={ numero >= 0 ? 'azul' : 'vermelho'}>
            Texto #2
      </h2>
    </div>
  );
};

export default Estilo;