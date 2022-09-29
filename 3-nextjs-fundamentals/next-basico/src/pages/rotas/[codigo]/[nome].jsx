import { useRouter } from "next/router";
import Link from "next/link"

const CodigoENome = () => {
  const router = useRouter();
  const codigo = router.query.codigo;
  const nome = router.query.nome

  return (
    <div>
      <h1>
        rotas / {codigo} / {nome}
      </h1>
      <Link href="/rotas" passHref>
        <button>Voltar</button>
      </Link>
    </div>
  );
};

export default CodigoENome;
