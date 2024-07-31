import { useState } from 'react';
import { useAddTodoMutation, useGetTodosQuery } from './redux/todoApi';
import { useGetUserByIdQuery, useGetUsersQuery } from './redux/usersApi';

function App() {
  const [text, setText] = useState('');
  const {data: todos} = useGetTodosQuery();
  const {data: users} = useGetUsersQuery();
  const [addTodo] = useAddTodoMutation();

  return (
    <div className="App">
      <input value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={() => addTodo(text)}>Add</button>
      {todos && todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
    </div>
  );
}

export default App;
