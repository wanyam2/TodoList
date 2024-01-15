import "./TodoItem.css";
import React from "react";
import { FaTrash } from "react-icons/fa";

export const TodoItem = ({ id, content, isDone, onDelete}) => 
{
    const onChangeCheckbox = () => {
        ontimeupdate(id);
    };

    const onClickDelete = () => {
        onDelete(id);
    };

    return (
        <div className = "TodoItem">
        <div className = "btn_col">
            <button></button>
        </div>
        <div className = "title_col">{content}</div>
        <div className="delete_col">
            <FaTrash onClick={onClickDelete}></FaTrash>
        </div>
        <div className="checkbox_col">
            <input type = "checkbox" />
        </div>
        </div>
    );
};

export default TodoItem;