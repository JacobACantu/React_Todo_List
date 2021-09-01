import React from 'react'

class TodoItem extends React.Component {
    render() {

        const {todo, deleteTodo, selectSingleTodo} = this.props

        const handleDelete = (e) => {
            deleteTodo(parseInt(e.target.id))
        }

        return(
            <div className="listItem">
                <h1 className="hover" onClick={() => selectSingleTodo(todo)} >{todo.task}</h1>
                <p>{todo.item_id}</p>
                <button className="btn hover" id={todo.item_id} onClick={handleDelete}>Delete</button>
            </div>
        )
    }
}

export default TodoItem