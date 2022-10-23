import { useState, useCallback } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import Lists from "./components/Lists";
// import { FaBeer } from "react-icons/fa";

function App() {
    console.log("App Component");
    const [value, setValue] = useState("");
    const [toDoData, setToDoData] = useState([]);

    const completeChange = useCallback(
        (id) => {
            let newToDoData = toDoData.map((data) => {
                if (data.id === id) {
                    data.completed = !data.completed;
                }
                return data;
            });
            setToDoData(newToDoData);
        },
        [toDoData]
    );

    const userSubmit = (e) => {
        e.preventDefault();

        let newToDoData = {
            id: Date.now(),
            content: value,
            completed: false,
        };

        setToDoData((prev) => [...prev, newToDoData]);
        setValue("");
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-green-200 p-5">
            <div className="p-5 bg-white rounded w-full shadow md:max-w-lg lg:max-w-xl">
                <div className="mb-3">
                    <h1 className="text-purple-500 text-lg font-Poppins text-center">To Do App</h1>
                </div>
                <Lists
                    completeChange={completeChange}
                    toDoData={toDoData}
                    setToDoData={setToDoData}
                />
                <InputForm value={value} setValue={setValue} userSubmit={userSubmit} />
            </div>
        </div>
    );
}

export default App;
