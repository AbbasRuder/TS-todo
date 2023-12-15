import { Todo } from "../model/todo"

interface Props {
  todoItem: Todo,
  handleDeleteTodo: (id: string) => void
}

export default function TodoItem({ todoItem, handleDeleteTodo  }: Props) {

  return (
    <div className="todoItem">
      <p className={`todoItem__title`}>{todoItem.title}</p>
      <div className="todoItem__actions">
        <button className="btn-checkmark">

        </button>
        <button className="btn-delete" onClick={() => handleDeleteTodo(todoItem.id)}>
          ❌
        </button>
      </div>
    </div>
  )
}
