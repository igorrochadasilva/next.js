import Titulo from "../../components/Titulo"

const usandoTitulo = () => {
    return (
      <div>
        <Titulo
          principal="Página de Cadastro"
          secundario="Incluir, alterar e excluir coisas!"
        />
        <Titulo
          principal="Página de Usuario"
          secundario="Incluir, alterar e excluir do usuario!"
          pequeno
        />
        <Titulo
          principal="Página de Cliente"
          secundario="Incluir, alterar e excluir do cliente!"
          pequeno={true}
        />
      </div>
    );
}


export default usandoTitulo