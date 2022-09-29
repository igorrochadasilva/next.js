import { useState } from "react";

const mouse = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    
    const estilo = {
      backgroundColor: "#222",
      color: "#fff",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    };
    
    const quandoMover = (e) => {
        console.log(e.clientX, e.clientY)
        setX(e.clientX)
        setY(e.clientY)
        console.log('valor alterado')
    }

    return (
      <div style={estilo} onMouseMove={quandoMover}>        
        <span>Eixo X: {x}</span>
        <span>Eixo Y: {y}</span>
      </div>
    );
}

export default mouse