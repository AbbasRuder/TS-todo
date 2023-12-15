import { useState } from "react"
import "./App.css"
import Input from "./components/Input"
import TodoItem from "./components/todoItem"
import { Todo } from "./model/todo"

function App() {
  const [todoList, setTodoList] = useState<Todo[] | null>(null)

  const handleDeleteTodo = (id: string) => {
    const filteredTodos = todoList?.filter(item => item.id !== id)
    filteredTodos && setTodoList(filteredTodos)
  }

  return (
    <>
      <h1>Todo App</h1>
      <Input setTodoList={setTodoList} />

      <div className="todo-container">
        {todoList &&
          todoList.map((item) => {
            return <TodoItem  todoItem={item} handleDeleteTodo={handleDeleteTodo} key={item.id} />
          })}
      </div>
    </>
  )
}

export default App
