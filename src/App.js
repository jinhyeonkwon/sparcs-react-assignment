import React from 'react';
import './css/App.css';

import { useState, useEffect } from 'react';

import ToDo from './Todo.js';

const App = () => {
  const [name, setName] = useState(''); // 각각의 할 일의 이름
  const [importance, setImportance] = useState('h'); // 각각의 할 일의 중요도
  const [due, setDue] = useState(''); // 각각의 할 일의 기한
  const [id, setId] = useState(0);
  const [toDos, setToDos] = useState([]); // 각각의 할 일에 대한 정보들이 담긴 객체들의 리스트
  const [importanceFilter, setImportanceFilter] = useState('a'); // Todo.js에서 띄울 중요도 필터
  const inputChange = (event) => {
    console.log(event);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newToDo = {};
    newToDo.id = id;
    setId((id) => id + 1);
    newToDo.name = name;
    newToDo.importance = importance;
    newToDo.due = due;
    setToDos((currToDos) => [newToDo, ...currToDos]);
  };
  console.log(toDos);
  return (
    <div className="Header">
      <h1>To-do List</h1>
      <form onSubmit={onSubmit}>
        <input
          className="Input Name"
          type="text"
          required
          onChange={(event) => {
            setName(event.target.value);
          }}
          placeholder="할 일을 입력하세요.."
          name="name"
        ></input>
        <br />
        <p>
          중요도
          <select
            name="importance"
            type="text"
            required
            onChange={(event) => {
              setImportance(event.target.value);
            }}
          >
            <option value="h">높음</option>
            <option value="m">중간</option>
            <option value="l">낮음</option>
          </select>
        </p>
        <p>
          기한
          <input
            className="Input Due"
            type="date"
            required
            onChange={(event) => {
              setDue(event.target.value);
            }}
            name="due"
          ></input>
        </p>
        <button type="submit">Todo 추가하기</button>
      </form>
      <p>
        중요도 필터 설정{' '}
        <select
          name="importance-filter"
          type="text"
          required
          onChange={(event) => {
            setImportanceFilter(event.target.value);
          }}
        >
          <option value="a">전체</option>
          <option value="h">높음</option>
          <option value="m">중간</option>
          <option value="l">낮음</option>
        </select>
      </p>

      <ToDo todos={toDos} importancefilter={importanceFilter} />
    </div>
  );
};
export default App;
