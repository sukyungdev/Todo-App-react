import React from "react";
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

    console.log(toDoData);
    return (
        <div>
            {toDoData.map((data) => (
                <div
                    key={data.id}
                    className={`${
                        data.completed ? "bg-green-200" : "bg-purple-100"
                    } p-3 mb-3 rounded shadow flex justify-between items-center`}
                >
                    <div className="flex items-center">
                        <input
                            className="mr-2 hidden"
                            id={data.id}
                            type="checkbox"
                            defaultChecked={false}
                            onChange={() => completeChange(data.id)}
                        />
                        <label
                            for={data.id}
                            className="w-7 h-7 mr-3 rounded-full border-2 border-purple-400 bg-amber-300 flex items-center justify-center"
                        >
                            {data.completed ? (
                                <BsCheck size={50} color={"purple"} />
                            ) : undefined}
                        </label>
                        <span
                            className={`${
                                data.completed ? "line-through" : undefined
                            } text-gray-500 mr-2 text-lg`}
                        >
                            {data.content}
                        </span>
                    </div>
                    <div className="flex items-center">
                        <button
                            className="px-2.5 pb-0.5 text-gray-600 text-lg"
                            type="button"
                            onClick={() => checkChange(data.id)}
                        >
                            x
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
