/* eslint-disable no-undef */
const todoList = require('../todo');

describe('todoList', () => {
  let todos;

  beforeEach(() => {
    todos = todoList();
  });

  it('adds a new todo', () => {
    todos.add({ title: 'Example Todo', dueDate: '2023-04-20' });
    expect(todos.all.length).toEqual(1);
  });

  it('marks a todo as completed', () => {
    todos.add({ title: 'Example Todo', dueDate: '2023-04-20' });
    todos.markAsComplete(0);
    expect(todos.all[0].completed).toEqual(true);
  });

  it('retrieves overdue items', () => {
    todos.add({ title: 'Overdue', dueDate: '2023-04-10' });
    todos.add({ title: 'Not_Overdue', dueDate: '2023-04-20' });
    const overdue = todos.overdue();
    expect(overdue.length).toEqual(1);
    expect(overdue[0].title).toEqual('Overdue');
  });

  it('retrieves due today items', () => {
    todos.add({ title: 'Due_Today', dueDate: '2023-04-13' });
    todos.add({ title: 'Not_Due Today', dueDate: '2023-04-20' });
    const dueToday = todos.dueToday();
    expect(dueToday.length).toEqual(1);
    expect(dueToday[0].title).toEqual('Due_Today');
  });

  it('retrieves due later items', () => {
    todos.add({ title: 'Due_Later', dueDate: '2023-04-20' });
    todos.add({ title: 'Not_Due Later', dueDate: '2023-04-13' });
    const dueLater = todos.dueLater();
    expect(dueLater.length).toEqual(1);
    expect(dueLater[0].title).toEqual('Due_Later');
  });
});
