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

# Seção 3: Fundamentos de Next.js
53. Introdução do módulo

54. Código Fonte Final

55. Criando o Projeto
- Poder mover pasta pages e images pra src criada.

56. Estrutura do projeto
- npm run lint -> buscar erros na aplicação
- npm run dev -> modar em dev
- npm run start -> modar em producao, antes precisa rodar npm run build
- criação de pasta components

57. Pasta Page
- Arquivo css global
- arquivos modules css para utilizar em paginas especificas
- o index.js e sua personalização.

58. Rotas #01
- letras minusculas e maisculas são consideradas

59. Rotas #02 - Rotas dinamicas
- os parametros da rota dinamica são passados no nome da pasta ou arquivo ou ambos, e todo arquivo que tem um par de colchete, é uma rota dinamica ao qual o valor está associado ao nome colocado dentro dos colchetes.

60. Rotas #03 - Rotas params
- pegando parametros query string passados na url

61. Navegação entre páginas #01
- Utilizando link do next para criar links hehe
- Navegação entre paginas com Link do next

62. Navegação entre Páginas #02
- Navegação de forma programatica utilizando next, router, link

63. API #01
- Não precisa se preucupar com o CORS quando ocorre requisições de ambiente diferentes, pois aqui, é um unico ambinte.

64. API #02
- Exemplo de api seus tipos de requisições

65. Integração com API #01
- Consumo de informações da api integrando um componente no next com a api que retorna um valor dinamico

66. Integrando com API #02
- Integração simples de backend e front end.

67. APO com Múltiplos parâmetros
- Se for colocado 3 pontos antes no parametro dinamico do nome do arquivo, sera transformado em um array de parametros 
- Com duplo conchetes, os parametros ficam opcionais, ex nome do arquivo: [[dados]].js

68. Estratégias de Renderização
- client-side-rendering- Renderização do lado do react
- Server-side-rendering do lado do servidor
- static rendergin - gerar conteudo estático. (muito interessante na questão de desempenho!)

69. Resolvendo Warning

# Seção 4: Projeto Porta Premiada - Aplicando os Conceitos Fundamentais
70. Introdução

71. Código Fonte Final

72. Visão Geral da Aplicação
- ao clicar na massaneta, abre a porta
- podera excluir portas
- escolher numero de portas
- escolher porta selecionada

73. Criando o Projeto

74. Componente Presente
- criação de html e style de componente presente.

75. Box Sizing
- box sizing border-box para considerar a borda dentro do tamanho

76. Componente Porta #1
- criação de componente e style basico.

77. Componente Porta #2
- Utilizando variaveis no css

78. Componente Porta #3
- estilizando bordas da porta

79. Componente Porta #4
- estilizando chão

80. Componente Porta #5
- estilizando maçaneta

81. Componente Porta #6
- classes css de porta selecionada

82. Classe Porta
- Arquivos em portugues, pasta em ingles
- criando classe porta, seus atributos e metodos

83. Integrando typescript
- instalação e tipagem de variaveis da porta
- alteração de props de porta.

84. Adicionando Eventos a Porta #01

85.Adicionando Eventos a Porta #01
- Adicinando evento de alternar seleção de porta de aberta e fechada passando no componente.

86.Adicionando Eventos a Porta #03
- adicionando eventos de abrir porta

87.Lidando com Array de Portas #01
- Criando função de criarPortas que retorna array de portas

88. Lidando com array de portas #02

89. Integrando porta Presente
- criar condição para mostrar presente
- criar get fechada na class porta
- arrumar style de presente

90. Componente Jogo #01
- criando componente e style das portas pra ficar centralizadas

91. Componente Jogo #02
- Estilização do botão de voltar.

92. Usando Router
- Correção de nomenclatura de prop recebida na function porta
- criação de pastas e nome de arquivo para receber os parametros de numero de portas e porta com presente
- utilizando o useEffect para pegar as mudanças ocorridas na url com os parametro

93.Estrtuturando o Formulário
- criando formulário e sua estilização

94. Finalizando o Formulário
- Estilizando os botões e entrada de informações
- Criação de entrada numerica
- criação de funções de decremento e incremento e estado de numero de entrada de portas e presente

95. Validado Formulário
- Validando numero de portas e porta escolhida

96. Atualizando o next 11
- correção de warnings

# Seção 5: Modos de Pré Renderização do Next JS

97. Introdução do módulo

98. Código Fonte

99. Estratégias de Renderização
- SPA => página é renderizada do lado do browser de página unica.
- SSR => roda do lado servidor, gera conteudo dinamicamente pra cada nova requisição. - melhor para SEO
- SSG => roda do lado servidor, gera conteudo estático. - melhor para SEO

100. Renderização SPA
- O SEO apenas irá identificar uma página com uma div vazia, onde o javascript gerá dinamicamete toda a página.

