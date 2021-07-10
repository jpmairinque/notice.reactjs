import React from "react";
import trash from "../images/delete.png";

const Note = ({ title, text, tag, delNote }) => {
  var tagColor = "";
  switch (tag) {
    case "School":
      tagColor = "tag blue";
      break;
    case "Work":
      tagColor = "tag red";
      break;
    case "Home":
      tagColor = "tag green";
  }

  return (
    <div className="notebox">
      <h1>{title}</h1>
      <p>{text}</p>

      <div className={tagColor}>
        <span>{tag}</span>
        <img src={trash} alt="" onClick={() => delNote(title)} />
      </div>
    </div>
  );
};

export default Note;
