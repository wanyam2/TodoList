import { useState } from "react";
import TodoItem from './TodoItem';
import "./TodoList.css";

const TodoList = ({ todo , onUpdate, onDelete }) => {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    const getSearchResult = () => {
        return search === ""
            ? todo
            : todo.filter((it) => 
                it.content && it.content.toLowerCase().includes(search.toLowerCase())
            );
    };
    
    return (
    <div className="TodoList">
        <input 
            value={search}
            onChange={onChangeSearch}
            className="searchbar"
            placeholder="검색어를 입력하세요" 
        />

        <div className='list_wrapper'>
            {getSearchResult().map((it) => (
                <TodoItem 
                key = {it.id} 
                {...it} 
                onUpdate = {onUpdate}
                onDelete = {onDelete}
                />
            ))}
        </div>
    </div>
    );
};

export default TodoList;
