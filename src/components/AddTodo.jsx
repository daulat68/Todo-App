import { useState } from "react";

function AddTodo({ onAdd }) {
    const [input, setInput] = useState("");

    const handleAdd = () => {
        if (input.trim().length < 3) return;
        onAdd(input);
        setInput("");
    };

    return (
        <div className="flex gap-2 mb-3">
        
        {/* Input */}
        <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter task..."
            className="flex-1 bg-white border border-gray-300 px-4 py-2 rounded-lg 
                    outline-none focus:ring-2 focus:ring-violet-400 
                    text-sm shadow-sm"
        />

        {/* Button */}
        <button
            onClick={handleAdd}
            disabled={input.trim().length < 3}
            className="bg-[#B11226] hover:bg-[#8f0e1f] disabled:bg-[#d3a5ab] 
                    text-white px-4 py-2 rounded-lg font-semibold 
                    transition duration-200 shadow-sm"
        >
            Add
        </button>

        </div>
    );
}

export default AddTodo;