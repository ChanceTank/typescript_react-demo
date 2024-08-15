import Component from './Typescript/FetchSomeData/index.tsx';
import ToDoList from './Typescript/ToDoList/index.tsx';
import { useState } from 'react';

function App() {

const [page, setPage] = useState<string>('fetch');



  return (
    <main>
      <nav>
        <button className='btn' onClick={()=> setPage('fetch')}>Fetch Data</button>
        <button className='btn' onClick={()=> setPage('toDo')}>To Do List</button>
      </nav>
      
      {page === 'fetch' && <Component />}
      {page === 'toDo' && <ToDoList />}
    </main>
  );
}

export default App;
