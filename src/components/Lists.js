import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { BsCheck } from "react-icons/bs";

export default function List({ toDoData, setToDoData }) {
    const checkChange = (id) => {
        let newToDoData = toDoData.filter((data) => data.id !== id);
        console.log("newToDoData", newToDoData);
        setToDoData(newToDoData);
    };

    const completeChange = (id) => {
        let newToDoData = toDoData.map((data) => {
            if (data.id === id) {
                data.completed = !data.completed;
            }
            return data;
        });
        setToDoData(newToDoData);
    };

    //Drag and Drop
    const changeList = (info) => {
        //item info check
        console.log(info);
        if (!info.destination) return;
        const newToDoData = toDoData;

        //item index change
        const [listChangeItem] = newToDoData.splice(info.source.index, 1);
        newToDoData.splice(info.destination.index, 0, listChangeItem);

        //state change
        setToDoData(newToDoData);
    };

    console.log(toDoData);
    return (
        <div>
            <DragDropContext onDragEnd={changeList}>
                <Droppable droppableId="list">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {toDoData.map((data, index) => (
                                <Draggable
                                    key={data.id}
                                    draggableId={data.id.toString()}
                                    index={index}
                                >
                                    {(provided, snapshot) => (
                                        <div
                                            key={data.id}
                                            {...provided.draggableProps}
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            className={`${
                                                data.completed
                                                    ? "bg-green-200"
                                                    : "bg-purple-100"
                                            } p-3 mb-3 rounded shadow flex justify-between items-center`}
                                        >
                                            <div className="flex items-center">
                                                <input
                                                    className="mr-2 hidden"
                                                    id={data.id}
                                                    type="checkbox"
                                                    defaultChecked={false}
                                                    onChange={() =>
                                                        completeChange(data.id)
                                                    }
                                                />
                                                <label
                                                    for={data.id}
                                                    className="w-7 h-7 mr-3 rounded-full border-2 border-purple-400 bg-amber-300 flex items-center justify-center"
                                                >
                                                    {data.completed ? (
                                                        <BsCheck
                                                            size={50}
                                                            color={"purple"}
                                                        />
                                                    ) : undefined}
                                                </label>
                                                <span
                                                    className={`${
                                                        data.completed
                                                            ? "line-through"
                                                            : undefined
                                                    } text-gray-500 mr-2 text-lg`}
                                                >
                                                    {data.content}
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <button
                                                    className="px-2.5 pb-0.5 text-gray-600 text-lg"
                                                    type="button"
                                                    onClick={() =>
                                                        checkChange(data.id)
                                                    }
                                                >
                                                    x
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}
