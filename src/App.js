import { useState } from 'react';
import AddTodos from './components/AddTodos.jsx';
import TodoTable from './components/TodoTable';
import UpdateTodo from './components/UpdateTodo.jsx';

function App() {

  const defaultData = [
    {id: 1, firstName: "Mark", lastName: "Otto"},
    {id: 2, firstName: "Jacob", lastName: "Thornton"},
    {id: 3, firstName: "Larry the Bird", lastName: "Larry the Bird"},
  ];

  //! Set State
  const [todos, setTodos] = useState(defaultData)
  // for editRow part
  const initialTodoState = {
    id: null,
    firstName: "",
    lastName: ""
  };
  const [currentTodos, setCurrentTodos] = useState(initialTodoState);
  const [editing, setEditing] = useState(false);


  const addTodo = (newTodo) => {
    newTodo.id = (Math.random() * 100).toFixed(0)
    setTodos([...todos,newTodo])
  };
  
  const removeTodo = (id) => {
    setEditing(false);
    setTodos(todos.filter(todo => todo.id !== id))
  };
  const editRow = (editTodo) => {
    setEditing(true);

    setCurrentTodos({id: editRow.id, firstName: editTodo.firstName, lastName: editTodo.lastName})
  };

  const updateTodo = (id, updatedTodo) => {
    setEditing(false);

    setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)))
  };

  return (
    <div className="container app-content my-5">
    {editing ? 
    <UpdateTodo 
      setEditing={setEditing}
      updateTodo={updateTodo}
      currentTodos={currentTodos}
    /> 
    : 
    <AddTodos addTodo={addTodo} />}
      <TodoTable todos={todos} editRow={editRow} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
