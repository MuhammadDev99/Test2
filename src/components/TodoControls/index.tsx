import { todoText, addTodo, deleteAllTodos } from "../../store/todos"
import "./TodoControls.css"

export function TodoControls() {
    return (
        <div className="todosControls">
            <input
                value={todoText.value}
                onChange={(e) => {
                    todoText.value = e.target.value
                }}
                className="todosInput"
                placeholder="Todo..."
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        addTodo(todoText.value)
                    }
                }}
            />
            <button
                className="addTodoButton"
                onClick={() => {
                    addTodo(todoText.value)
                }}
            >
                Add
            </button>
            <button className="removeAllTodos" onClick={deleteAllTodos}>
                Remove All
            </button>
        </div>
    )
}
