const repeticao1 = () => {

  const listaAprovados = [
    'João',
    'Maria',
    'Ana',
    'Bia',
    'Carlos',
    'Daniel',
    'Laura'
  ]
  
  const renderizarLista = () => {      
  
    return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    
  }

    return (
      <ul>
        {renderizarLista()}
      </ul>
    );
}   

export default repeticao1;