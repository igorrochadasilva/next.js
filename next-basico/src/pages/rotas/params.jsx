import { useRouter } from "next/router";
import Link from 'next/link'

const Params = () => {
  const router = useRouter();
  const id = router.query.id;
  const nome = router.query.nome
    

  return (
    <h1>
      params: {id} e {nome}
      <Link href="/rotas" passHref>      
        <button>Voltar</button>
      </Link>
    </h1>
  );
};

export default Params;
