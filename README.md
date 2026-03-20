# React Course

Repositorio com meus estudos e projetos do curso de React do [SuperSimpleDev](https://www.youtube.com/@SuperSimpleDev), incluindo aulas praticas, exercicios e projetos completos com frontend e backend.

## Sobre o repositorio

Este projeto foi organizado para acompanhar a evolucao no curso:

- `lessons/`: exemplos e projetos desenvolvidos durante as aulas.
- `exercises/`: exercicios praticos por modulo.

## Estrutura

```txt
react-course/
  lessons/
    basics/
    chatbot/
    chatbot-project/
    ecommerce-backend/
    ecommerce-project/
  exercises/
    module1/
    module3/
    module4/
    module5/login-form/
```

## Principais projetos

### 1. Chatbot Project (`lessons/chatbot-project`)

- App React com Vite.
- Componentizacao, estado e hooks.

### 2. E-commerce Backend (`lessons/ecommerce-backend`)

- API com Express.
- Base para produtos, carrinho, pedidos e imagens.

### 3. E-commerce Frontend (`lessons/ecommerce-project`)

- App React com rotas e integracao com API.
- Tela inicial, checkout e fluxo de pedido.
- Testes com Vitest + Testing Library.

### 4. Login Form (`exercises/module5/login-form`)

- Exercicio pratico com React + Vite focado em formulario.

## Tecnologias usadas

- React
- Vite
- React Router
- Node.js
- Express
- Vitest
- Testing Library
- ESLint

## Pre-requisitos

- Node.js instalado (recomendado: versao LTS atual)
- npm

## Como executar

### Frontend do e-commerce

```bash
cd lessons/ecommerce-project
npm install
npm run dev
```

### Backend do e-commerce

```bash
cd lessons/ecommerce-backend
npm install
npm run dev
```

### Chatbot project

```bash
cd lessons/chatbot-project
npm install
npm run dev
```

### Login form (exercicio)

```bash
cd exercises/module5/login-form
npm install
npm run dev
```

## Testes

No `ecommerce-project`, os testes estao em `src/**/*.test.*`.

Para executar:

```bash
cd lessons/ecommerce-project
npx vitest
```

## Creditos

Curso original: **SuperSimpleDev**  
Canal: [youtube.com/@SuperSimpleDev](https://www.youtube.com/@SuperSimpleDev)
