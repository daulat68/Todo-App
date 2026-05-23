import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function TodoItem({ todo, onToggle, onDelete, onEdit }) {

    return (
        <div className="flex justify-between items-center bg-white rounded-xl px-3 py-2 my-2 shadow-sm">

            {/* LEFT SIDE */}
            <div className="flex gap-3 items-center flex-1">

                {/* CHECKBOX */}
                <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => onToggle(todo.id)}
                    className="w-4 h-4 accent-[#B11226] cursor-pointer"
                />

                {/* TODO TEXT */}
                <span
                    className={`text-sm ${
                        todo.isCompleted
                            ? "line-through text-gray-400"
                            : "text-gray-800"
                    }`}
                >
                    {todo.todo}
                </span>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-2 ml-2">

                {/* EDIT */}
                <button
                    onClick={() => onEdit(todo.id)}
                    className="
                        bg-[#B11226]
                        hover:bg-[#8f0e1f]
                        p-2 rounded-lg
                        text-white
                        transition duration-200
                    "
                >
                    <FaEdit size={14} />
                </button>

                {/* DELETE */}
                <button
                    onClick={() => onDelete(todo.id)}
                    className="
                        bg-[#B11226]
                        hover:bg-[#8f0e1f]
                        p-2 rounded-lg
                        text-white
                        transition duration-200
                    "
                >
                    <AiFillDelete size={14} />
                </button>

            </div>
        </div>
    );
}

export default TodoItem;