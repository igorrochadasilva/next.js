import Filho from "./Filho";

const Pai = (props) => {
  return (
    <div>
      <Filho nome="João" familia={props.familia} />
      <Filho nome="Vinicius" familia={props.familia} />
      <Filho {...props} nome="Victor" />
    </div>
  );
};

export default Pai;
