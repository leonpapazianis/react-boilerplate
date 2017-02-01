import { addTodo } from './TodoHelpers';

test('addTodo should add the pass todo to the list without mutating the original todos list', () => {
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
