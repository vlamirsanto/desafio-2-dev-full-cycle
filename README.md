# Desafio 2 - Dev Full Cycle

## Descrição

### Nginx com Node.js

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

```html
<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.
```

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

## Execução do desafio

Rodar o comando no terminal:

```sh
docker-compose up -d
```

- Será criado um container chamado `desafio2_database` com a porta 3306 exposta, utilizando a imagem mysql:5.7, um banco de dados chamado `desafio2` com uma tabela chamada `people`;
- Será criado um container chamado `desafio2_web` com a porta 8080 exposta, utilizando como base a imagem nginx:alpine;
- Será criado um container chamado `desafio2_app` utilizando como base a imagem node:alpine, com a aplicação desenvolvida em Node.js;
