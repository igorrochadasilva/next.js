// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


 function numeroAleatorio(min = 1, max = 1000) {
  return parseInt(Math.random() * (max - min)) + min
}

export default function handler(req, res) {
  res.status(200).json([
    { id: numeroAleatorio(), nome: "Caneta", preco: 5.6 },
    { id: numeroAleatorio(), nome: "Caneta", preco: 15.6 },
    { id: numeroAleatorio(), nome: "Caneta", preco: 35.6 },
    { id: numeroAleatorio(), nome: "Caneta", preco: 55.6 },
  ]);
}
