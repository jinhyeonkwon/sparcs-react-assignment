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
  const importanceStr = new Map();
  importanceStr.set('h', '높음');
  importanceStr.set('m', '중간');
  importanceStr.set('l', '낮음');
  const toDoList = filteredToDoList.map((toDo) => (
    <tr key={toDo.id}>
      <td>{toDo.name}</td>
      <td>{importanceStr.get(toDo.importance)}</td>
      <td>{toDo.content}</td>
      <td>{toDo.due}</td>
      <td>
        <button id={toDo.id} onClick={(event) => props.removeToDo(event)}>
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <table className="todo-table">
      <thead>
        <tr>
          <th width="150px">ToDo 항목</th>
          <th width="50px">중요도</th>
          <th width="300px">내용</th>
          <th width="90px">기한</th>
          <th width="70px">삭제하기</th>
        </tr>
      </thead>
      <tbody>{toDoList}</tbody>
    </table>
  );
};

export default ToDo;
