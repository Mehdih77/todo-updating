export default function TodoTable({ todos, editRow, removeTodo}) {

    return ( 
    <> 
    <table className="table table-striped table-hover mt-4">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
            </tr>
        </thead>
        <tbody>
            {todos.length > 0 ? todos.map(todo => (
                <tr key={todo.id}>
                <th scope="row">{todo.id}</th>
                <td>{todo.firstName}</td>
                <td>{todo.lastName}</td>
                <td>
                <button onClick={() => editRow(todo)} className="btn btn-primary mx-1">Edit</button>
                </td>
                <td>
                <button onClick={() => removeTodo(todo.id)} className="btn btn-danger">Delete</button>
                </td>
                </tr>
            )) : 
            <th scope="row" colspan="3">No Todo</th>
            }
        </tbody>
    </table> 
    </>
    )
}