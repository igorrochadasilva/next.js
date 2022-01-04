

interface IHumano {
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: IHumano){
    console.log('Olá ' +pessoa.nome)
}

function mudarNome(pessoa: IHumano){
    pessoa.nome = 'Joana'
}

const pessoa: IHumano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string){
        console.log('Olá, meu nome é ' + this.nome +' '+ sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({nome: 'Jonas', idade: 27, altura: 1.70})
pessoa.saudar('Skywalker')

//usando classes...
class Cliente implements IHumano{
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string){
        console.log('Olá, meu nome é ' + this.nome +' '+ sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

//Interface função
interface FuncaoCalculo{
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number{    
    return Array(exp).fill(base).reduce((t,a) => t * a)
}

console.log(potencia(3,10))
console.log(Math.pow(3,10))
console.log(3 ** 10)

