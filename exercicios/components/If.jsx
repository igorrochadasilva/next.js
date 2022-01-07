const If = ({teste, children}) => {
    
    if(teste){
        return children
    } else {
        return null
    }
}

export default If