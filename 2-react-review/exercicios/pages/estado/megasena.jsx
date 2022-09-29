import { useEffect, useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"
import mega from "../../functions/mega"

const megasena = () => { 

    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState([])
    
    const renderNumeros = () => {                
        return numeros.map(numero => (<NumeroDisplay key={numero} numero={numero} />))
    }
    
    useEffect(() => {
        setNumeros(mega(qtde))
    }, [])

    return (
      <div
        style={{
          display: "flex",          
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Mega sena</h1>
        <div style={{
            display: "flex", 
            flexWrap: "wrap",
            justifyContent: "center"
        }}>{renderNumeros()}</div>
        <div>
          <input
            type="number"
            min={6}
            max={20}
            value={qtde}
            onChange={(ev) => setQtde(ev.target.value)}
          />
          <button onClick={() => setNumeros(mega(qtde))}>Gerar Aposta</button>
        </div>
      </div>
    );
}

export default megasena