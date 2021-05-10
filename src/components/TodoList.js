import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.scss';

const TodoList = ({ listTodo, setListTodo, filters, setFilters }) => {
  let renderedListTodo = listTodo.map((item, idx) => {
    if (!listTodo.length) return;
    if (filters === 'active') {
      return (
        <TodoItem
          value={item.value}
          isCompleted={item.isCompleted}
          key={item.value}
          index={idx}
          listTodo={listTodo}
          setListTodo={setListTodo}
          showActive={true}
        />
      );
    }

    if (filters === 'completed') {
      return (
        <TodoItem
          value={item.value}
          isCompleted={item.isCompleted}
          key={item.value}
          index={idx}
          listTodo={listTodo}
          setListTodo={setListTodo}
          showCompleted={true}
        />
      );
    }

    return (
      <TodoItem
        value={item.value}
        isCompleted={item.isCompleted}
        key={item.value}
        index={idx}
        listTodo={listTodo}
        setListTodo={setListTodo}
      />
    );
  });

  return (
    <div className="todo__list">
      {renderedListTodo}
      <div className="todo__list-stats">
        <div className="todo__list-items-left">
          {listTodo.filter((item) => !item.isCompleted).length} items left
        </div>
        <div className="todo__list-options todo__list-options-desktop">
          <div
            className={`todo__list-all ${filters === 'all' ? 'primary' : ''}`}
            onClick={() => setFilters('all')}
          >
            All
          </div>
          <div
            className={`todo__list-active ${
              filters === 'active' ? 'primary' : ''
            }`}
            onClick={() => setFilters('active')}
          >
            Active
          </div>
          <div
            className={`todo__list-completed ${
              filters === 'completed' ? 'primary' : ''
            }`}
            onClick={() => setFilters('completed')}
          >
            Completed
          </div>
        </div>
        <div
          className="todo__list-clear-completed"
          onClick={() => {
            const newTodos = listTodo.filter((item) => !item.isCompleted);
            console.log(listTodo);
            setListTodo(newTodos);
          }}
        >
          Clear Completed
        </div>
      </div>
      <div className="todo__list-options todo__list-options-mobile">
        <div
          className={`todo__list-all ${filters === 'all' ? 'primary' : ''}`}
          onClick={() => setFilters('all')}
        >
          All
        </div>
        <div
          className={`todo__list-active ${
            filters === 'active' ? 'primary' : ''
          }`}
          onClick={() => setFilters('active')}
        >
          Active
        </div>
        <div
          className={`todo__list-completed ${
            filters === 'completed' ? 'primary' : ''
          }`}
          onClick={() => setFilters('completed')}
        >
          Completed
        </div>
      </div>
    </div>
  );
};

export default TodoList;
