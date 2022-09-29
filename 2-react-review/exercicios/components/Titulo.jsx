const Titulo = ({principal, secundario, pequeno}) => {


    return pequeno ? (
      <>
        <p>{principal}</p>
        <p>{secundario}</p>
      </>
    ) : (
      <>
        <h1>{principal}</h1>
        <h2>{secundario}</h2>
      </>
    );
    
    
 
    
}

export default Titulo