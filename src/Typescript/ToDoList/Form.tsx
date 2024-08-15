import { useState } from 'react';
import { type ToDo } from './types';

type FormProps = {
  addToDo: (toDo: ToDo) => void;
};

function Form({ addToDo: addTodo }: FormProps) {
  const [text, setText] = useState('');


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //if the form is blank then alert the user
    if (!text) {
      alert('please enter a task');
      return;
    }
    addTodo({//otherwise add the todo list
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
    });

    setText('');
  };

  return (
    <form className='form task-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='form-input'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type='submit' className='btn'>
        add to do
      </button>
    </form>
  );
}
export default Form;
