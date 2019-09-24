import db from '../../db/index.js';
// Model connects to db
module.exports = {
  get: (req, res) => {
    // Select all Todos from Table
    db.query('SELECT * FROM todos')
      .then(result => res.sendStatus(200).send(result))
      .catch(err => console.log('err in query', err.stack))
      .then(() => client.end());
  },

  // Add a Todo to Table
  insert:
    (todo,
    (req, res) => {
      db.query('INSERT INTO todos (text, complete) VALUES (?, ?)', [
        todo.text,
        todo.isCompleted
      ])
        .then(result => res.sendStatus(201))
        .catch(err => console.log('err in query', err.stack))
        .then(() => client.end());
    })
};
