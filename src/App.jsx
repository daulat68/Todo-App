import { useState, useEffect } from "react";
import Section from "./components/Section";
import SectionTabs from "./components/SectionTabs";
import { loadSections, saveSections } from "./utils/localStorage";

function App() {
  const [sections, setSections] = useState([]);
  const [activeSection, setActiveSection] = useState("long");

  useEffect(() => {
    const saved = loadSections();
    if (saved) {
      setSections(saved);
    } else {
      setSections([
        { id: "long", title: "Long Term", todos: [] },
        { id: "current", title: "Current", todos: [] },
        { id: "notes", title: "Notes", content: "" }
      ]);
    }
  }, []);

  const updateSection = (id, todos, content) => {
    const updated = sections.map((sec) => {
      if (sec.id === id) {
        return {
          ...sec,
          todos: todos ?? sec.todos,
          content: content ?? sec.content
        };
      }
      return sec;
    });

    setSections(updated);
    saveSections(updated);
  };

  const active = sections.find((s) => s.id === activeSection);

  return (
    <div className="min-h-screen flex flex-col items-center px-3 py-4">

      {/* TITLE */}
      <h1 className="text-2xl font-bold text-gray-800 mb-3">
        Todo App
      </h1>

      {/* TABS */}
      <SectionTabs
        sections={sections}
        active={activeSection}
        setActive={setActiveSection}
      />

      {/* ACTIVE SECTION */}
      <div className="w-full flex justify-center">
        {active && (
          <Section section={active} updateSection={updateSection} />
        )}
      </div>

    </div>
  );
}

export default App;