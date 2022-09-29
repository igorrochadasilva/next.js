const ContadorDisplay = ({numero}) => {
    
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "50px",
            width: "50px",
            borderRadius: "25px",
            backgroundColor: "#222",
            color: "#fff",
            fontSize: "3rem",
            margin: "20px",
        }}>
         {numero}
        </div>
    )
}

export default ContadorDisplay;