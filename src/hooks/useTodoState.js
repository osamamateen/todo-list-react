import { v4 as uuid } from "uuid"
import useLocalStorageState from "./useLocalStorageState"
const useTodoState = (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos)
  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([...todos, { id: uuid(), title: newTodoText, completed: false }])
    },
    removeTodo: (t) => {
      const todoId = t.id
      //filter out removed todo
      const updatedTodos = todos.filter((todo) => todo.id !== todoId)
      //call setTodos with new todos array
      setTodos(updatedTodos)
    },
    toggleTodo: (todoId) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
      setTodos(updatedTodos)
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, title: newTask } : todo
      )
      setTodos(updatedTodos)
    },
    checkTodo: (todo) => {
      const updatedTodos = todos.map((t) =>
        t.id === todo.id ? { ...t, done: !todo.done } : t
      )
      setTodos(updatedTodos)
    },
  }
}

export default useTodoState
