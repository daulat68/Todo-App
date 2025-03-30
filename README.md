# Todo App

A simple and responsive Todo App built with React that allows users to add, edit, delete, and mark tasks as completed. The app also utilizes local storage to persist tasks across page reloads.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Toggle visibility of completed tasks
- Tasks are saved in local storage for persistence

## Technologies Used

- React.js
- Tailwind CSS
- React Icons
- UUID for unique task IDs

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/daulat68/Todo-App.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Todo-App
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Enter a task in the input field and click the "Save" button to add it to the list.
2. Click the edit button (✏️) to modify an existing task.
3. Click the delete button (🗑️) to remove a task.
4. Check/uncheck the checkbox to mark a task as completed.
5. Toggle "Show Finished" to display/hide completed tasks.


## Local Storage Implementation

The application saves todos to `localStorage` and retrieves them when the page reloads.



