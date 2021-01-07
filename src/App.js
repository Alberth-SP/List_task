import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import { todos } from './todos.json';
import TodoForm from './components/todoForm';
console.log(todos);


class App extends Component {

  constructor(){
    super();
    this.state = {
      todos: todos
    }
    //this.removeTodo = this.removeTodo.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]

    })
  }

  removeTodo(index){
    //console.log(index);
    if (window.confirm('Are you sure you want to delete it?')){
      this.setState({
        todos: this.state.todos.filter((e,i) => {
          return i !== index;
        })
      })

    }
    

  }
  render() {

    const its = this.state.todos.map((todo, idx) => {
      return (
        <div className="col-md-4" key={idx} >
          <div className="card mt-4">
            <div className="card-header">
              <h3> { todo.title }  </h3>
              <span className="badge badge-pill badge-danger ml-2">
                { todo.priority }
              </span>
              
            </div>
            <div className="card-body" >
              <p> { todo.description } </p>
              <p> { todo.responsable } </p>
              
            </div>
            <div className="card-footer">
              <button className="btn btn-danger"
               onClick={this.removeTodo.bind(this, idx)}>
                 Delete

              </button>
            </div>

            
          </div>

        </div>
       
      )
    
    })
  
    return (
      <div className="App">
        <Navigation titulo = "Tasks"  ntodos = { this.state.todos.length }/>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo} />
            </div>
            <div className="col-md-9">
              <div className="row">
                { its }

              </div>

            </div>
            
           
          </div>
        </div>
        

        
        
        
          
      </div>
    );
  }
}

export default App;
