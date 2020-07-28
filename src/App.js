import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'



//CONTAINER COMPONENT
class App extends Component { 
  
      state = {
      todos : [
          {id:1, content: 'buy wine'},
          {id:2, content: 'buy beer'},
          {id:3, content: 'sleep'},
          {id:4, content: 'repeat'}

        
       ]
    } 

    addTodo = (todo) =>{
        todo.id = Math.random();
        let todos = [...this.state.todos, todo]; //new array; copy of array of todos from abbove array and ad new todo to it
        this.setState({
            todos: todos //new todos property is equal to new array value
        });
     }
    

    deleteTodo = (id) => {//exclude with this id
        console.log (id)
        let todos =this.state.todos.filter (todo =>{
            return todo.id !==id
        });
        this.setState ({
            todos:todos
        })
    }

    render(){
        return (
            <div className="todoApp container">
            <h1 className="center pink-text">Todo's</h1>
            <AddTodo addTodo ={this.addTodo} />
            <Todos deleteTodo = {this.deleteTodo} todos = {this.state.todos} />
            
        </div>
        )
    }
}

export default App;