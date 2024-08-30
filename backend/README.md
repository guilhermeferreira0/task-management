# Backend Task Management

API robusta desenvolvida para gerenciar tarefas e usuários de forma eficiente. Ele oferece as seguintes funcionalidades principais:

## Funcionalidades

- CRUD de Tarefas: Permite a criação, leitura, atualização e exclusão de tarefas. Cada tarefa pode ter informações como título, descrição, data e status.
- Busca por Categoria: Facilita a filtragem de tarefas com base em categorias específicas, permitindo que os usuários visualizem rapidamente tarefas relacionadas a áreas de interesse ou projetos distintos.
- CRUD de Usuários: Gerencia a criação, leitura, atualização e exclusão de usuários.


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/guilhermeferreira0/task-management.git
```

Entre no diretório do backend do projeto

```bash
  cd task-management
  cd backend
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start:dev
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PORT`- Define a porta na qual o servidor backend irá escutar as requisições HTTP. 

`JWT_SECRET`- Esta variável armazena a chave secreta usada para assinar e verificar tokens JWT (JSON Web Tokens).

`MYSQL_DATABASE`- Define o nome do banco de dados MySQL que o backend utilizará para armazenar e gerenciar dados.

`MYSQL_USERNAME`- Especifica o nome de usuário utilizado para conectar-se ao banco de dados MySQL.

`MYSQL_PASSWORD`- Armazena a senha correspondente ao nome de usuário definido em MYSQL_USERNAME.

`MYSQL_HOST` - Define o endereço do servidor MySQL onde o banco de dados está hospedado. Pode ser um endereço IP, um nome de domínio ou localhost se o banco de dados estiver no mesmo servidor que o backend.


## Documentação das rotas de USUÁRIO

#### Registra um usuário

```http
  POST /api/user/register
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | **Obrigatório**. |
| `email` | `string` | **Obrigatório**. |
| `password` | `string` | **Obrigatório**. |

#### Login do usuário

```http
  POST /api/user/login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**.  |
| `password`      | `string` | **Obrigatório**. |

### Precisa estar autenticado para acessar as próximas rotas

#### Detalhes do usuário AUTENTICADO.

```http
  GET /api/user/details
```
##### Retorna as seguintes informações do usuário

| Parâmetro   | Tipo       | 
| :---------- | :--------- | 
| `email`      | `string` |
| `username`      | `string` |

#### Atualizar usuário AUTENTICADO

```http
  PUT /api/user/update
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` |   |
| `username`      | `string` |  |
| `password`      | `string` | |

#### Deletar usuário AUTENTICADO

```http
  DELETE /api/user/delete
```


## Documentação das rotas de Task
Precisa estar autenticado para acessar as rotas

#### Registrar uma nova task

```http
  POST /api/task/register
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `title` | `string` | **Obrigatório**. |
| `description` | `string` | **Obrigatório**. |
| `progress` | `string` | **Obrigatório**  ['pending', 'inProgress', 'delayed', 'completed']. |

#### Pegar todas as tasks do usuário AUTENTICADO

```http
  GET /api/task/
```

#### Pegar uma task do usuário AUTENTICADO.

```http
  GET /api/task/:id
```

#### Pegar uma task de acordo com o progresso.

```http
  POST /api/task/
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `progress` | `string` | **Obrigatório**  ['pending', 'inProgress', 'delayed', 'completed']. |

#### Atualizar a task do usuário AUTENTICADO

```http
  PUT /api/task/update/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` |   |
| `description`      | `string` |  |
| `progress`      | `string` | **Obrigatório**  ['pending', 'inProgress', 'delayed', 'completed']. |

#### Deletar task do usuário AUTENTICADO

```http
  DELETE /api/task/delete/:id
```


## Authenticação

Para acessar as rotas protegidas da API, é necessário estar autenticado. A autenticação é feita usando tokens JWT (JSON Web Tokens). Aqui está como você deve incluir o token JWT nas suas requisições:

### Obtendo um Token JWT
#### Maneiras de obter o token
- Registrar: Registre um novo usuário, utilizando a requisição POST para o endpoint register com suas credenciais (username, email e senha)
- Login: Envie uma requisição POST para o endpoint de login com suas credenciais (email e senha).

#### Resposta
- Resposta: Se as credenciais estiverem corretas, você receberá um token JWT no corpo da resposta.

### Incluindo o Token JWT nas Requisições
Para acessar qualquer rota protegida, você deve incluir o token JWT no cabeçalho da requisição como um Authorization Bearer token.

#### Formato do Cabeçalho:

- fetch('https://localhost:3000/api/', {
  method: 'GET',
  headers: {
    'authorization': 'seuTokenJWT'
  }
})
.then(response => response.json())
.then(data => console.log(data));

#### Detalhes Adicionais

Validade do Token: O token JWT tem uma validade específica após a qual você precisará realizar o login novamente para obter um novo token.

#### Erro de Autenticação 
Se o token JWT estiver ausente, inválido ou expirado, você receberá um código de status HTTP 401 (Unauthorized).
## Tecnologias e Ferramentas Utilizadas

Aqui está uma visão geral das principais tecnologias e ferramentas usadas neste projeto:

- **TypeScript**: Adiciona tipagem estática ao JavaScript e incrementa o intelisense, garantindo assim a qualidade do código e facilitando a manutenção.

- **Node.js**: Ambiente de execução JavaScript no servidor. Node.js permite a construção de aplicações escaláveis e de alta performance utilizando JavaScript no backend.

- **Express**: Framework para Node.js que facilita a criação de APIs e gerenciamento de rotas. Utilizado para estruturar e implementar a lógica do servidor de forma eficiente.

- **bcrypt**: Biblioteca para hashing de senhas. Utilizada para criptografar senhas de usuários antes de armazená-las no banco de dados, aumentando a segurança da aplicação.

- **Sequelize**: ORM (Object-Relational Mapper) para Node.js que facilita a interação com bancos de dados relacionais, como MySQL. Utilizado para definir modelos de dados e realizar operações no banco de dados de forma intuitiva.

- **MySQL**: Sistema de gerenciamento de banco de dados relacional. Utilizado como o banco de dados principal para armazenar e gerenciar as informações da aplicação.

- **Jest**: Framework de testes para JavaScript. Utilizado para escrever e executar testes, garantindo que o código funcione como esperado e ajudando a prevenir regressões.

- **JWT (JSON Web Token)**: Método para autenticação e autorização baseado em tokens. Utilizado para gerar e verificar tokens de acesso que protegem rotas e garantem que apenas usuários autenticados possam acessar funcionalidades específicas.

- **ESLint**: Ferramenta de linting para identificar e corrigir problemas no código JavaScript/TypeScript. Utilizada para manter o código limpo e consistente.

- **Prettier**: Formatador de código que garante uma formatação consistente em todo o projeto. Utilizado para formatar automaticamente o código de acordo com um estilo predefinido, melhorando a legibilidade e a manutenção.


## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```

