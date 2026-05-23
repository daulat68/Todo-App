import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function Section({ section, updateSection }) {

    const [editText, setEditText] = useState("");

    const handleAdd = (text) => {
        const newTodos = [
            ...(section.todos || []),
            { id: uuidv4(), todo: text, isCompleted: false }
        ];

        updateSection(section.id, newTodos);

        setEditText("");
    };

    const handleToggle = (id) => {
        const newTodos = section.todos.map((t) =>
            t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
        );

        updateSection(section.id, newTodos);
    };

    const handleDelete = (id) => {
        const newTodos = section.todos.filter((t) => t.id !== id);

        updateSection(section.id, newTodos);
    };

    const handleEdit = (id) => {

        const item = section.todos.find((t) => t.id === id);

        if (!item) return;

        // put text in input bar
        setEditText(item.todo);

        // remove old task
        const newTodos = section.todos.filter((t) => t.id !== id);

        updateSection(section.id, newTodos);
    };

    return (
        <div className="w-full max-w-md mx-auto mt-4">

            {/* CARD BACKGROUND */}
            <div className="bg-[#ECEAF5] rounded-2xl p-4 shadow-md">

                {/* TITLE */}
                <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">
                    {section.title}
                </h2>

                {/* TODOS */}
                {section.todos && (
                    <>
                        <AddTodo
                            onAdd={handleAdd}
                            editText={editText}
                        />

                        <div className="mt-2">

                            {section.todos.length === 0 && (
                                <p className="text-gray-500 text-sm text-center mt-3">
                                    No tasks yet
                                </p>
                            )}

                            {section.todos.map((t) => (
                                <TodoItem
                                    key={t.id}
                                    todo={t}
                                    onToggle={handleToggle}
                                    onDelete={handleDelete}
                                    onEdit={handleEdit}
                                />
                            ))}

                        </div>
                    </>
                )}

                {/* NOTES SECTION */}
                {section.content !== undefined && (
                    <textarea
                        value={section.content}
                        onChange={(e) =>
                            updateSection(section.id, null, e.target.value)
                        }
                        placeholder="Write your notes..."
                        className="
                            w-full mt-3 bg-white border border-gray-300
                            rounded-xl p-3 outline-none
                            focus:ring-2 focus:ring-violet-400
                            text-sm shadow-sm min-h-[120px]
                        "
                    />
                )}

            </div>
        </div>
    );
}

export default Section;