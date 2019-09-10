import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form>
      <input
        type='text'
        className='input'
        value={value}
        placeholder='Add Todo...'
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default TodoForm;
