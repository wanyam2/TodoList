import {TodoData} from "./todo.data.js";

// Todo 사용자 조회
const findAll = () => {
    return TodoData.todoData;
}

// Todo 생성
const add = (todo)=>{
    const newTodo = {
        id: TodoData.todoData.length +1,
        ...todo
    };

    TodoData.todoData.push(newTodo);
    return newTodo
}

// Todo 업데이트
const update = (id, todo) =>{
    const index = findIndexById(id);
    if(index === -1){
        return {}
    }

    const updated = {
        id,
        ...todo
    };

    TodoData.todoData[index] = updated;
    return updated;
}

// Todo 삭제
const remove = (id)=>{
    const index = findIndexById(id);
    if(index === -1){
        return {}
    }

    const removed = TodoData.todoData[index];
    TodoData.todoData.splice(index,1);

    return removed;
}

const findIndexById = (id) => {
    return TodoData.todoData.findIndex((todo) => todo.id === id);
};

export const TodoHandler = {
    findAll,
    add,
    update,
    remove
};
