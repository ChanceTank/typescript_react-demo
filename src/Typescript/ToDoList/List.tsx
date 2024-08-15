
import { type ToDo } from './types';

type ListProps = {
  toDoList: ToDo[];
  toggleTask: ({ id }: { id: string }) => void; 
};


/**
 * Renders a list of to-do items.
 * takes the toDoList state, and the toggleTask function 
 * as props and returns them in an HTML list.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ToDo[]} props.toDoList - The array of to-do items.
 * @param {function} props.toggleTask - The function to toggle a task's completion status.
 * @returns {JSX.Element} The rendered list of to-do items.
 */
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
