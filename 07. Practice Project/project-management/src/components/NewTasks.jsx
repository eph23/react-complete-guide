import { useState } from "react";

function NewTasks({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState("");

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if(enteredTask.trim() === "") {
            return 
        }
        onAdd(enteredTask);
        setEnteredTask("");
    }

    return (
        <div className="flex flex-center gap-4">
            <input
                type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={handleChange}
                value={enteredTask}
            />
            <button
                onClick={handleClick}
                className="text-stone-700 hover:text-slate-950"
            >
                Add Task
            </button>
        </div>
    );
}

export default NewTasks;
