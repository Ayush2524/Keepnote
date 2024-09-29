// src/App.js
import React, { useState} from 'react';
import Note from './Note';
import NoteForm from './NoteForm';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ title: '', content: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);



  const addNote = (note) => {
    if (isEditing) {
      const updatedNotes = notes.map((n, index) =>
        index === editIndex ? note : n
      );
      setNotes(updatedNotes);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setNotes([...notes, note]);
    }
    setCurrentNote({ title: '', content: '' });
  };


  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index,1);
    setNotes(newNotes);
  };
  const editNote = (index) => {
    setCurrentNote(notes[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <div >
      <h1 className='text-bg-dark p-3'>Keep Notes</h1>
      
      <NoteForm
        addNote={addNote}
        currentNote={currentNote}
        isEditing={isEditing}
      />
      <div className='row'>
        {notes.map((note, index) => (
          <Note key={index} note={note} index={index} deleteNote={deleteNote} editNote={editNote} />
        ))}
      </div>
    </div>
  );
};

export default App;

