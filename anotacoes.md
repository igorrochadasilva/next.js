# Seção 1. Introdução
- Oque é next e quais tecnologias vão ser abordadas.

# Seção 2. Revisão React

7. Introdução do módulo

8. Código fonte final.

9. Criando o Projeto
- npx create-next-app , instalação do projeto

10. Primeiro componente
- Apenas ao criar um arquivo em page, é criado a rota automaticamente associada ao componente.

11.Movendo o Primeiro Componente
- Arquivos ou pastas criadas no pages, cria automaticamente a rota para o componente, desde que tenha um arquivo exportando o componente

12. JSX #01
- Sintaxe criada para misturar html e javascript

13. JSX #02
- Cenários diversos para trabalhar com jsx, ao qual função, variavel pode retornar jsx

14. JSX #03
- Arquivos tipo jsx.

15. JSX #04
- Comunicação entre jsx e javascript

16. Desafio Lista

17. Lista 1
- forma 1

18. Lista 2
- forma 2

19. Lista 3
- Forma 3

20. Fragment #01
- Utilizando o react Fragment forma 1.


21. Fragment #01
- Utilizando o react Fragment na forma 2.

22. Usando o componente.
- Utilizando o componente titulo na pagina usandoTitulo.

23. Propriedade Componentes
- Passando propriedades nos componentes para cada componente ser diferente de acordo com a propriedade passada.

24. Integração com CSS #01
- Importe de css somente no globals css por regra do next, para utilizar em um escopo de componente especifico, utilizando a propria especificidade do css.

25. Integração com css #02
- No caso 2, é importado dentro do componente o style.module.css e utiliza o module css importado

26. Props Somente Leitura
- As propriedades são somente leitura.

27. Aplicando Estilo CSS
- Aplicando os estilos de css de maneira condicional, diretamente a partir de style ou por objeto ou receber por props

28. Projeto Tabuleiro #01
- Criando um tabuleiro de xadres

29. Projeto Tabuleiro #02
- criando projeto npx create-next-app

30. Projeto Tabuleiro #03
- Criando primeiro componente Subdivisao.

31. Projeto Tabuleiro #04
- Criando componente Linha que utilizara subdivisao

32. Projeto Tabuleiro #05
- Criando componente Tabuleiro que utilizara linha que utiliza subdivisao.

33.Repetição
- Utilizando for ou map de forma repetitiva 

34. Repetição #02
- Utilizando repetição em uma lista de objetos de produtos

35. Condicional #01
- Renderização condicional de componente de acordo com a condição passada.

36. Props Children
- Passando os children no componente para renderizalos.

37. Condicional #02
- Utilizando uma forma de renderização condicional utilizando componente if passando uma condição.

38. Comunicação Direta
- Comunicação direta entre os componentes passando props de componente pai pra filho

39. Chamada de função via evento
- Evento de click e chamada de funções de diferentes maneiras.

40. Comunicação indireta
- Comunicação utilizando função entre componente pai e filho via props

41. Componente com Estado
- Utiizando o useState para controle de estado

42. Desafio Contador
- Contador incrementar e decrementar

43. Contador
- Utilizando o useState e passando o estado pro filho pra apenas renderizar os valores.
- O contadorDisplay é apenas um componente stateless

44. Componentes Controlados
- Fazendo componentes controlas dependendo de valores pré definidos pelos estados

45. Mega Sena
- Aposta mega sena

46. Desafio Mega Sena -  resposta #01
- Criação de logica de gerar numeros

47. Desafio Mega Sena - resposta #02
- Criado componente mega sena que mostra os numeros sorteados e você pode escolher a quantidade de numeros sorteados

48. Desafio Mega Sena - resposta #03
- Correção de warn utilizando o useEffect

49. Componente Baseado em Classe
- Criando um componente class, criando estado com state, recebendo e passando props.
- Criando funções e chamando os mesmos no componente

50. Sistema Módulo ECMAscript
- Exportando e importando componentes de varias maneiras diferentes

51. Integrando Typescript
- Integrando o typescript de forma simples, o proprio next configura quando ve o arquivo tsconfig.json

52. Conclusão do Módulo




# Seção 10: Bônus: Entendendo typescript.

211. Aviso sobre a seção extra de typescript

212. Oque é typescript
- Linguagem que engloba javascript mas tras uma quantidade maior de de recursos e possibilidades para o desenvolvimento.
- Tipagem, genérics, interfaces, namespaces, decoratos.

213. Por que Typescript e como usá-lo?
- Tipagem de variaveis é indispensavel.

214. Instalando Typescript
- instalação de typescript global;
- tsc --init -> iniciando o compilador typescript

215. Executando typescript
- Executando o typescript para gerar um file.js sem tipagem.
- tsc basico.ts 

216: Executando typescript - Code Runner
- Code runner, mais rapido pra testar os scripts.

217. Executando typescript - HTML
- utilizando o live-server so pra ver o processo de compilação do typescript de forma automatica de modo que o browser detecte essa mudança.

218. O básico de tipos
- tipo string no typescript

219. tipos numéricos e booleano
- tipo numero e booleano.

220. Atribuindo tipos explicitos
- se vc inicializa a variavel e não define o tipo, ela vai ser do tipo N.

221. Arrays e Tipos
- tipo array, definindo o tipo array e o tipo dentro do array

222. Tuplas
- Array de tipos de unidades pré definidas

223. Enums

224. Any
- Evitar o uso do any, mas usando-o é voltar para javascript

225. O básico de interfaces
- Interfaces são contratos aos quais o objeto tem que atender o contrato pra ele poder se passar pela interface

226. Interfaces e Propriedades
- interface e o atributo opcional e um atributo dinamico

227. Interfaces e métodos
- Declaração de metodo na interface.

228. Usando interfaces com classes
- Usando interfaces no contexto de classes

229. Interfaces e tipo Função