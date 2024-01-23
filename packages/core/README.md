# Jabuti-DS

Estes são os componentes da implementação do Jabuti Design System, a solução completa de UI do [Luis Nunes](https://github.com/luisnunesal). Você pode encontrar código completo [neste link](https://github.com/luisnunesal/jabuti-ds).

## Tecnologias

- [React](https://react.dev/)
- [Esbuild](https://esbuild.github.io/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled-Components](https://www.styled-components.com/)

## Introdução

Vamos  descobrir **Jabuti em menos de 5 minutos**.

## Primeiros passos

Comece **preparando seu ambiente**.

### O que você vai precisar

- [Node.js](https://nodejs.org/en/download/) versão 18.0 ou superior:
  - Ao instalar o Node.js, é recomendável marcar todas as caixas de seleção relacionadas às dependências.

## Instalando a biblioteca


Na pasta raiz do seu projeto, execute o seguinte comando:

```bash
npm install --save @jabuti-ds/core

```

## Como importar e usar?

Para importar os componentes é muito simples. Siga o exemplo abaixo:

```jsx
import { Box, Button } from '@jabuti-ds/core'


function MyPlayground(){
    return(
        <Box display="flex"  justifyContent="center" alignItems="center" flexDirection="row">
            <Button size="small" variant="contained">
                Clique aqui
            </Button>
        <Box>
    )
}


```

## Licença

© 2024 Luis Nunes - Todos os direitos liberados.

## Keywords

Jabuti DS