import React from 'react'
//functional component

const Todos = (props) => {
    const {todos, deleteTodo} = props
    const todoList = todos.map (todo =>{
        return (

        <div className="collection-item todo-divs" key = {todo.id}>
            <span>{todo.content}</span>
          
                <button className="deleteBtn waves-effect waves-light btn-small " onClick = {() => {deleteTodo(todo.id)}}>Delete</button>
        
        </div>
    )
    })

return ( //to output todo-list
    <div className="todos collection">
        {todoList}
    </div>
)
}

export default Todos