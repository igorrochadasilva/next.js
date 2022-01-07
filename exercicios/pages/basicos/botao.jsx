const acao1 = () => {
    console.log('Acao1')
}

const botao = () => {

    const acao2 = () => {
        console.log('acao2')
    }
    
    const acao4 = (e) => {
      console.log(e);
    };

    return (
      <div>
        <button onClick={acao1}>Click #01</button>
        <button onClick={acao2}>Click #02</button>
        <button onClick={() => console.log("acao3")}>Click #03</button>
        <button onClick={acao4}>Click #04</button>
        <button onClick={(e) => acao4(e.altKey)}>Click #04 v2</button>
        <div>
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      </div>
    );
}

export default botao