# HidroWebnia

HidroWebnia é uma solução integrada para o monitoramento e gerenciamento de sistemas hidropônicos. O projeto combina tecnologia web e IoT para oferecer uma plataforma acessível e eficiente, que permite aos usuários acompanhar em tempo real as condições do cultivo, como níveis de água, temperatura, pH e luminosidade.

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Contribuição](#contribuição)
---

## Visão Geral

Este projeto é uma aplicação web construída com Node.js no backend e React no frontend, para que o usuário possa acompanhar em tempo real as condições do cultivo.

---

## Tecnologias Utilizadas

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express, MongoDB

---

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas antes de começar:

- Node.js 
- NPM ou Yarn
- Git
- MongoDB 

---

## Instalação

### Clonando o Repositório

```bash
git clone https://github.com/seu-usuario/HidroWebnia.git
cd HidroWebnia
```

1. Instale as dependências:
```bash
npm install
```
2. Configure as variáveis de ambiente no arquivo .env
3. Inicie o servidor
```bash
npm run backend
```

## Frontend

1. Acesse a pasta do frontend:
```bash
cd frontend
```
2. Instale as dependências:
```bash
npm install
```
3. Inicie o servidor
```bash
npm start
```


## Uso

Após a instalação, a aplicação estará disponível em:

- **Frontend**: `http://localhost:3000`
- **Backend**: `http://localhost:3080`

Você pode acessar o painel de controle do sistema no navegador e começar a monitorar seus parâmetros hidropônicos em tempo real.

---

## Scripts Disponíveis

### Backend

- `npm start`: Inicia o servidor em modo de produção.
- `npm run backend`: Inicia o servidor com *nodemon* para desenvolvimento.
- `npm run devices`: Executa o Backend e o Frontend ao mesmo tempo.

### Frontend

- `npm start`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera a versão de produção da aplicação.
- `npm test`: Executa os testes.

---

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch.
```bash
git checkout -b minha-feature
```
3. Realize suas alterações e faça um commit.
```bash
git commit -m "Minha nova feature"
```
4. Envie suas alterações.
```bash
git push origin minha-feature
```
5. Abra um pull request.

