import { type ToDo } from './types';

type ListProps = {
  toDoList: ToDo[];
  toggleTask: ({ id }: { id: string }) => void; 
};

function List({ toDoList, toggleTask }: ListProps) {
  return (
    <ul className='list'>
      {toDoList.map((toDo) => {
        return (
          <li key={toDo.id}>
            <p className='task-text'>{toDo.description}</p>
            <input
              type='checkbox'
              checked={toDo.isCompleted}
              onChange={() => {
                toggleTask({ id: toDo.id });
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}
export default List;
