import { useState } from "react"

const formulario = () => {

    const [valor, setValor] = useState('inicial')
    
    const alterarInput = () => {
        setValor(valor + '!')
    }
    
    return (
      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
        <span>{valor}</span>
        <input type="text" value={valor} onChange={e => setValor(e.target.value)} />
        <button onClick={alterarInput}></button>
      </div>
    );
}


export default formulario