101. Renderização SSR
- quando tiver um EAD, blog, ou site que precisa focar em SEO, utilizar o SSR.
- todo conteudo e gerado do lado do servidor que é requisitado pelo browser.
- o react é rodado dentro do servidor e suas estruturas de páginas.
- cada requisição é gerado uma nova página do lado do servidor

102. Renderização SSG
- servidor pega os arquivos estaticos e envia pro browser que requisitou.
- a cada nova requisição, é pega um arquivo estatico já carregado na memoria do servidor
- no next, é possivel definir quanto tempo o conteudo vai durar

103. Analisando o projeto Tabuleiro
- conteudo gerado de forma estatica é um comportamento padrão do next

104. Criando projeto
- criando projeto renderizacao

105. Componente Estático 01
- conteudo é sempre o mesmo, não muda

106. Componente Estático 02
- getStatecProps disponibiliza props estaticas no componente

107. Componente Estático 03
- re-geração do conteudo estatico e definir o tempo que o conteudo irá mudar.

108. Componente Estático 04 - part 1
- criado api que retorno array de produtos e mostrar lista desses produtos

109. Componente Estático 04 - part 2
- getStaticProps é executado apenas do lado do servidor

110. Componente Dinâmico #01
- A cada requisição, a página html é renderizada do lado do servidor, exemplo dados financeiros do usuário.
- getServerProps -> conteudo server side rendering, conteudo dinamico disponivel 

111. Componente Dinâmico #02
- criando ids de forma aleatoria pra mostrar que o dinamico os ID mudam pra cada requisição.
- Conteudo dinamico apenas em ultimo caso, onde sempre deve atualizar o conteudo

112. Bug no Build do Projeto

113. Usando getStaticPaths - Part 1
- criando componente estatico que recebe parametros da url dinamicamente
- quando fallback for falso, é gerado 404 quando não encontrar o parametro especifico no paths

114. Usando getStaticPaths - Part 1
- mapear quais são os parametros que serão recebidos por url e baseado nisso, definir uma página para cada parametro recebido

115.Usando Fallback True
- Quando for true, o parametro passado será retornado mesmo não estando no paths

# Seção 6: Projeto Quiz - Full Stack com Nextjs.

116. Introdução do módulo

117. Código Fonte final

118. Visão Geral da aplicação.
- Projeto quiz de 10 perguntas.

119. Criando o projeto.

120. Criação de modelo de questão
- modelo de questão e seus parametros e funções

121. Criaçã de modelo de resposta
- modelo de resposta e seus parametros e funções

122. Iniciando nossa API
- criando arquivo e pasta de api

123. Banco de Questões
- Criação de banco contendo as questões

124. Convertendo para Objeto
- Criando metodo para retornar objeto pois api não estava retornando nada.
- 

125. Construindo API #01
- criando api e retorno de objetos

126. Construindo API #02
- Trazendo todos os IDs.

127. Embaralhar itens
- Embaralhar todas as questões e suas opções de respostas

128. Respondendo a Pergunta
- Metodo responder que irá retornar questão respondida.

129. Iniciando Componente Questão
- Criação de de componente e estilização.

130. Componente Enunciado
- Criaçãp de componente enunciado e sua estilização

131. Componente Resposta #01
- Criação de componente resposta para mostrar as opções

132. Componente Resposta #02
- Style de componente de resposta

133. Componente Resposta #03
- Style de componente Respota, letra e texto e card do componente.

134. Componente Resposta #04
- Style de pergunta e resposta.

135. Componente Resposta #05
- Style de letras e suas cores

136. Componente Resposta #06
- Criação de função de respostaFornecida e retorno de resposta.
- Comunicação indireta, passar informação de componente filho para componente pai

137. Componente Resposta #07
- Style de card inverso e logica de troca de estado de questão pra mudar interface.

138. Componente temporizador
- Utilizando o componente Countdown -> temporizador, quando o tempo acaba, ir para a proxima pergunta.

139. Externalizando Tempo Resposta
- Personalizar temporizador da questão, passando a prop na questao do tempo

140. Componente Botão
- criação de componente de botão e seu style.

141. Componente Questionário #01
- criação de componente questionario que contera a questao e o botão

142. Componente Questinário #02
- Correção de style de questionário.

143. Componente Index #01
- Criação de função de busca de ids de api
- Criaçã de função de busca de questão da api
- Utilização do useEffect pra alterar o estado do componente

144. JSON para Modelo
- Passar json no modelo de questão e resposta.

145. Componente Index #02
- Criação de função de contabilizar respostas certas

146.Componente Index #03
- Criando funções de troca de questões
- Criação que obtem proxima pergunta
- Criação de função de proximo passo

147. Solução com Atributo Key
- Temporizar com prop key para cada pergunta ele contar novamente.

