import React from "react";

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

    const listStyle = (completed) => {
        return {
            textDecoration: completed ? "line-through" : "none",
        };
    };

    console.log(toDoData);
    return (
        <div>
            {toDoData.map((data) => (
                <div style={listStyle(data.completed)} key={data.id}>
                    <input
                        type="checkbox"
                        defaultChecked={false}
                        onChange={() => completeChange(data.id)}
                    />
                    <span>{data.content}</span>
                    <button type="button" onClick={() => checkChange(data.id)}>
                        x
                    </button>
                </div>
            ))}
        </div>
    );
}
