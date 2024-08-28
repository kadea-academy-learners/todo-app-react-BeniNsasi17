import { useState } from 'react'
import './App.css'


function App() {
  const [todos, setTodos] = useState<string[]>([]);
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




















