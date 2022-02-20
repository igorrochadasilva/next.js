import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps{
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario({cliente,clienteMudou, cancelado}:FormularioProps){
    
    const id = cliente?.id
    const [nome, setNome] = useState(cliente?.nome ?? '')
    const [idade, setIdade] = useState(cliente?.idade ?? 0)
    
    return(
        <div>
            { id ? (
                <Entrada 
                    somenteLeitura
                    text="Código" 
                    valor={id} 
                    className="mb-5"
                />
            )
                : false
            }
        
            <Entrada  
                text="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-5"
            />            
            <Entrada  
                text="Idade" 
                tipo="number" 
                valor={idade}
                valorMudou={setIdade}
            />
            <div className="flex justify-end mt-7">
                <Botao cor="blue" className="mr-2" onClick={() => clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}