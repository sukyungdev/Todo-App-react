import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import List from "./List";

const Lists = React.memo(({ toDoData, setToDoData }) => {
    console.log("Lists Component");
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

    // console.log(toDoData);
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
                                        <List
                                            id={data.id}
                                            content={data.content}
                                            completed={data.completed}
                                            toDoData={toDoData}
                                            setToDoData={setToDoData}
                                            provided={provided}
                                            snapshot={snapshot}
                                        />
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
});

export default Lists;
