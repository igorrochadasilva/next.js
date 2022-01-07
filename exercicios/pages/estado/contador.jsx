import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

const contador = () => {

    const [numero, setNumero] = useState(0)
    
    const inc = () => {
        setNumero(numero + 1)
    }
    
    const dec = () => {
        setNumero(numero - 1)
    }

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Contador</h1>
        <ContadorDisplay numero={numero} />
        <div>
          <button onClick={inc}>+</button>
          <button onClick={dec}>-</button>
        </div>
      </div>
    );
}

export default contador