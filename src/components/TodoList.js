import { useState } from "react";
<<<<<<< Updated upstream
import TodoItem from './TodoItem';
import "./TodoList.css";

const TodoList = ({ todo , onUpdate, onDelete }) => {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
=======
import "./TodoList.css";


const TodoList = ({ todo, onUpdate, onDelete }) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

>>>>>>> Stashed changes
    const handleSearch = () => {
        const searchResult = getSearchResult();
        console.log("검색 결과:", searchResult);
    };
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    const getSearchResult = () => {
        return search === ""
            ? todo
            : todo.filter((it) =>
<<<<<<< Updated upstream
                it.content && it.content.toLowerCase().includes(search.toLowerCase())
=======
                it.content.toLowerCase().includes(search.toLowerCase())
>>>>>>> Stashed changes
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
            <button onClick={handleSearch} className="searchButton">
                🔍
            </button>
<<<<<<< Updated upstream

            <div className='list_wrapper'>
                {getSearchResult().map((it) => (
                    <TodoItem
                        key={it.id}
                        {...it}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                ))}
            </div>
=======
>>>>>>> Stashed changes
        </div>
    );
};

export default TodoList;
