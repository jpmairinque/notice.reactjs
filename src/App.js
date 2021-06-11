import { useState } from "react";
import "./styles/home.css";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import logo from "./images/noticelogo.png";
import add from "./images/add.png";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "Fish Anatomy",
      text: "Studying fish anatomy is very important in marine biology",
      tag: "School",
    },
    {
      title: "Grocery List",
      text: "Peanuts, bananas, apples, pencils, toothpaste",
      tag: "Work",
    },
    {
      title: "Fish Anatomy",
      text: "Studying fish anatomy is very important in marine biology",
      tag: "Home",
    },
  ]);

  const insertNote = (noteInfo) => {
    const newNote = {
      title: noteInfo.title,
      text: noteInfo.text,
      tag: noteInfo.tag,
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <header>
        <img src={logo} alt="" />
        <div>
          <h1>Notice</h1>
          <span>Your note app</span>
        </div>

      </header>
      <Notes notes={notes} />
      <AddNote onAdd={insertNote} />
    </div>
  );
}

export default App;
