const NumeroDisplay = ({ numero }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        width: "50px",
        borderRadius: "25px",
        backgroundColor: "#222",
        color: "#fff",
        fontSize: "2rem",
        margin: "20px",
      }}
    >
      {numero}
    </div>
  );
};

export default NumeroDisplay;
