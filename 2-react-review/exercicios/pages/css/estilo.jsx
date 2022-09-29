import Estilo from "../../components/Estilo";


const usandoEstilo = () => {
  return (
    <div>
      <Estilo numero={5} color={"#000"} />
      <Estilo numero={-5} color={"#fff"} direita/>
    </div>
  );
};

export default usandoEstilo;
