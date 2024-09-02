
# FrontEnd Task Management

Este é o frontend do Task Management, desenvolvido para fornecer uma interface intuitiva e responsiva para gerenciamento de tarefas e usuários. O projeto é construído utilizando uma série de tecnologias modernas para garantir uma experiência de usuário fluida e uma base de código sustentável. Focado na experiência do usuário e na fluidez de renderização dos componentes

## Funcionalidades

- CRUD de Tarefas: Permite a criação, leitura, atualização e exclusão de tarefas. Cada tarefa pode ter informações como título, descrição, data e status.
- Busca por Categoria: Facilita a filtragem de tarefas com base em categorias específicas, permitindo que os usuários visualizem rapidamente tarefas relacionadas a áreas de interesse ou projetos distintos.
- CRUD de Usuários: Gerencia a criação, leitura, atualização e exclusão de usuários.


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/guilhermeferreira0/task-management.git
```

Entre no diretório do frontend do projeto

```bash
  cd task-management
  cd frontend
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`REACT_APP_API_BASEURL`- Defina a url na qual o frontend irá mandar requisições HTTP, na qual o backend está vinculado ex: `http://localhost:3000/api`. 




## Tecnologias e Ferramentas Utilizadas

Aqui está uma visão geral das principais tecnologias e ferramentas usadas neste projeto:

- **React**: Biblioteca JavaScript para construir interfaces de usuário. Utilizada para criar componentes reutilizáveis e gerenciar o estado da aplicação de forma eficiente.

- **TypeScript**: Adiciona tipagem estática ao JavaScript e incrementa o intelisense, garantindo assim a qualidade do código e facilitando a manutenção.

- **ESLint**: Ferramenta de linting para identificar e corrigir problemas no código JavaScript/TypeScript. Utilizada para manter o código limpo e consistente conforme as regras definidas.

- **Prettier**: Formatador de código que garante uma formatação consistente em todo o projeto. Utilizado para formatar automaticamente o código de acordo com um estilo predefinido, melhorando a legibilidade e a manutenção.

- **Tailwind CSS**: Framework de utilitários CSS que facilita a criação de designs personalizados e responsivos. Utilizado para rapidez e agilidade.

- **React Icons**: Biblioteca de ícones para React, oferecendo uma coleção de ícones populares e amplamente usados. Utilizada para incorporar ícones em componentes de forma fácil e consistente.

- **Axios**: Biblioteca para fazer requisições HTTP. Utilizada para se comunicar com a API backend, facilitando a realização de operações como GET, POST, PUT e DELETE.

- **React Hook Form**: Biblioteca para gerenciamento de formulários em aplicações React. Foca em minimizar a re-renderização e melhorar o desempenho ao lidar com formulários complexos.

- **React Toastify**: Usado para exibir notificações toast (pequenas mensagens emergentes) em aplicações React. É altamente configurável e permite uma fácil personalização das mensagens de alerta e feedback para o usuário.

## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```

