import React, { useState } from "react"
const Form = ({ submit }) => {
  const [newTodo, setnewTodo] = useState({
    id: null,
    title: "",
    done: false,
  })
  const handleChange = (e) => {
    setnewTodo({
      id: Math.random(),
      title: e.target.value,
      done: false,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    submit(newTodo)
    setnewTodo({
      id: null,
      title: "",
      done: false,
    })
  }
  return (
    <form name="newform" onSubmit={handleSubmit}>
      {/* <label htmlFor="newitem">Add to the list</label> */}
      <input
        type="text"
        name="newitem"
        id="newitem"
        onChange={handleChange}
        value={newTodo.title}
      />
      <button>Add Item</button>
    </form>
  )
}

export default Form
