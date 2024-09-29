// src/Note.js
import React from 'react';

const Note = ({ note, index, deleteNote ,editNote}) => {
  return (
    <div className=' Note border  border-dark-subtle ms-1 w-25 text-center  mb-1 bg-body-tertiary rounded'>
     <div className='text-bg-dark p-3'>
     <h2 >{note.title}</h2>
      <p >{note.content}</p>
      <button onClick={() => deleteNote(index)}
              className='btn btn-danger me-2'
        >Delete</button>
        <button className="btn btn-primary" onClick={() => editNote(index)}>Edit</button>
     </div>
      
     
      
     
    </div>
  );
};

export default Note;
