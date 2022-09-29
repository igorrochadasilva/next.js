import Filho from "./Filho";
const Pai = (props) => {

    const falarComigo = (param) => {
        console.log(param)
        console.log('Alguem falou comigo')
    }

  return (
    <div>
      <Filho funcao={falarComigo} />
    </div>
  );
};

export default Pai;
