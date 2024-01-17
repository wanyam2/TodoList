import React from "react";
import "./TodoEditor.css";
import {useRef, useState} from "react";

const TodoEditor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const inputRef = useRef();
    const [open, setOpen] = useState(false);

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const onSubmit = () => {
        if (!content) {
            inputRef.current.focus();
            return;
        } else {
            onCreate(content);
            setContent("");
            setOpen(false);
        }
    };
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }

    };
    const handleButtonClick = () => {
        setOpen(true);
    };


    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✏️</h4>
            {open ? (
                <div className="editor_wrapper">

                    <input
                        ref={inputRef}
                        value={content}
                        onChange={onChangeContent}
                        onKeyDown={onKeyDown}
                        placeholder="새로운 Todo..."
                    />
                    <button onClick={onSubmit}>추가</button>
                </div>
            ) : (
                <div className={"editor_wrapper2"}>
                <button onClick={handleButtonClick}>+</button>
                </div>
            )}
        </div>
    );
};
export default TodoEditor;
