const todoData = [];

const initData = [
    { id: 1, title: "First  Todo", status: "pending" },
    { id: 2, title: "Second  Todo", status: "done" },
    { id: 3, title: "Third  Todo", status: "pending" },
    { id: 4, title: "Fourth  Todo", status: "progress" },
    { id: 5, title: "Fifth  Todo", status: "pending" },
];

const initialize = () => {
    // todoData를 초기화한다.
    TodoData.todoData = [...initData];
};

export const TodoData = {
    todoData,
    initialize,
};
