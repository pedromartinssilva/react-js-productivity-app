import React from "react";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div
        className="Todo">
            <p onClick={()=>toggleComplete(task.id)} className={task.completed ? "completedTask" : "uncompletedTask"}>{task.task}</p>
            <div className="icons">
                <FontAwesomeIcon icon={faPenToSquare}
                onClick={() => editTodo(task.id)}/>
                <FontAwesomeIcon icon={faTrash}
                onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}