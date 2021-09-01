// import React from 'react'
// import axios from 'axios'
// import Loading from './components/Loading'
// import Todos from './components/Todos'
// import SingleTodo from './components/Singletodo'
// import './App.css'



// class App extends React.Component {
//   state = {
//     loading: false,
//     todos: [],
//     singleTodo: null
//   }


//   async componentDidMount() {
//     this.setState({loading: true})
//     const res = await axios('http://localhost:5003/api/tasks/')
//     this.setState({loading: false, todos: res.data})
//   }


//   render() {
//     const {loading, todos, singleTodo} = this.state

//     const getTodo = async (id) => {
//       // set loading to true
//       this.setState({loading: true})
//       // make api call with proper id passed in
//       const res = await axios(`http://localhost:5003/api/tasks/${id}`)
//       // console.log(the actual todo item)
//       this.setState({singleTodo: res.data})
//       this.setState({loading: false})
//     }

//     const changeLoadingAndSingleTodo = () => {
//       this.setState({singleTodo: null})
//       this.setState({loading: false})
//     }


//     if(singleTodo) {
//       return <SingleTodo singleTodo={singleTodo} changeLoadingAndSingleTodo={changeLoadingAndSingleTodo}/>
//     } else if(loading) {
//       return <Loading />
//     } else {
//       return <Todos todos={todos} getTodo={getTodo}/>
//     }
//   }
// }

// export default App;

// import React, {useState, useEffect} from "react";
// import axios from 'axios'
// import './App.css'

// function App() {

//   const [todoItem, setTodoItem] = useState('')
//   const [taskList, setTaskList] = useState([])
  

//   useEffect(() => {
//     axios.get('http://localhost:5003/api/tasks').then((response) => {
//       setTaskList(response.data)
//     });
//   }, []); 

//   const submitTodo = () => {
//     axios.post("http://localhost:5003/api/tasks", {
//       todoItem: todoItem
//     }).then(() => {
//       setTaskList([...taskList, {taskList: taskList}])
//     })
//   }

//   return (
//     <div className = "App">
//     <h1> Todo List </h1>

//     <div className = "form" >
//       <label> Input Box </label>
//     <input 
//     type="text" 
//     name="inputBox" 
//     onChange={(e) => {
//       setTodoItem(e.target.value) 
//       }}
//       />
//      <button onClick={submitTodo}> Submit </button>
//     <label> Task List </label>
      

//        {taskList.map((val) => {
//           return <h1>TaskName: {val.task} </h1>
//        })}

    
//     </div>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Todos from './components/Todos'
import TodoInput from './components/TodoInput'
import SingleTodo from './components/SingleTodo'
import axios from 'axios'
import './App.css';



class App extends React.Component {

  state = {
    todos: [],
    singleTodo: null
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:5003/api/tasks/')
    this.setState({todos: res.data})
  }

  render() {
    const {todos, singleTodo} = this.state

    //get todos
    // const getTodo = async(id) => {
    //     const res = await axios.get(('http://localhost:5003/api/tasks'))
    //     this.setState({posts: res.data})
    // }

    // Add todo post
    const addTodo = async (obj) => {
      console.log(obj)
      const res = await axios.post(`http://localhost:5003/api/tasks/`, obj)
      console.log(res.data)
      this.setState({todos: [...todos, ...res.data ]})
    }

    // Delete todo
    const deleteTodo = (id) => {
      axios.delete(`http://localhost:5003/api/tasks/${id}`)
      this.setState({todos: todos.filter(todo => todo.item_id !== id)})
    }

    // selectSingleTodo
    const selectSingleTodo = (todo) => {
      this.setState({singleTodo: todo})
    }

    // Clear single todo
    const clearSingleTodo = () => {
      this.setState({singleTodo: null})
    }

    // Edit todo
    const editTodo = async (obj) => {
      const updatedTodos = todos.map(todo => {
        if(obj.item_id === todo.item_id) {
          todo.task = obj.task
        }
        return todo
      })
      this.setState({todos: updatedTodos})
      this.setState({singleTodo: null})

      let newTask = {
        task: obj.task
      }
      await axios.patch(`http://localhost:5003/api/tasks/${obj.item_id}`, newTask)
    }

    // Conditional rendering
    if(singleTodo) {
      return (
        <div className="container">
          <SingleTodo 
          singleTodo={singleTodo} 
          clearSingleTodo={clearSingleTodo}
          editTodo={editTodo}
          />
        </div>
      )
    }


    return(
      <div className="container">
        <h1 id="logo">Todo list in react</h1>
        <TodoInput addTodo={addTodo}/>
        <Todos 
        todos={todos} 
        deleteTodo={deleteTodo}
        selectSingleTodo={selectSingleTodo}
         />
      </div>
    )
  }
}

export default App;