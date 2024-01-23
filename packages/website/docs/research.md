---
sidebar_position: 3
title: Levantamento
---

O time de DS hoje que está sob o _guarda-chuva_ de design. As pessoas chaves do time são:

```bash
Luzia Medeiros - PO
├── Rafael Mercuri - Dev Front
└── Filipe Vieira - Dev Front
```

## Como era o projeto antigo?

O projeto antigo React ([Gitlab - design-system-react](https://gitportoprd.portoseguro.brasil/portocom/marketing/design-system-react)) foi baseado  nos componentes e páginas feitas no squad de migração, atual PDP. Em uma tentativa de centralizar os componentes foi feito uma _ctrl+C_ _ctrl+V_ carregando toda a estrutura do projeto para outro repositório de um projeto que não é ideal para um DS.

## Como está o projeto hoje?

Manteve o mesmo projeto em um repositório diferente (solicitação do time de SRE/DevOps) ([Gitlab Novo Repo- design-system-react](http://git.tools.prd.awsporto/design-system-react)) para tentar colocar no Nexus e atualmente o time está "arrumando a casa", mexendo em 'webpack' por exemplo e ajustando os componentes para liberar um biblioteca e importar nos projetos.

## Problemas do DS atualmente

- Projeto baseado em migração/PDP
- Sem estrutura de importação/atualização
- Vários DS dependendo da linguagem em repositórios diferentes
- Time pequeno absorvendo DS antigos de outros lugares
- Demandas para fazer na estrutura do DS atual

## Sugestão de melhoria

:::warning

Este conteúdo revela opinião pessoal sem ser extremista! 

**FONTE:** _Análise dos repositórios ~~e vozes da minha cabeça~~_. Se quiser questionar, justificar ou ignorar eu vou entender.

:::

- **V2!!!!** :rotating_light::rotating_light::rotating_light::rotating_light:
    - _Releases pequenos, liberando um componente por vez para dar tempo da galera implementar e testar_.

#### Outros questionamentos
- Excluindo o fator preço, por que não utilizar o NPM privado em alternativa ao Nexus? 
- Libs públicas não fortaleceria a comunidade dev e geraria uma engajamento com a Porto? Exemplo: [Luizalabs](https://github.com/luizalabs).

## O Jabuti

Para um novo DS uma abordagem eu usuario seria:

- Monorepo com Lerna e Yarn Workspaces
- Core feito do zero com react sem nenhuma outra biblioteca.
- Esbuild para o bundle
- Documentação com Docusaurus

### Vantagens
    - Código limpo pensado para o DS
    - Publicação com um componente apenas e ir adicionando aos poucos nas sprints
    - Gerador de changelog automático 
    - Repos compartilhando dependêcias

### Desvantagens
    - CI/CD um pouco mais complicados
    - Engenharia de configuração um pouco mais complexa
    - Devops/SRE/SI podem barrar
    - Ferramentas e maquinas da Porto

## Futuro
 
- Web components
    - [Lit](https://lit.dev/)
- Design patterns & Design Tokens
    - [Guru](https://refactoring.guru/design-patterns)
- CLI
    - [Gluegun](https://github.com/infinitered/gluegun)

## O que precisa para mudar?

- Tempo dedicado
- Liberação de ferramentas Porto
- Repo NPM privado
- Represar as demandas
- Um time maior, dedicado e blindado!


#### Outras mudanças (Jabuti político)
- ~~Aumento de cargo e salario pra geral~~ 
- ~~short friday~~

_"Jabuti não sobe em árvore. Se está lá, ou foi enchente ou foi mão de gente" (Dep. Ulisses Guimarães)_

## Dúvidas, sugestões ou reclamações?

![Alt](https://media.giphy.com/media/cYpV2OjeIyBRu5GpHQ/giphy-downsized-large.gif)