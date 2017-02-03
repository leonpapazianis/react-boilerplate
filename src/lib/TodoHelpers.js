const addTodo = (todos, todo) => [...todos, todo];
const generateId = () => Math.floor(Math.random() * 100000);
const findById = (todos, id) => todos.find(todo => todo.id === id);
const toggleTodo = todo => ({...todo, isComplete: !todo.isComplete});
const todoWithSameId = todo1 => todo2 => todo1.id === todo2.id;
const updateTodo = (todos, updateTodo) => {
  const updatedIndex = todos.findIndex(todoWithSameId(updateTodo));
  return [
    ...todos.slice(0, updatedIndex),
    updateTodo,
    ...todos.slice(updatedIndex + 1)
  ];
}

export {addTodo, generateId, findById, toggleTodo, updateTodo};
