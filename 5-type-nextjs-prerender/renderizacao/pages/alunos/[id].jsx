export async function  getStaticPaths(){
    
    //obtendo ids de api de tutores
    const resp = await fetch(`http://localhost:3000/api/alunos/tutores`)
    const ids = await resp.json()
    
    const paths = ids.map(id => {
        return { params: {id: `${id}` }}
    })
    
    return {
      fallback: true, //404
      paths: paths,
    };
}

export async function getStaticProps({params}) {
    //pegando alunos de api de alunos
    const resp = await fetch(`http://localhost:3000/api/alunos/${params.id}`)
    const aluno = await resp.json()
    
  return {
    props: { aluno },
  };
}


const AlunoPorId = ({aluno}) => {
    
    return (
      <div>
        <h1>Detalhes de aluno</h1>
        {aluno ?
          <ul>
            <li>{aluno.id}</li>
            <li>{aluno.nome}</li>
            <li>{aluno.email}</li>
          </ul>
        : false }
      </div>
    );
}

export default AlunoPorId