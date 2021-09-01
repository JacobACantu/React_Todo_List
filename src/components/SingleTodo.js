import React, {Fragment} from 'react'
import EditTodo from './EditTodo'

class SingleTodo extends React.Component {

    state = {
        edit: false
    }
    
    
    render() {

        const {edit} = this.state
        const {singleTodo, clearSingleTodo, editTodo} = this.props
        

        const handleClearSingleTodo = () => {
            clearSingleTodo()
        }

        const handleEditStateChange = () => {
            this.setState({edit: true})
        }
        

        

        return (
            <Fragment>
                <h1 id="logo">Single todo component</h1>
                <h1>{singleTodo.task}</h1>
                <p>{singleTodo.item_id}</p>
                <button className="btn hover" onClick={handleClearSingleTodo}>Back</button>
                <button className="btn hover edit" onClick={handleEditStateChange}>Edit</button>
                {edit && <EditTodo singleTodo={singleTodo} editTodo={editTodo} />}        
            </Fragment>
        )
    }
}

export default SingleTodo