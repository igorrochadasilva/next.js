export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

const Estatico = ({numero}) => {
    return (
      <div>
        <span>Aleatório: {numero}</span>
      </div>
    );
}

export default Estatico;