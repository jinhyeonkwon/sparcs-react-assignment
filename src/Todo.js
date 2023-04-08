import React from 'react';

import { useState, useEffect } from 'react';

import './css/Todo.css';

const ToDo = (props) => {
  const importancefilter = props.importancefilter;
  const toDos = props.todos;
  const filteredToDoList = toDos.filter((toDo) => {
    if (importancefilter == 'a') return true;
    if (importancefilter == toDo.importance) return true;
    return false;
  });
  console.log('in todo', filteredToDoList);
  const toDoList = filteredToDoList.map((toDo) => (
    <tr key={toDo.id}>
      <td>{toDo.name}</td>
      <td>{toDo.importance}</td>
      <td>{toDo.due}</td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>ToDo 항목</th>
          <th>중요도</th>
          <th>기한</th>
        </tr>
      </thead>
      <tbody>{toDoList}</tbody>
    </table>
  );
};

export default ToDo;
