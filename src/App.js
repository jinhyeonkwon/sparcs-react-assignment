import React from 'react';
import './css/App.css';

import { useState, useEffect } from 'react';

import ToDo from './Todo.js';

const App = () => {
  const [name, setName] = useState(''); // 각각의 할 일의 이름
  const [importance, setImportance] = useState('h'); // 각각의 할 일의 중요도
  const [content, setContent] = useState('') // 각각의 할 일의 내용
  const [due, setDue] = useState(''); // 각각의 할 일의 기한
  const [id, setId] = useState(0);
  const [toDos, setToDos] = useState([]); // 각각의 할 일에 대한 정보들이 담긴 객체들의 리스트
  const [importanceFilter, setImportanceFilter] = useState('a'); // Todo.js에서 띄울 중요도 필터
  const inputChange = (event) => {
    console.log(event);
  };

  const removeToDo = (event) => {
    console.log(`remove fn called with ${event.target.id}`);
    const idToRemove = parseInt(event.target.id);
    setToDos((currToDos) => currToDos.filter((toDo) => toDo.id !== idToRemove));
  }; // 뭘 지울지는 toDo가 가진 버튼에서.. -> 이 함수를 toDo의 props로 넘겨준다.

  const onSubmit = (event) => {
    event.preventDefault();
    const newToDo = {};
    newToDo.id = id;
    setId((id) => id + 1);
    newToDo.name = name;
    newToDo.content = content;
    newToDo.importance = importance;
    newToDo.due = due;
    setToDos((currToDos) => [newToDo, ...currToDos]);
  };
  console.log(toDos);
  return (
    <div>
      <div className="Header">
        <h1>To-do List</h1>
        <form onSubmit={onSubmit}>
          <div>
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
          </div>
          <br></br>
          <div>
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
          </div>
          <br></br>
          <div>
          <input
              className="Input Content"
              type="text"
              onChange={(event) => {
                setContent(event.target.value);
              }}
              placeholder="내용"
              name="content"
            ></input>
          </div>
          <br></br>
          <div>
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
          </div>
          <br></br>
          <button type="submit">Todo 추가하기</button>
        </form>
      </div>
      <div class="filter">
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
      </div>

      <ToDo
        todos={toDos}
        removeToDo={removeToDo}
        importancefilter={importanceFilter}
      />
    </div>
  );
};
export default App;
