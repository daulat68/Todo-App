export const loadSections = () => {
    const data = localStorage.getItem("sections");
    return data ? JSON.parse(data) : null;
};

export const saveSections = (sections) => {
    localStorage.setItem("sections", JSON.stringify(sections));
};