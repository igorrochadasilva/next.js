import {useRouter} from 'next/router'
import Link from "next/link";

const Buscar = () => {

  const router = useRouter()
  const codigo = router.query.codigo
  

  return (
    <div>
      <h1>rotas / {codigo} / buscar rota</h1>
      <Link href="/rotas">
        <a>
          <button>Voltar</button>
        </a>
      </Link>
    </div>
  );
};

export default Buscar;