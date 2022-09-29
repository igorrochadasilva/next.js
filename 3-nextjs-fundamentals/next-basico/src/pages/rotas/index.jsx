import Link from 'next/link'
import router from 'next/router'

const rotas = () => {
    
    const navegacaoSimples = (url) => {
      router.push(url);
    };
    
    const navegacaoComParams = () => {
        router.push({
            pathname: "/rotas/params",
            query:{
                id:123,
                nome:'Ana'
            }
        })
    }

    return (
      <div>
        <h1>Rotas index</h1>
        <ul>
          <Link href="/rotas/params?id=12&nome=Ana" passHref>
            <li>params</li>
          </Link>
          <Link href="/rotas/123/buscar" passHref>
            <li>Buscar</li>
          </Link>
          <Link href="/rotas/123/daniel" passHref>
            <li>Buscar params</li>
          </Link>
        </ul>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <button onClick={navegacaoComParams}>Params</button>
          <button onClick={() => router.push("/rotas/123/buscar")}>
            Buscar
          </button>
          <button onClick={() => navegacaoSimples("/rotas/123/daniel")}>
            Daniel
          </button>
        </div>
      </div>
    );
}

export default rotas