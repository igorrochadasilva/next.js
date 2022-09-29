export async function getServerSideProps() {
  console.log("[Sever] gerando props paara o componente apenas no servidor...");
  const resp = await fetch("http://localhost:3000/api/produtos");
  const produtos = await resp.json();

  return {
    props: {
      produtos,
    },
  };
}

export default function Dinamico2(props) {
  console.log("[Cliente] renderizando o componente...");

  const renderizarProdutos = () => {
    return props.produtos.map((produto) => {
      return (
        <li key={produto.id}>
          {produto.nome} tem preço de R$ {produto.preco}
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Dinamico #02</h1>
      <ul>{renderizarProdutos()}</ul>
    </div>
  );
}
