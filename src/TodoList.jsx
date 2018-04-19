import React, { Component } from "react";
import TodoItem from "./TodoItem";
import AddToDo from "./AddToDo";

class TodoList extends Component {
    // you don't have to use constructor or super if it's something simple
    // we are making a stateful component
    constructor(props) {
        super(props);
        this.state = {
            // if I want to populate the array, I need to declare name, id and completed for each object
            todos: [],
            id: 1,
            newTodo: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
    }

    handleChange(e) {
        console.log(e);
        this.setState({
            newTodo: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();

        const newTodo = {
            name: this.state.newTodo,
            id: this.state.id,
            completed: false
        };

        const newTodoArray = [...this.state.todos, newTodo];
        const newId = this.state.id + 1;
        const emptyTodo = "";

        this.setState({
            todos: newTodoArray,
            newTodo: emptyTodo,
            id: newId
        });
    }

    toggleTodo(e) {
        console.log(e.target.value);
        const newTodos = this.state.todos.map(todo => {
            if (todo.id == e.target.value) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({ todos: newTodos });
    }

    render() {
        return (
            <div>
                <ul className="ul-style">
                    {this.state.todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            // instead of using this, use shortcut "{...todo}"
                            id={todo.id}
                            name={todo.name}
                            completed={todo.completed}
                            toggleTodo={this.toggleTodo}
                        />
                    ))}
                </ul>
                <AddToDo
                    value={this.state.newTodo}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default TodoList;
