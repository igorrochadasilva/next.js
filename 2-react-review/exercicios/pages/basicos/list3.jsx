const genarLista3 = (final = 10) => {

    const lista = []

    for(let i = 1; i <= final; i++){
        lista.push(<span>{i}</span>,)
    }

    return lista;
}


const list3= () => {
    return (
      <div>
        <div>{genarLista3(20)}</div>
        <div>{genarLista3(3)}</div>
      </div>
    );
}

export default list3;