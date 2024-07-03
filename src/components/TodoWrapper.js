import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import { v4 as uuidv4 } from "uuid";
uuidv4();


export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id:uuidv4(), task: todo, completed: false, isEditing: false}])
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id == id ? {...todo, completed: !todo.completed} : todo))
        console.log(todos)
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id != id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id == id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id == id ? {...todos, task, isEditing:!todo.isEditing} : todo))
    }

    return (
        <div className="TodoWrapper">
            <h1>Lista de Tarefas</h1>
            <TodoForm addTodo={addTodo}/>
            <div className="todo-list">
                {todos.map((todo, index) => (
                    todo.isEditing ? (
                        <EditTodoForm editTodo={editTask} task={todo}/>
                    ) : (
                        <Todo task={todo} index={index} 
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}/>
                    )   
                ))}
            </div>
            {todos.length > 0 && <p className="complete-instructions">Clique numa tarefa para marcá-la como completa!</p>}
        </div>
    )
}