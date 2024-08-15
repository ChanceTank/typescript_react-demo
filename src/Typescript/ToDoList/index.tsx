//demonstrates the use of typescript in a simple todo list application
//making use of local storage to save data

import { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';
import { type ToDo } from './types';

//pulls from local storage and loads into object
function loadToDo(): ToDo[] {
  const storedToDo = localStorage.getItem('toDoList');
  return storedToDo ? JSON.parse(storedToDo) : [];
}

//updates local storage
function updateStorage(toDoList: ToDo[]): void {
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

function Component() {
  //initializes the state with the data from local storage
  const [toDoState, setList] = useState<ToDo[]>(() => loadToDo());

  //adds a task to the state
  const addTask = (toDo: ToDo): void => {
    setList([...toDoState, toDo]);
  };
  
  //toggles the task completion status
  //overwrites the function in the ListProps
  const toggleTask = ({ id }: { id: string }) => {
    setList(
      toDoState.map((toDo) => {
        if (toDo.id === id) {
          return { ...toDo, isCompleted: !toDo.isCompleted };//return the toDo item, and flip the completion status, to the state
        }
        return toDo;
      })
    );
  };

  //updates local storage when the state changes
  useEffect(() => {
    updateStorage(toDoState);
  }, [toDoState]);

  return (
    <section>
      <Form addToDo={addTask} />
      <List toDoList={toDoState} toggleTask={toggleTask} />
    </section>
  );
}
export default Component;
