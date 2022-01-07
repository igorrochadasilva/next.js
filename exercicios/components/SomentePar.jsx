const SomentePar = ({numero}) => {
    
    const numeroPar = numero % 2 === 0
    
    return (
        <div>
            {numeroPar ? <span>{numero}</span> : null}
        </div>
    )

    // if(numero % 2 === 0){
    //     return <h1>{numero}</h1>
    // } else{
    //     return null
    // }
}


export default SomentePar