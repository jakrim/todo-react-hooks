import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoForm.jsx';
import Todo from './components/Todo.jsx';
import './App.css';

import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false
    }
  ]);

  // getTodos = () => {

  // }

  // const postTodo = todo => {

  // };

  const addTodo = text => {
    // console.log(text);
    const newTodos = [...todos, { text }];
    setTodos(newTodos);

    // axios
    //   .post('/', { text })
    //   .then(() => {
    //     console.log(text);
    //   })
    //   .catch(err => {
    //     console.log('err in posting todo', err);
    //   });
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
