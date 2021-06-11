import React from "react";

const Note = ({ title, text, tag }) => {
    
  var tagColor = "";
  switch (tag) {
    case "School":
      tagColor = "green";
      break;
    case "Work":
      tagColor = "red";
      break;
    case "Home":
      tagColor = "yellow";
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{tag}</span>
    </div>
  );
};

export default Note;
