import React from "react"
import Todo from "./Todo"
import Form from "./Form"
import "../styles/TodoList.css"
import useTodoState from "../hooks/useTodoState"

const TodoList = () => {
  const { todos, addTodo, removeTodo, checkTodo } = useTodoState([])
  const submit = (todo) => {
    addTodo(todo.title)
  }
  return (
    <div id="todolist">
      <h1>
        To-do List
        <span>Get things done, one item at a time.</span>
      </h1>
      <ul>
        {todos.length ? (
          todos.map((todoItem, index) => (
            <Todo
              key={todoItem.id}
              todo={todoItem}
              removeTodo={removeTodo}
              checkTodo={checkTodo}
            />
          ))
        ) : (
          <div className="empty-container">
            <i className="fas fa-stream empty"></i>
            <p>Your to-do list is empty.</p>
          </div>
        )}
      </ul>

      <Form submit={submit} />
    </div>
  )
}

export default TodoList
