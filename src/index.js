const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'desafio2_database',
  user: 'root',
  password: 'root',
  database: 'desafio2'
});

app.get('/', (_, response) => {
  connection.query("INSERT INTO people (name) values ('Vlamir Santo')")
  connection.end();

  response.send('<h1>Full Cycle Rocks!</h1> - Lista de nomes cadastrada no banco de dados.');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});