// src/NoteForm.js
import React, { useState,useEffect } from 'react';
import './index.css'
const NoteForm = ({ addNote, currentNote, isEditing }) => {
  const [note, setNote] = useState({ title: '', content: '' });

  useEffect(() => {
    setNote(currentNote);
  }, [currentNote]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({ title: '', content: '' });
  };

  return (
    <form onSubmit={handleSubmit}
          
    >
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="Title"
        className='border-0 p-2 text-light'
      />
      <p>
      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        placeholder="Content"
        className='border-0 ps-2 text-light'
      ></textarea>
      <button type="submit" className='btn btn-secondary'> {isEditing ? 'Update Note' : 'Add Note'}</button>
      </p>
    </form>
  );
};

export default NoteForm;
