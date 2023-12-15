import { useRef, useState } from "react"
import { Todo } from "../model/todo"

interface Props {
  setTodoList: React.Dispatch<React.SetStateAction<Todo[] | null>>
}

export default function Input({ setTodoList }: Props): JSX.Element {
  const [todoInput, setTodoInput] = useState<Todo>({ title: "", id: "" })

  const inputRef = useRef<HTMLInputElement>(null)

  const handleCreateTodo = () => {
    if (todoInput.title.trim() !== "") {
      setTodoList((currentTodo) => [...(currentTodo || []), todoInput])
      setTodoInput({ title: "", id: "" })
    }
    if(inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleInput = (value: string) => {
    setTodoInput({
      title: value,
      id: crypto.randomUUID()
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
        onChange={(e) => handleInput(e.target.value)}
      />
      <button className="btn" onClick={handleCreateTodo}>Add</button>
    </div>
  )
}
