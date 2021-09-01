import React from 'react'
import TodoItem from './TodoItem'

class Todos extends React.Component {
    render() {

        const {todos, deleteTodo, selectSingleTodo} = this.props

        return(
            <div>
                {todos.map(todo => (
                    <TodoItem 
                    todo={todo} 
                    key={todo.item_id} 
                    deleteTodo={deleteTodo}
                    selectSingleTodo={selectSingleTodo}
                    />
                ))}
            </div>
        )
    }
}

export default Todos