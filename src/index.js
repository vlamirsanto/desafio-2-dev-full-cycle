const express = require('express');
const mysql = require('mysql2/promise');
const faker = require('faker');

const app = express();

async function connection() {
  return await mysql.createConnection({
    host: 'desafio2_database',
    user: 'root',
    password: 'root',
    database: 'desafio2'
  });
};

async function create(database) {
  const query = 'INSERT INTO people(name) VALUES (?);';
  const values = [faker.name.findName()];

  return await database.query(query, values);
}

async function getAllNames(database) {
  return await database.query("SELECT name FROM people");
}

app.get('/', async (_, response) => {
  const database = await connection();
  const result = await create(database);

  if (!result) {
    response.send('Error');
  };

  const [names] = await getAllNames(database);

  let message = '<h1>Full Cycle Rocks!</h1>';
  message += names.map(({ name }) => `${name}<br />`).join('');

  response.send(message);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});