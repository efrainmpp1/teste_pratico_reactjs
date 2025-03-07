## 📝 **Teste Prático de Frontend**

### 📌 **Introdução**

Este projeto é um **teste prático de Frontend** desenvolvido em **ReactJS com Vite**. Ele contém exercícios de lógica de programação aplicados à interação com uma página web, permitindo que os usuários realizem diferentes operações de processamento de dados por meio de uma interface intuitiva.

Os exercícios implementados são:

1. **Caixa Eletrônico** - Calcula a menor quantidade de cédulas necessárias para um saque.
2. **Frequência de Letras** - Identifica as letras mais frequentes em uma string, ignorando diferenças entre maiúsculas, minúsculas e acentos.

---

### 🚀 **Como Rodar o Projeto**

Siga os passos abaixo para executar o projeto em sua máquina:

1️⃣ **Clone o repositório**  
Se ainda não tiver o repositório localmente, execute o comando:

```bash
git clone https://github.com/efrainmpp1/teste_pratico_reactjs.git
```

2️⃣ **Acesse a pasta do projeto**

```bash
cd teste_pratico_reactjs
```

3️⃣ **Instale as dependências**  
O projeto utiliza **Yarn** para gerenciar pacotes. Para instalar as dependências, rode:

```bash
yarn
```

4️⃣ **Execute o servidor de desenvolvimento**  
Após instalar as dependências, inicie o projeto com:

```bash
yarn dev
```

Esse comando iniciará um servidor local e exibirá no terminal a URL onde o projeto pode ser acessado (`http://localhost:3000/`).

---

### 🏗 **Estrutura do Projeto**

A estrutura do projeto segue uma organização modular para melhor manutenção e escalabilidade:

```
📂 teste_pratico_reactjs
│── 📂 src
│   │── 📂 Screens         # Páginas principais da aplicação
│   │── AppRoutes.jsx      # Componente principal da aplicação
│   │── main.jsx           # Ponto de entrada do React
│── 📜 package.json        # Configuração do projeto e dependências
│── 📜 README.md           # Documentação do projeto
│── 📜 vite.config.js      # Configurações do Vite
```

---

### 📌 **Funcionalidades dos Exercícios**

#### 📌 **1. Caixa Eletrônico**

- O usuário insere um valor inteiro para saque.
- O sistema calcula e exibe a menor quantidade de cédulas disponíveis (`20, 10, 5 e 1`).
- O resultado é exibido dinamicamente na interface.

#### 📌 **2. Frequência de Letras**

- O usuário insere um texto de até **1000 caracteres**.
- O sistema ignora espaços, caracteres especiais e acentos, analisando apenas **letras de A a Z**.
- O resultado exibe a frequência de cada letra em **ordem decrescente**, com a porcentagem calculada.

---

### 🛠 **Tecnologias Utilizadas**

- **ReactJS** → Biblioteca para criação da interface do usuário.
- **Vite** → Ferramenta de build otimizada para desenvolvimento rápido.
- **React Router** → Gerenciamento de navegação entre páginas.
- **Yarn** → Gerenciador de pacotes para instalar e rodar dependências.
- **CSS** → Estilização da interface.

---

### 📌 **Navegação no Projeto**

Ao rodar o projeto com o comando:

```bash
yarn dev
```

O navegador abrirá automaticamente a **Home Page** do aplicativo.

#### 🏠 **Home Page**

Na página inicial, o usuário verá dois botões que direcionam para os exercícios disponíveis:

- **Exercício 1 - Caixa Eletrônico**
- **Exercício 2 - Identificar a(s) Letra(s) Mais Frequente(s)**

Cada botão leva o usuário para uma página específica onde poderá interagir com o respectivo exercício.

---

#### 🔢 **Navegação entre as páginas**

Cada exercício possui um botão de **voltar para a página inicial**, localizado no final da tela. Assim, o usuário pode retornar à Home Page e escolher outro exercício quando desejar.

A estrutura de navegação segue o seguinte fluxo:

1. **Home Page (`/`)** → Possui dois botões para acessar os exercícios.
2. **Página do Exercício 1 (`/exercise1`)** → Contém o exercício do **Caixa Eletrônico** e um botão para voltar à Home Page.
3. **Página do Exercício 2 (`/exercise2`)** → Contém o exercício de **Frequência de Letras** e um botão para voltar à Home Page.

Caso o usuário acesse um **caminho inválido**, ele pode simplesmente voltar para a página inicial para navegar novamente.

---

#### 🗺 **Resumo da Estrutura de Navegação**

| Página              | Caminho      | Descrição                                             |
| ------------------- | ------------ | ----------------------------------------------------- |
| **Home Page**       | `/`          | Exibe os botões para acessar os exercícios.           |
| **Exercício 1**     | `/exercise1` | Página do Caixa Eletrônico.                           |
| **Exercício 2**     | `/exercise2` | Página para analisar frequência de letras.            |
| **Botão de Voltar** | 🔙           | Presente em cada exercício para retornar à Home Page. |

---

### 💡 **Melhorias Futuras**

- Responsividade aprimorada para dispositivos móveis.
- Animações e transições para melhorar a experiência do usuário.
- Testes unitários para garantir a confiabilidade do código.
