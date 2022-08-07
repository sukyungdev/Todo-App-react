export default function InputForm({ userSubmit, value, setValue }) {
    console.log("InputForm Component");
    const userInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <form onSubmit={userSubmit} className="flex">
            <input
                className="border-2 rounded shadow focus:border-purple-300 px-2 py-1 mr-3 flex-1 text-gray-500"
                type="text"
                name="value"
                placeholder="오늘은 무엇을 할까?"
                value={value}
                onChange={userInput}
                required
            ></input>
            <button
                className="px-2 py-1 shadow text-purple-500 rounded border-2 border-purple-400 bg-amber-200 hover:bg-purple-400 hover:text-amber-200 transition-all duration-500"
                type="submit"
            >
                submit
            </button>
        </form>
    );
}