148. Componente Resultado
- Criação de tela de resultado
- Utilização de router para calcular questoes acertadas.

149. Componente Estatística
- Criação de componente estatistica que mostra acertos e erros.

150. Animações Respostas
- animação de mover questões

151. Atualizando Next 11
- Correção de advertencias.

159. Introção ao modulo
- Aplicação de login.

160. Download do código

161. Visão geral do projeto
- Iniciar aplicação com template administrativo, o app te dará uma base.
- Integração com firebase e taiwind css e next.
- Navegação.
- Perfil de usuário e adm.
- Troca de cores
- Login e rotas protegidas.

162. Configuração de projeto
- Criação de projeto e instalação de taiwind css

163. Criação de componentes
- Criação dos componentes, passando props e utilizando taiwind

164. Configurando Fonte
- Referenciando fontes poppies

165. Configurando Layout.
- Utilizando taiwind style muito simples e facil de utilizar.

166. Esquema de cores
- Utilizando o modo dark do taiwind para configurar modo claro e escuro

167. Componente Menu lateral #1
- heroicons.com, icones utilizados com taiwind.

168. Componente Menu Lateral #2
- Estilizando componente com taiwind.

169. Componente Titulo
- Alterando texto cor

170. Componente Logo
- Criação de componente logo.

171. Componente Menu Lateral #3
- Criação de MenuItem de Sair.
- Criação de novas props que o componente ira receber para alterar a cor do mesmo, alterar a cor somente do botão de sair no hover, utilizando a prop passada no componente.

172. Esquema de Cores #2
- inserção de dark mode do taiwind nos elementos e definindo seu stye.

173. Comunicação entre Componentes
- Explicação sobre context api e como compartilhar as informações entre componentes.

174. Context API #1
- Criação do context api e utilizando o useContext pra acessar os dados no componente.

175. Context API #2
- Definir valor tema no context, e utilizar o context tema para alterar entre modo escuro e claro

176. Botão Alterar Tema #01
- Criação de componente, estilização de botão e utilizando context api pra pegar tema guardado na store.

177. Botão Alterar Tema #02
- Finalização de estilização de botões de troca de tema com tailwind css.

178. Tela autenticação. #1
- Criação de componente Input e tela de autenticação.

179. Tela autenticação. #2
- Criação de inputs utilizando componente criado, estilização dos mesmos.

180. Tela autenticação. #3
- Criação de inputs utilizando componente criado, estilização dos mesmos.
- Responsividade da tela utilizando tailwind.

181. Tela Autenticação. #4
- Criação de mensagens de erros de login e cadastro. Controlando o estado da mensagem com useState.

182. Atualização firebase.
- Iremos utilizar a 8.8.0

183. Configuração do firebase
- Criação de projeto no firebase e criação de aplicação web admin.
- utilização do arquivo .env.local para armazenar chaves de segurança e nao subir no github.
- Adicionando formas de se logar no firebase.

184. Iniciando com Autenticação do firebase
- Criação de context de usuario para utilizar no login.

185. Autenticação com Google.
- Login com google utilizando firebase.

186. Avatar Login
- Criação de componente AvatarUsuario para mostrar icone de avatar de usuario quando logar.

187. Criando Sessão com Cookie
- Criação de sessão pra armazenar usuário quando estiver logado
- utilização da dependencia js-cookie
- Configurar gerenciamento de sessão e utilização do firebase pra identificar as alterações que ocorre na autenticação pra mudar o cookie

188. Implementando Logout
- Criação de evento de logout e atualização de cookie de login

189. Protegendo Rotas #1
- Criação de componente para proteger rotas da aplicação, impedindo o acesso caso não esteja logado.

190. Protegendo Rotas #2
- Criação de script pra rodar sempre em todas as páginas, onde que caso não exista o cookie de login, redirecionar para página de autenticação.

191. Salvando Tema Local Storage
- Salvar no localStorage preferencia pelo tema

192. Protegendo Rotas #3
- Criando função de forcar autenticação e reaproveitar componente

193. Autenticação com E-amil e Senha
- Criação de script de login com email e senha e cadastro de email e senha utilizando firebase.




# Seção 8: Projeto Template Admin - Autenticação e Integração com o Firebase
159. Introção ao modulo
- Aplicação de login.

160. Download do código

161. Visão geral do projeto
- Iniciar aplicação com template administrativo, o app te dará uma base.
- Integração com firebase e taiwind css e next.
- Navegação.
- Perfil de usuário e adm.
- Troca de cores
- Login e rotas protegidas.

162. Configuração de projeto
- Criação de projeto e instalação de taiwind css

163. Criação de componentes
- Criação dos componentes, passando props e utilizando taiwind

164. Configurando Fonte
- Referenciando fontes poppies

165. Configurando Layout.
- Utilizando taiwind style muito simples e facil de utilizar.

