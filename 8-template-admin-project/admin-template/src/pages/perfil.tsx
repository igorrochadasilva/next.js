import Layout from '../components/templates/Layout'
import useAppData from '../data/hook/useAppData'


export default function Perfil() {

  const dados = useAppData()

  return (
    
    <Layout 
      titulo='Perfil do usuário'
      subtitulo='Administre suas informações do usuário'
    >
      <h3>{dados.tema}</h3>    
      <button onClick={dados.alternarTema}>Alternar Tema</button>
    </Layout>
  )
}
