import { useState } from "react";
import "./styles/home.css";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import logo from "./images/noticelogo.png";
import add from "./images/add.png";
import filter from "./images/filter.png";

function App() {
  const [showAddNote, setShowAddNote] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  
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
      title: "Car Anatomy",
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

  const deleteNote = (key) => {
    setNotes(notes.filter((note) => note.title !== key));
  };

  return (
    <div className="App">
      <header>
        <section>
          <img src={logo} className="logo" alt="" />
          <div>
            <h1>Notice</h1>
            <span>Your note app</span>
          </div>
        </section>
        <section>
          <img src={filter} alt="" className="logo" />
          {showAddNote ? <AddNote onAdd={insertNote} /> : ""}

          <img
            src={add}
            className="add"
            alt=""
            onClick={() => setShowAddNote(!showAddNote)}
          />
        </section>
      </header>
      <Notes onDelete={deleteNote} notes={notes} />
    </div>
  );
}

export default App;
