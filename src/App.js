import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import {useState, useEffect, useRef} from "react";


function App() {
    const [todo, setTodo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const idRef = useRef(3);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch("https://localhost:3001/todo");
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const data = await response.json();
                console.log("Fetched data:", data);  // 데이터 출력

                if (Array.isArray(data)) {
                    idRef.current = data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 0;
                    setTodo(data);
                } else {
                    console.log("Data is not an array:", data);  // 디버깅을 위해 데이터 출력
                    throw new Error("Data is not an array");
                }
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };
        fetchTodos();
    }, []);

    const onCreate = async (content) => {
        const newItem = {
            id: idRef.current,
            content,
            isDone: 0,
            createdDate: new Date().getTime(),
        };

        try {
            const response = await fetch("https://localhost:3001/todo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newItem),
            });

            if (!response.ok) {
                throw new Error("Failed to create new todo");
            }
            setTodo([newItem, ...todo]);
            idRef.current += 1;
        } catch (error) {
            setError(error.message);
        }
    };

    const onUpdate = async (targetId) => {
        const updateTodo = todo.find((it) => it.id === targetId);

        if (!updateTodo) {
            console.error(`Todo with id ${targetId} not found`);
            return;
        }

        // 상태 반전
        const newIsDone = updateTodo.isDone === 1 ? 0 : 1;

        setTodo(
            todo.map((it) =>
                it.id === targetId ? {...it, isDone: newIsDone} : it
            )
        );

        try {
            const response = await fetch(`https://localhost:3001/todo/${targetId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    isDone: newIsDone,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to update todo");
            }
        } catch (error) {
            console.error(error.message);
        }
    };


    const onDelete = async (targetId) => {
        setTodo(todo.filter((it) => it.id !== targetId));

        try {
            const response = await fetch(`https://localhost:3001/todo/${targetId}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="App">
            <Header/>
            <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
            <TodoEditor onCreate={onCreate}/>
        </div>
    );
}

export default App;
