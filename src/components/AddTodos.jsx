import { useState } from "react"

export default function AddTodos({addTodo}) {

    const initialTodoState = {
        id: null,
        firstName: "",
        lastName: ""
    };
    const [newTodo, setNewTodo] = useState(initialTodoState)

    const handleChangeInputs = (e) => {
        setNewTodo({
            ...newTodo,
            [e.target.name] : e.target.value
        })
    }

    const addNewTodo = (e) => {
        e.preventDefault();
        if (!newTodo.firstName || !newTodo.lastName) return
        addTodo(newTodo)
        setNewTodo({
            id: null,
            firstName: "",
            lastName: ""
        })
    }

    return (
        <form onSubmit={addNewTodo} className='mb-4'>
            <input className="form-control form-control-lg" type="text"
             placeholder="FirstName..." value={newTodo.firstName} name='firstName' onChange={handleChangeInputs} />
            <input className="form-control form-control-lg my-2" type="text"
             placeholder="LastName..." value={newTodo.lastName} name='lastName' onChange={handleChangeInputs} />
             <button className="btn btn-primary btn-lg w-100">
             Add Todo
             </button>
        </form>
    )
}
