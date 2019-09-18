var { get, insert } = require('../models');

module.exports = {
  getTodos: (req, res) => {
    get()
      .then(data => res.send(data.data))
      .catch(err => {
        console.log('Err in controller', err);
      });
  },

  postTodo: (req, res) => {
    let todo = req.body.todo;
    insert(todo)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(err => {
        console.log('Err in controller', err);
      });
  }
};
