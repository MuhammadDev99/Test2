import { signal } from "@preact/signals-react"
import type { Todo } from "../types" // Import the type
// Import the type

const TODO_LOCAL_STORAGE_KEY = "Todos"

// --- Helper function to get initial data ---
function getTodosFromLocalStorage(): Todo[] {
    const value = localStorage.getItem(TODO_LOCAL_STORAGE_KEY)
    return !value ? [] : JSON.parse(value)
}

// --- State management Signals ---
export const todos = signal<Todo[]>(getTodosFromLocalStorage())
export const todoText = signal<string>("")
export const editedTodoId = signal<number | null>(null)
export const editedTodoText = signal<string>("")

// --- State update functions ---
export function addTodo(todoContent: string) {
    if (!todoContent.trim()) return
    const newTodo: Todo = { content: todoContent, id: Date.now(), completed: false }
    todos.value = [...todos.value, newTodo]
    todoText.value = "" // Clear input after adding
}

export function deleteTodo(todoId: number) {
    todos.value = todos.value.filter((x) => x.id !== todoId)
}

export function updateTodoContent(todoId: number, newContent: string) {
    if (!newContent.trim()) {
        deleteTodo(todoId)
        return
    }
    todos.value = todos.value.map((todo) =>
        todo.id === todoId ? { ...todo, content: newContent } : todo
    )
}

export function setCompleted(todoId: number, completed: boolean) {
    todos.value = todos.value.map((todo) =>
        todo.id === todoId ? { ...todo, completed: completed } : todo
    )
}

export function deleteAllTodos() {
    todos.value = []
}
