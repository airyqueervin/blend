import React from 'react';
import Note from './Note.jsx';

const NotesList = props => (
  <div className="card-container">
    {props.notes.map((note, i) => <Note key={i} title={note.title} items={note.items} color={note.color} id={i} delete={props.delete} edit={props.edit} />)}
  </div>
);

export default NotesList;
