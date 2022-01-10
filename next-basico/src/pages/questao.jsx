import React, { useEffect, useState} from 'react'

const Questao = () => {
    
    const [questao, setQuestao] = useState(null)
    
    useEffect(() => {
        fetch("http://localhost:3000/api/questao/123")
            .then((resp) => resp.json())
            .then(setQuestao)
            .catch((error) => console.log(error));
    }, [])
    
    const renderizarRespostas = () => {
        if(questao){
            return questao.respostas.map((resp, i) => {
                return <li key={i}>{resp}</li>;
            })
        }
    }
        
    return(
        <div>
            <h1>
                Questões!
            </h1>
            <div>
                <span>{questao?.id} - {questao?.enunciado}</span>
                <ul>
                    {
                        renderizarRespostas()
                    }
                </ul>
            </div>
        </div>
    )
}

export default Questao;