import React, {Fragment} from 'react'

class EditTodo extends React.Component {
    state = {
        text: ''
    }

    render() {

        const {text} = this.state
        const {singleTodo, editTodo} = this.props

        const handleChange = (e) => {
            this.setState({text: e.target.value})
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            const updatedTodo = {
                task: text,
                item_id: parseInt(e.target.id)
            }
            editTodo(updatedTodo)
        }

        return(
            <Fragment>
                <h1 id="logo">Edit Todo</h1>
                <form onSubmit={handleSubmit} id={singleTodo.item_id}>
                    <input className="label" type="text" value={text} onChange={handleChange}/>
                    <input type="submit" className="btn hover"/>
                </form>
            </Fragment>
        )
    }
}

export default EditTodo