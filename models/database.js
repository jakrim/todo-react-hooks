const { Client } = require('pg');
const connectionString =
  process.env.DATABASE_URL || 'postgres://localhost:5432/todohooks';

const client = new Client(connectionString);
client
  .connect()
  .then(() => console.log('connected to Postgress'))
  .catch(err => console.log('connection error', err.stack));

client
  .query(
    'CREATE TABLE "todos"( id SERIAL PRIMARY KEY, text VARCHAR(255) NOT NULL, complete BOOLEAN)'
  )
  .then(result => console.log('result of query', result))
  .catch(err => console.log('err in query', err.stack))
  .then(() => client.end());

module.exports.client = client;
