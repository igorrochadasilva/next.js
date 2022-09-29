import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

const useClientes = () => {

  const repo: ClienteRepositorio = new ColecaoCliente()
  
  const { tabelaVisivel, formularioVisivel, exibirFormulario, exibirTabela } = useTabelaOuForm()
  
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])  
  
  useEffect(obterTodos, [])
  
    function obterTodos(){
        repo.obterTodos().then(clientes => {
          setClientes(clientes)
          exibirTabela()
        })
    }  
  
  
  const selecionarCliente = (cliente: Cliente) => {
      setCliente(cliente)
      exibirFormulario()
  }
  
  const excluirCliente = async (cliente: Cliente) => {
    await repo.excluir(cliente)
    obterTodos()
  }
  
    
  const novoCliente = () => {      
    setCliente(Cliente.vazio())
    exibirFormulario()
  }    
  
  const salvarCliente = async (cliente: Cliente) => {    
    await repo.salvar(cliente)
    obterTodos()
  }    
  
  return {        
    cliente,
    clientes,
    obterTodos,
    selecionarCliente,
    excluirCliente,
    novoCliente,
    salvarCliente,
    tabelaVisivel,
    exibirTabela,
  }
}

export default useClientes