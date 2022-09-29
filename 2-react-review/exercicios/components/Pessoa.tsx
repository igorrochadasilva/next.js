import React from 'react'

interface IPessoa{
    nome: string
    idade?: number
}

const Pessoa: React.FC <IPessoa> =  ({nome, idade}) => {
    
    return(
        <div>
            <div>
                Nome: {nome}              
            </div>
            <div>
              Idade: {idade ?? 'Não informada'}
            </div>
        </div>
    )
}

export default Pessoa