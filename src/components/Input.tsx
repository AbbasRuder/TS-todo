import { useRef, useState } from "react"
import { Todo } from "../model/todo"

interface Props {
  setTodoList: React.Dispatch<React.SetStateAction<Todo[] | null>>
}

export default function Input({ setTodoList }: Props) {
  const [todoInput, setTodoInput] = useState<Todo>({ title: "", id: "", isDone: false })

  const inputRef = useRef<HTMLInputElement>(null)

  const handleCreateTodo = () => {
    if (todoInput.title.trim() !== "") {
      setTodoList((currentTodo) => [...(currentTodo || []), todoInput])
      setTodoInput({ title: "", id: "", isDone: false })
    }
    // -to `focus` on the input
    if(inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleInputOnChange = (input: string) => {
    setTodoInput({
      title: input,
      id: crypto.randomUUID(),
      isDone: false
    })
  }

  return (
    <div className="input-container">
      <input
        type="text"
        id="todo"
        placeholder="Enter your todo"
        className="input"
        ref={inputRef}
        value={todoInput?.title}
        onChange={(e) => handleInputOnChange(e.target.value)}
      />
      <button className="btn" onClick={handleCreateTodo}>Add</button>
    </div>
  )
}
