import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClock() {
        toggleTodo(todo.id)
    }

    return (
    <div>
        <label>
            <input type="checkbox" 
            checked={todo.complete} 
            onChange={handleTodoClock} 
            />
            {todo.name}
        </label>
    </div>
  )
}
