import React from "react";

export default function InputForm({ userSubmit, value, setValue }) {
    const userInput = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    };

    return (
        <form onSubmit={userSubmit}>
            <input
                type="text"
                name="value"
                placeholder="입력해주세요"
                value={value}
                onChange={userInput}
            ></input>
            <button type="submit">submit</button>
        </form>
    );
}
