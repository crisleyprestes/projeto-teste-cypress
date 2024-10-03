# Automação de Testes com Cypress - Básico

## Descrição

Este projeto tem como objetivo automatizar os testes da funcionalidade de login da aplicação hospedada em [The Internet](https://the-internet.herokuapp.com/login) utilizando o Cypress.

## Dependências

Para executar este projeto, você precisará ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)
- [Cypress](https://www.cypress.io/) (versão 13.15.0)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/crisleyprestes/projeto-teste-cypress.git
   cd projeto-teste-cypress
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

## Executando os Testes

Para executar os testes localename, utilize o seguinte comando:

```bash
npx cypress open
```

Isso abrirá a interface gráfica do Cypress, onde você poderá executar os testes.


### Executando Testes em Modo Headless

Se preferir executar os testes em modo headless (sem interface gráfica), utilize:

```bash
npx cypress run
```

## Estrutura do Projeto

A estrutura básica do projeto é a seguinte:

```
/projeto-teste-cypress
├── cypress
│   ├── e2e                 # Arquivos de testes e2e automatizados
│   │   └── login.cy.ts     # Classe de teste automatizada
│   ├── fixtures            # Arquivos de dados mockados
│   ├── support             # Arquivos de suporte e custom commands
│   └── util                # Arquivos de suporte       
│   └── tsconfig.json       
├── cypress.config.ts       # Arquivo de configuração do Cypress
├── package.json            # Lista as dependências do projeto e scripts
└── package-lock.json
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).