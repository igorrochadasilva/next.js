export default class PortaModel {
  //atributos da classe
  #numero: number
  #temPresente: boolean
  #selecionada:boolean
  #aberta:boolean

  //inicianlizando atributos
  constructor(
    numero: number,
    temPresente = false,
    selecionada = false,
    aberta = false
  ) {
    this.#numero = numero;
    this.#temPresente = temPresente;
    this.#selecionada = selecionada;
    this.#aberta = aberta;
  }

  //metodos get dos valores
  get numero() {
    return this.#numero;
  }

  get temPresente() {
    return this.#temPresente;
  }

  get selecionada() {
    return this.#selecionada;
  }

  get aberta() {
    return this.#aberta;
  }
  
  get fechada() {
    return !this.#aberta;
  }


  //metodo descelecionar a porta
  descelecionar() {
    const selecionada = false;
    return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta);
  }
  //medoto alterarSelecao a porta
  alternarSelecao() {
    const selecionada = !this.selecionada;
    return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta);
  }
  //metodo abrir porta
  abrir() {
    const aberta = true;
    return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta);
  }
}