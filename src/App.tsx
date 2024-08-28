import { useState } from 'react'
import './App.css'


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput(''); // Réinitialise le champ d'entrée
    }
  };
  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h1>Todo list</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ajouter une tâche..."
      />
      <button onClick={addTodo}>Ajouter</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App























{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}