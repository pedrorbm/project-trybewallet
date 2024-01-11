# Explicação do projeto:

Foi desenvolvido uma carteira de controle de gastos com conversor de moedas utilizando uma API, ao utilizar essa aplicação o usuário é capaz de:

- Adicionar, remover e editar um gasto.
- Visualizar uma tabela com seus gastos.
- Visualizar o total de gastos convertidos para uma moeda de sua escolha.

# Conhecimento:

- Criar um store Redux em aplicações React

- Criar reducers no Redux em aplicações React

- Criar actions no Redux em aplicações React

- Criar dispatchers no Redux em aplicações React

- Conectar Redux aos componentes React

- Criar actions assíncronas na sua aplicação React que faz uso do Redux e redux-thunk.

# Tecnologias utilizadas:
- React, Redux, Javascript, CSS, HTML.

# Orientações para uso:

1. Clone o repositório
- Use o comando: `git clone git@github.com:pedrorbm/project-trybewallet.git`
- Entre na pasta do repositório que você acabou de clonar:
  - `cd project-trybewallet`

2. Instale as dependências
- Use o comando: `npm install`

3. Inicialize o projeto
- Use o comando: `npm start`

# Documentação da API de Cotações de Moedas

Sua página _web_ irá consumir os dados da API do _awesomeapi API de Cotações_ para realizar a busca de câmbio de moedas. Para realizar essas buscas, vocês precisarão consultar o seguinte _endpoint_:

- https://economia.awesomeapi.com.br/json/all

O retorno desse endpoint será algo no formato:
```
{
   {
     "USD": {
       "code":"USD",
       "codein":"BRL",
       "name":"Dólar Americano/Real Brasileiro",
       "high":"5.6689",
       "low":"5.6071",
       "varBid":"-0.0166",
       "pctChange":"-0.29",
       "bid":"5.6173",
       "ask":"5.6183",
       "timestamp":"1601476370",
       "create_date":"2020-09-30 11:32:53"
       },
      ...
   }
}
```

Se você quiser aprender mais informações sobre a API, veja a [documentação](https://docs.awesomeapi.com.br/api-de-moedas).

---
