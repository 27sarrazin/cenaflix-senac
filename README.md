
# 🎬 Cenaflix

Projeto web full-stack para cadastro, listagem e análise de filmes. Desenvolvido com **Spring Boot**, **HTML/CSS**, **jQuery** e arquitetura **RESTful**.

---

## 🚀 Funcionalidades

- ✅ Cadastro de filmes
- ✅ Listagem de filmes
- ✅ Edição e exclusão de filmes
- ✅ Cadastro de análises (nota e comentário)
- ✅ Listagem de análises por filme

---

## 🛠️ Tecnologias utilizadas

### Backend (Java):
- Spring Boot
- Spring Web
- Spring Data JPA
- H2 (ou outro banco de dados relacional)
- Maven

### Frontend:
- HTML5 + CSS3
- jQuery 3.6
- Bootstrap 5 (opcional)

---

## 🗂️ Estrutura do Projeto

```

projetocenaflix/
│
├── src/main/java/com/cenaflix/projetocenaflix/
│   ├── model/
│   │   ├── FilmeEntity.java
│   │   └── AnaliseEntity.java
│   ├── restController/
│   │   ├── FilmeRestController.java
│   │   └── AnaliseRestController.java
│   └── ProjetoCenaflixApplication.java
│
├── src/main/resources/
│   └── application.properties
│
├── frontend/
│   ├── cadastro.html
│   ├── listarFilmes.html
│   ├── avaliar.html
│   └── js/
│       ├── cadastro.js
│       └── avaliar.js
│
└── pom.xml

````

---

## ▶️ Como rodar o projeto

### Pré-requisitos:
- Java 17 ou superior
- Maven
- IDE (como NetBeans, IntelliJ ou VS Code)
- Navegador moderno (para acessar o frontend)

### 1. Clonar o repositório

```bash
git clone https://github.com/seuusuario/cenaflix.git
cd cenaflix
````

### 2. Rodar a aplicação Spring Boot

```bash
./mvnw spring-boot:run
```

Ou pela sua IDE, execute a classe:

```
ProjetoCenaflixApplication.java
```

O backend estará disponível em:

```
http://localhost:8080/
```

### 3. Abrir o frontend

Abra o arquivo `cadastro.html` ou `listarFilmes.html` no navegador (via `Live Server` ou diretamente clicando).

---

## 📡 Endpoints da API REST

### 🎬 Filmes

| Método | URL                           | Descrição              |
| ------ | ----------------------------- | ---------------------- |
| GET    | `/api/filmes/listarFilmes`    | Listar todos os filmes |
| GET    | `/api/filmes/{id}`            | Buscar filme por ID    |
| POST   | `/api/filmes/cadastrar-filme` | Cadastrar novo filme   |
| PUT    | `/api/filmes/{id}`            | Atualizar filme por ID |
| DELETE | `/api/filmes/{id}`            | Remover filme por ID   |

### 📝 Análises

| Método | URL                                       | Descrição                       |
| ------ | ----------------------------------------- | ------------------------------- |
| GET    | `/api/analises/listaDeAnalises/{filmeId}` | Listar análises de um filme     |
| POST   | `/api/analises/filme/{filmeId}`           | Cadastrar análise para um filme |

---

## 💡 Observações

* Todos os endpoints estão habilitados para requisições CORS.
* A comunicação entre frontend e backend ocorre via `fetch()` ou `$.ajax()` com JSON.
* O projeto ainda pode ser expandido com autenticação (Spring Security) e persistência com banco real (MySQL/PostgreSQL).

---

## 🧑‍💻 Autora

**Rosilane Sarrazin**

Desenvolvedora full-stack em formação. Apaixonada por tecnologia, cinema e educação.

---

## 📃 Licença

Este projeto está licenciado sob a licença MIT.

```

---

Se quiser, posso:
- Criar a versão em inglês,
- Adicionar prints das telas ao `README`,
- Gerar um arquivo pronto `.md` para você colar direto no GitHub.

Só me avisar 😊
```
