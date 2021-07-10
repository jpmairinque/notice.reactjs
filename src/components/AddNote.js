import React from "react";
import { useState } from "react";

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tag, setTag] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "" || title === "" || tag === "") {
      alert("Please insert note's text, name and tag! ");
      return;
    }

    document.forms["addnote"].reset();

    onAdd({ title, text, tag });

    setTitle("");
    setText("");
    setTag("School");
  };

  return (
    <form name="addnote" onSubmit={onSubmit} className="addNoteForm">
      <div>
        <input
          type="text"
          placeholder="Note Name"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="textbox"
          placeholder="Note text"
          onChange={(e) => setText(e.target.value)}
        />
        <select
          name="cars"
          id="cars"
          placeholder="tag"
          onChange={(e) => setTag(e.target.value)}
        >
          <option value="none" selected disabled hidden>
            Tag
          </option>
          <option value="School">School</option>
          <option value="Work">Work</option>
          <option value="Home">Home</option>
        </select>
        <input type="submit" value="Add" />
      </div>
    </form>
  );
};

export default AddNote;
