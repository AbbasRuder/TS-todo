import { Todo } from "../model/todo"

interface Props {
  todoItem: Todo
  handleDeleteTodo: (id: string) => void
  handleTodoCheckmark: (id: string) => void
}

export default function TodoItem({
  todoItem,
  handleDeleteTodo,
  handleTodoCheckmark,
}: Props) {
  return (
    <div className="todoItem">
      <p className={`todoItem__title ${todoItem.isDone && 'checkmark'}`}>{todoItem.title}</p>
      <div className="todoItem__actions">
        {todoItem.isDone ? (
          <button
            className="btn-checkmark"
            onClick={() => handleTodoCheckmark(todoItem.id)}
          >
            ✔️
          </button>
        ) : (
          <button
            className="btn-checkmark"
            onClick={() => handleTodoCheckmark(todoItem.id)}
          >
            {" "}
          </button>
        )}

        <button
          className="btn-delete"
          onClick={() => handleDeleteTodo(todoItem.id)}
        >
          ❌
        </button>
      </div>
    </div>
  )
}
