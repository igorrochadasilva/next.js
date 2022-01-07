import { Component } from "react";
import Contador from "../../components/Cotador";

export default class ContadorPage extends Component{
    render(){
        return (
          <div>
            <Contador valorInicial={100} passo={37}/>
          </div>
        )
    }
}