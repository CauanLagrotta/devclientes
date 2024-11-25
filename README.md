# Dev Clientes

**Projeto para estudo. Créditos: [Sujeito Programador](https://youtu.be/XuTfN_84rcU?si=shiLCYGn3aiRh47l)**

---

## 📋 Descrição

Este é um projeto backend criado com **TypeScript**, **Fastify**, **Node.js**, **Prisma**, e **MongoDB**. O objetivo é aprender a integrar tecnologias modernas em um backend eficiente e robusto.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Fastify**
- **Prisma**
- **MongoDB**

---

## 🔧 Como Executar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/CauanLagrotta/devclientes.git
```

### 2. Entre na pasta devclientes
```bash
cd devclientes 
```

### 3. Entre na pasta backend
```bash
cd backend 
```

### 4. Instale as dependências
```bash
npm install
```

### 5. Crie um arquivo na raiz do backend e adicione o seguinte trecho
```bash
DATABASE_URL="mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority&appName=<app-name>"
```

Substitua:

- < username >: Seu nome de usuário do MongoDB.

- < password >: Sua senha do MongoDB.

- < cluster-url >: URL do cluster MongoDB.

- < database >: Nome do banco de dados.

- < app-name >: Nome do aplicativo.


### 6. Execute o projeto:
```bash
npm run dev
```