166. Esquema de cores
- Utilizando o modo dark do taiwind para configurar modo claro e escuro

167. Componente Menu lateral #1
- heroicons.com, icones utilizados com taiwind.

168. Componente Menu Lateral #2
- Estilizando componente com taiwind.

169. Componente Titulo
- Alterando texto cor

170. Componente Logo
- Criação de componente logo.

171. Componente Menu Lateral #3
- Criação de MenuItem de Sair.
- Criação de novas props que o componente ira receber para alterar a cor do mesmo, alterar a cor somente do botão de sair no hover, utilizando a prop passada no componente.

172. Esquema de Cores #2
- inserção de dark mode do taiwind nos elementos e definindo seu stye.

173. Comunicação entre Componentes
- Explicação sobre context api e como compartilhar as informações entre componentes.

174. Context API #1
- Criação do context api e utilizando o useContext pra acessar os dados no componente.

175. Context API #2
- Definir valor tema no context, e utilizar o context tema para alterar entre modo escuro e claro

176. Botão Alterar Tema #01
- Criação de componente, estilização de botão e utilizando context api pra pegar tema guardado na store.

177. Botão Alterar Tema #02
- Finalização de estilização de botões de troca de tema com tailwind css.

178. Tela autenticação. #1
- Criação de componente Input e tela de autenticação.

179. Tela autenticação. #2
- Criação de inputs utilizando componente criado, estilização dos mesmos.

180. Tela autenticação. #3
- Criação de inputs utilizando componente criado, estilização dos mesmos.
- Responsividade da tela utilizando tailwind.

181. Tela Autenticação. #4
- Criação de mensagens de erros de login e cadastro. Controlando o estado da mensagem com useState.

182. Atualização firebase.
- Iremos utilizar a 8.8.0

183. Configuração do firebase
- Criação de projeto no firebase e criação de aplicação web admin.
- utilização do arquivo .env.local para armazenar chaves de segurança e nao subir no github.
- Adicionando formas de se logar no firebase.

184. Iniciando com Autenticação do firebase
- Criação de context de usuario para utilizar no login.

185. Autenticação com Google.
- Login com google utilizando firebase.

186. Avatar Login
- Criação de componente AvatarUsuario para mostrar icone de avatar de usuario quando logar.

187. Criando Sessão com Cookie
- Criação de sessão pra armazenar usuário quando estiver logado
- utilização da dependencia js-cookie
- Configurar gerenciamento de sessão e utilização do firebase pra identificar as alterações que ocorre na autenticação pra mudar o cookie

188. Implementando Logout
- Criação de evento de logout e atualização de cookie de login

189. Protegendo Rotas #1
- Criação de componente para proteger rotas da aplicação, impedindo o acesso caso não esteja logado.

190. Protegendo Rotas #2
- Criação de script pra rodar sempre em todas as páginas, onde que caso não exista o cookie de login, redirecionar para página de autenticação.

191. Salvando Tema Local Storage
- Salvar no localStorage preferencia pelo tema

192. Protegendo Rotas #3
- Criando função de forcar autenticação e reaproveitar componente

193. Autenticação com E-amil e Senha
- Criação de script de login com email e senha e cadastro de email e senha utilizando firebase.


# Seção 9: Projeto Final.

194. Introdução do módulo

195. Resultado Final

196. Configuração: Nextjs tailwindcss e firebase
- Criação de projeto com npx create-next-app.
- Instalação de tailwindcss 
- Criação de projeto no firebase.

197. Criação de titulo e layout componente
- criação de componentes e passando parametros pra eles.

198. Classe Cliente
- Criação de classe cliente pra utilizar na tabela

199. Componente Tabela #1
- Criação de tabela e map de props clientes pra mostrar na tabela.

200. Componente Tabela #2
- Estilização de tabela

201. Componente Tabela #03
- Criado botões de alterar e excluir de cada elemento da tabela

202. Componente botão
- Criação de componente botão e passagem de props de cor de botão, classname e children.

203. Componente Formulário
- Criação de componente formulário e inputs, passagem de props e alteração de esdado de nome e email.

204. Alternando entre Tabela e Formulário
- Alterando entre tabela e formulário atraves de seState nos eventos dos botões

205. Integrando Tabela e Formulário
- Integrando eventos de alterar e salvar clientes entre tabela e formulário

206. Configurando Firebase no Projeto
- Configurando chaves de inicializanção de firebase.

207. Repositório de clientes
- Criação de classe clienteRepositorio, funções de cadastrar novo cliente, alterar, deletar e buscar todos.

208. Integrando Cadastro com firebase
- Integrando eventos de click com funcionalidades do firebase de deletar, criar e alterar

209. Organizando Código com Hooks
- Refatorando código, separando as funções de cliente em hooks e de controle de visibilidade de tabela.


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