
const Filho = ({funcao}) => {

  //Passei no Enem
  console.log(funcao);

  return (
    <div>
      <h1>Filho</h1>
      <button onClick={funcao}>Falar com pai v1</button>
      <button onClick={() => funcao('Passei no enem pai')}>Falar com pai v2</button>
    </div>
  );
};

export default Filho;
