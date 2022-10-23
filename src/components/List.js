import React from 'react';
import { BsCheck } from 'react-icons/bs';
const List = React.memo(
  ({ id, content, completed, toDoData, setToDoData, provided, snapshot, completeChange }) => {
    console.log('List Component');

    const checkChange = (id) => {
      let newToDoData = toDoData.filter((data) => data.id !== id);
      console.log('newToDoData', newToDoData);
      setToDoData(newToDoData);
    };
    return (
      <div
        key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${
          completed ? 'bg-green-200' : 'bg-purple-100'
        } p-3 mb-3 rounded shadow flex justify-between items-center`}
      >
        <div className="flex items-center">
          <input
            className="mr-2 hidden"
            id={id}
            type="checkbox"
            defaultChecked={false}
            onChange={() => completeChange(id)}
          />
          <label
            htmlFor={id}
            className="w-7 h-7 mr-3 rounded-full border-2 border-purple-400 bg-amber-300 flex items-center justify-center"
          >
            {completed ? <BsCheck size={50} color={'purple'} /> : ''}
          </label>
          <span className={`${completed ? 'line-through' : undefined} text-gray-500 mr-2 text-lg`}>
            {content}
          </span>
        </div>
        <div className="flex items-center">
          <button
            className="px-2.5 pb-0.5 text-gray-600 text-lg"
            type="button"
            onClick={() => checkChange(id)}
          >
            x
          </button>
        </div>
      </div>
    );
  },
);
export default List;
