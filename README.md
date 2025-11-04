# Modern Todo App - React & TypeScript

A sleek, modern, and feature-rich Todo application built with React, TypeScript, and powered by Preact/Signals for efficient state management. The entire application is styled with pure CSS, featuring a dark theme, custom form elements, and smooth transitions.

<img width="503" height="567" alt="screencapture-muhammaddev99-github-io-TodoApp-2025-11-05-00_48_32" src="https://github.com/user-attachments/assets/88b3955c-f007-4311-b79c-6051c7541733" />

## 🚀 Live Demo

**[Click here to try out the live application!](https://muhammaddev99.github.io/TodoApp/)**

---

 <!-- Replace this with the link to your screenshot -->

## ✨ Features

*   **Full CRUD Functionality**: Create, read, update, and delete your todos with ease.
*   **Reactive State Management**: Uses `@preact/signals-react` for a fast and intuitive state management experience.
*   **Persistent Storage**: Todos are automatically saved to the browser's Local Storage, so you never lose your tasks.
*   **Inline Editing**: Double-click or use the edit button to update a todo's content directly in the list.
*   **Task Filtering**: Dynamically filter tasks by "All", "In Progress", or "Completed" status.
*   **Modern Dark UI**: A visually appealing dark theme designed to be easy on the eyes.
*   **Custom Styling**: Includes custom-styled checkboxes, select dropdowns, and scrollbars for a cohesive look and feel.
*   **Remaining Task Count**: A live counter shows how many tasks are yet to be completed.
*   **Type-Safe**: Built with TypeScript for a robust and error-free development experience.

## 🚀 Technologies Used

*   **Frontend**: [React](https://reactjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **State Management**: [Preact/Signals](https://preactjs.com/guide/v10/signals/)
*   **Styling**: Pure CSS with modern features (Flexbox, custom properties)
*   **Build Tool**: Vite (inferred, standard for this setup)

## 📦 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (which includes npm) installed on your computer.

*   **npm**
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd your-repo-name
    ```
3.  **Install the dependencies:**
    ```sh
    npm install
    ```

### Running the Application

Once the dependencies are installed, you can run the development server:

```sh
npm run dev
```

This will start the Vite development server, and you can view the application by navigating to `http://localhost:5173/` (or the address shown in your terminal).

## 📁 Project Structure

The project is organized into a clean and maintainable structure:

```
src
├── assets
│   └── images          # Icons and images
├── components
│   ├── Footer
│   ├── TodoControls    # Component for adding and filtering todos
│   └── TodoItem        # Component for a single todo item
├── store
│   └── todos.ts        # State management logic with Signals
├── types
│   └── index.ts        # TypeScript type definitions
├── App.css
├── App.tsx             # Main application component
├── index.css           # Global styles
└── main.tsx            # Application entry point
```
