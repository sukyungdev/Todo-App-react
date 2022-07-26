import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import List from "./components/List";

function App() {
    const [value, setValue] = useState("");
    const [toDoData, setToDoData] = useState([]);

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
        <div className="container">
            <div className="todo-app">
                <h1>할일 목록</h1>
                <List toDoData={toDoData} setToDoData={setToDoData} />
                <InputForm
                    value={value}
                    setValue={setValue}
                    userSubmit={userSubmit}
                />
            </div>
        </div>
    );
}

export default App;
