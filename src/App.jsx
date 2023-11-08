import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [notes, setNotes] = useState([]);
  
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  //examples
  const [examplesBool, setExamplesBool] = useState(true)
  function addExamples() {
    const examples = [{title: 'Shopping list', content: '-milk \n-eggs \n-cheese \n-butter'},{title: 'Medication reminder', content: 'take medication at 6pm'},{title: 'Call reminder', content: 'dont forget to call home'}]
    addNote(examples[0]);
    addNote(examples[1]);
    addNote(examples[2]);
    setExamplesBool(false);
  }
  
  
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((_noteItem, index) => {
        return index !== id;
      });
    });
  }
  
  return (
    <div>
      <Header />
      {examplesBool && addExamples()} 
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
