import { useEffect, useState } from "react"

export default function UpdateTodo({setEditing,updateTodo,currentTodos}) {

    const [todos, setTodos] = useState(currentTodos);

    useEffect(() => {
        setTodos(currentTodos);
    }, [currentTodos])

    const handleChangeInputs = (e) => {
        setTodos({
            ...todos,
            [e.target.name] : e.target.value
        })
    }

    const handleUpdateTodo = (e) => {
        e.preventDefault();
        updateTodo(todos.id, todos)
    }

    return (
        <form onSubmit={handleUpdateTodo} className='mb-4'>
            <input className="form-control form-control-lg" type="text"
             placeholder="FirstName..." value={todos.firstName} name='firstName' onChange={handleChangeInputs} />
            <input className="form-control form-control-lg my-2" type="text"
             placeholder="LastName..." value={todos.lastName} name='lastName' onChange={handleChangeInputs} />
             <button className="btn btn-primary btn-lg w-100">
             Update Todo
             </button>
             <button onClick={() => setEditing(false)} className="btn btn-secondary btn-lg w-100 my-1">
             Cancel
             </button>
        </form>
    )
}
