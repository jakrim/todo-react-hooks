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
    'CREATE TABLE todos(id SERTIAL PRIMARY KEY, text VARCHAR(140) not null, complete BOOLEAN'
  )
  .then(() =>
    client
      .end()
      .then(() => console.log('client has disconnected'))
      .catch(err => console.error('error during disconnection', err.stack))
  )
  .catch(err => console.log('err in create table query', err.stack));

module.exports.client = client;
