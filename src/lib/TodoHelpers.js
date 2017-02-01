const addTodo = (todos, todo) => [...todos, todo];
const generateId = () => Math.floor(Math.random() * 100000);
export {addTodo, generateId};
