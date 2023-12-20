import { useState } from "react"
import "./App.css"
import Input from "./components/Input"
import TodoItem from "./components/TodoItem"
import { Todo } from "./model/todo"

function App() {
  const [todoList, setTodoList] = useState<Todo[] | null>(null)

  const handleDeleteTodo = (id: string) => {
    const filteredTodos = todoList?.filter((item) => item.id !== id)
    filteredTodos && setTodoList(filteredTodos)
  }

  const handleTodoCheckmark = (id: string) => {
    if (todoList) {
      const updatedTodos = todoList?.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone }
        }

        return item
      })

      setTodoList(updatedTodos)
    }
  }

  return (
    <>
      <h1>Todo App</h1>
      <Input setTodoList={setTodoList} />

      <div className="todo-container">
        {todoList &&
          todoList.map((item) => {
            return (
              <TodoItem
                key={item.id}
                todoItem={item}
                handleDeleteTodo={handleDeleteTodo}
                handleTodoCheckmark={handleTodoCheckmark}
              />
            )
          })}
      </div>
    </>
  )
}

export default App
