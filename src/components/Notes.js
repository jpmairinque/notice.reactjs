import React from "react";
import Note from "./Note";



const Notes = ({ notes }) => {

    return (
    <div>
      {notes.map((note, index) => (
        <Note key={index} title={note.title} text={note.text} tag={note.tag} />
      ))}
    </div>
  );
};

export default Notes;
