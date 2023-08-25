import React, { Component } from "react";
import "./todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.todoListItems = [];
    this.state = {
      items: "",
    };
  }

  newItems = (event) => {
    this.setState({
      items: event.target.value,
    });
  };

  addList = () => {
    const btn = document.querySelector('.btn-add');
    const load = document.querySelector('.load')
    load.classList.add('roll')
    setTimeout(() => {
        load.classList.remove('roll')
        this.todoListItems.push(this.state.items);
        this.setState({
            items: "",
          });
    },3000)
   
  };

  delItems = (index) => {
    this.setState({
      items: "",
    });
    this.todoListItems.splice(index, 1);
  };

  render() {
    const date = new Date()
    return (
      <div>
        <h1 id="header">Todo App</h1>


        <input value={this.state.items} onChange={this.newItems} />
        <p className="load center"></p>
        <button className="btn-add" onClick={this.addList}>Add</button>

       

        <div>
          {this.todoListItems.map((x, index) => (
            <p key={index}>
              {x} {date.toLocaleTimeString()} <button className="btn-del" onClick={() => this.delItems(index)}>Del</button>
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default Todo;
