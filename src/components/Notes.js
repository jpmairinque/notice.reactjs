import React from "react";
import Note from "./Note";

const Notes = ({ notes, onDelete }) => {
  return (
    <div className="notelist">
       {notes.map((note, index) => (<Note delNote={onDelete} key={index} title={note.title} text={note.text} tag={note.tag} />
      ))}
       {/* {notes.map((note, index) => (note.tag==="School" ? <Note delNote={onDelete} key={index} title={note.title} text={note.text} tag={note.tag} /> : ''
      ))} */}
    </div>
  );
};

export default Notes;
