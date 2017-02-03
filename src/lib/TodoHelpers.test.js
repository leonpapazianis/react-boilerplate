import { addTodo, findById, toggleTodo, updateTodo } from './TodoHelpers';

test(`addTodo should add the pass todo to the list without mutating the original todos list`, () => {
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
  ];
  const newTodo = { id: 3, name: 'three', isComplete: false };
  const expected = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false },
  ];
  const result = addTodo(startTodos, newTodo);
  expect(result).toEqual(expected);
});
test('findById should return the expected item from an array', () =>{
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
  ];
  const expected = { id: 2, name: 'two', isComplete: false }
  const result = findById(startTodos, 2);
  expect(result).toEqual(expected);
  expect(result).not.toBe(result[1]);
});
test('toggleTodo should toggle the isComplete prop of a todo without mutating the state', () => {
  const todo = { id: 1, name: 'one', isComplete: false };
  const expected = { id: 1, name: 'one', isComplete: true };
  const result = toggleTodo(todo);
  expect(result).toEqual(expected);
  expect(result).not.toBe(todo);
});
test('updateTodo should update an item by id without mutating the original array', () => {
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
  ];
  const updatedTodo = { id: 2, name: 'two', isComplete: true };
  const result = updateTodo(startTodos, updatedTodo);
  expect(findById(result, 2)).toEqual(updatedTodo);
  expect(result).not.toBe(startTodos);
});
