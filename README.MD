# JABUTI MONOREPO

O projeto Jabuti Monorepo compreende 3 pacotes:

- **Core** - Lib de componentes
- **Website** - Documentação da lib de componentes
- **App** - Aplicação teste para exibir os componentes

A ideia de fazer um monorepo é poder compartilhar as dependências e facilitar a importação e o testes de vários pacotes.

## Instalando as dependências

O Jabuti Monorepo utiliza o [Lerna](https://lerna.js.org/) pra gerenciar as dependências o que torna tudo mais simples. Para instalar bastar ter o  [Node.js](https://nodejs.org/en/download/) versão 18.0 ou superior e rodar o comando.

```bash
npm install

# ou

yarn

```

## Rodando os pacotes

Para rodar os projetos execute os comandos


```bash
npm run start-core # para rodar o core
npm run start-website # para rodar o website
npm run start-app  # para rodar o app

# ou

yarn start-core # para rodar o core
yarn start-website # para rodar o website
yarn start-app # para rodar o app


```

## Buildando os pacotes

No momento é possivel buildar apenas o **Core** que é o nosso pacote mais importante, a lib de componentes.

```bash
npm run build-core # para buildar o core

# ou

yarn build-core # para buildar o core

```

## Outros links

- [npm @jabuti-ds/core](https://www.npmjs.com/package/@jabuti-ds/core)