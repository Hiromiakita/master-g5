import React from "react";

const List = () => {
    const languages = [
        { id: 1, language: "java" },
        { id: 2, language: "c#" },
        { id: 3, language: "c++" },
        { id: 4, language: "python" },
        { id: 5, language: "javascript" },
    ];
    return (
        <div>
            <ul>
                {languages.map((language) => {
                    return <li key={language.id}>{language.language}</li>;
                })}
            </ul>
        </div>
    );
};

export default List;
