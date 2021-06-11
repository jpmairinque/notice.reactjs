import { useState } from "react";
import "./styles/home.css";
import Notes from "./components/Notes";
import AddNote from './components/AddNote'

function App() {
  const [notes, setNotes] = useState([
    {
      title: "Fish Anatomy",
      text: "Studying fish anatomy is very important in marine biology",
      tag: "school",
    },
    {
      title: "Grocery List",
      text: "Peanuts, bananas, apples, pencils, toothpaste",
      tag: "school",
    },
    {
      title: "Fish Anatomy",
      text: "Studying fish anatomy is very important in marine biology",
      tag: "school",
    },
  ]);

  const insertNote = (noteInfo) => {
    const newNote = {title: noteInfo.title, text:noteInfo.text, tag:noteInfo.tag}
    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <header>
      <div>
      <h1>Notice</h1>
      <span>Your note app</span>
      </div>
      </header>
      <Notes notes={notes} />
      <AddNote onAdd={insertNote}/>
    </div>
  );
}

export default App;
