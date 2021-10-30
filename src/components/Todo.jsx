import React from "react"

const Todo = ({ todo, removeTodo, checkTodo }) => {
  const doneClass = todo.done ? `fas fa-check-circle` : `far fa-check-circle`
  const strikeThroughClass = todo.done ? "completed label" : "lable"
  return (
    <li>
      <span className={strikeThroughClass}>{todo.title}</span>
      <div className="actions">
        <button className="btn-picto" type="button">
          <i className={doneClass} onClick={() => checkTodo(todo)}></i>
        </button>
        <button
          className="btn-picto"
          type="button"
          onClick={() => removeTodo(todo)}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </li>
  )
}

export default Todo
