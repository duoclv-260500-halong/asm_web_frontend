import React, { useState } from "react";
import TodoList from "./components/TodoList";

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Work",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState('all');

  const handleTodoClick = (todo, index) => {
    // clone current array
    const newTodoList = [...todoList];

    const newTodoItem = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? 'completed' : 'new'
    }

    newTodoList[index] = newTodoItem;

    setTodoList(newTodoList);
  };

  const handleShowAll = () => {
    setFilteredStatus('all')
  }
  const handleShowCompleted = () => {
    setFilteredStatus('completed')
  }
  const handleShowNew = () => {
    setFilteredStatus('new')
  }

  const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick}></TodoList>

      <div>
        <button onClick={handleShowAll}>Show All</button>
        <button onClick={handleShowCompleted}>Show Completed</button>
        <button onClick={handleShowNew}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
