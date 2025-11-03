import "./App.css"
import { useEffect } from "react"
import { TodoControls } from "./components/TodoControls"
import { TodoItem } from "./components/TodoItem"
import { Footer } from "./components/Footer"
import { todos, editedTodoId, editedTodoText, updateTodoContent } from "./store/todos"

const TODO_LOCAL_STORAGE_KEY = "Todos"

function App() {
    // Effect for syncing todos to localStorage
    useEffect(() => {
        localStorage.setItem(TODO_LOCAL_STORAGE_KEY, JSON.stringify(todos.value))
    }, [todos.value])

    // Effect to handle clicks outside the editing input
    useEffect(() => {
        if (editedTodoId.value === null) return

        const handleOutsideClick = (e: MouseEvent) => {
            const editingItem = document.querySelector(".todoItem.editing")
            if (editingItem && !editingItem.contains(e.target as Node)) {
                updateTodoContent(editedTodoId.value!, editedTodoText.value)
                editedTodoId.value = null
            }
        }
        document.addEventListener("mousedown", handleOutsideClick)
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
        }
    }, [editedTodoId.value])

    return (
        <>
            <div className="todos">
                <TodoControls />
                <div className="todosItems">
                    {todos.value.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App
