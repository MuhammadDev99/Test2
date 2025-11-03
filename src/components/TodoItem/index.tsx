import {
    editedTodoId,
    editedTodoText,
    updateTodoContent,
    setCompleted,
    deleteTodo,
} from "../../store/todos"
import type { Todo } from "../../types"

import closeIcon from "../../assets/images/close.png"
import editIcon from "../../assets/images/edit.png"
import checkMarkIcon from "../../assets/images/CheckMark.svg"
import "./TodoItem.css"

interface TodoItemProps {
    todo: Todo
}

export function TodoItem({ todo }: TodoItemProps) {
    const isEditing = editedTodoId.value === todo.id

    return (
        <div
            className={`todoItem ${isEditing ? "editing" : ""} ${
                todo.completed && !isEditing ? "completed" : ""
            }`}
        >
            {isEditing ? (
                ""
            ) : (
                <input
                    className="isCompletedCheckbox"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => {
                        setCompleted(todo.id, e.target.checked)
                    }}
                />
            )}

            {isEditing ? (
                <input
                    className="editContentInput"
                    value={editedTodoText.value}
                    onChange={(e) => {
                        editedTodoText.value = e.target.value
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            updateTodoContent(todo.id, editedTodoText.value)
                            editedTodoId.value = null
                        }
                    }}
                    autoFocus
                />
            ) : (
                <p className="todoContent">{todo.content}</p>
            )}
            {isEditing ? (
                <button
                    className="finishEditButton"
                    onClick={() => {
                        updateTodoContent(todo.id, editedTodoText.value)
                        editedTodoId.value = null
                    }}
                >
                    <img alt="Finish Edit" src={checkMarkIcon} />
                </button>
            ) : (
                <>
                    <button className="deleteTodo" onClick={() => deleteTodo(todo.id)}>
                        <img alt="Delete" src={closeIcon} />
                    </button>
                    <button
                        onClick={() => {
                            editedTodoText.value = todo.content
                            editedTodoId.value = todo.id
                        }}
                        className="editTodo"
                    >
                        <img alt="Edit" src={editIcon} />
                    </button>
                </>
            )}
        </div>
    )
}
