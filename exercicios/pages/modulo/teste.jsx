import Padrao, { Comp1 as Blabla, Comp2, Comp4, Comp5, Comp6 } from "../../components/modulo/funcionais"

const teste = () => {
    return (
      <div>
        <Blabla />
        <Comp2 />
        <Padrao />
        <Comp4 />
        <Comp5 />
        <Comp6 msg={"legal!!!"}/>
      </div>
    );
}

export default teste