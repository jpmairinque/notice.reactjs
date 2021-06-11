import React from "react";
import Note from "./Note";



const Notes = ({ notes }) => {

    return (
    <div className="notelist">
      {notes.map((note, index) => (
        <Note key={index} title={note.title} text={note.text} tag={note.tag} />
      ))}
    </div>
  );
};

export default Notes;
