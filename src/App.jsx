import React, { Component } from 'react';
import NotesList from './components/NotesList.jsx';
import Modal from './components/Modal.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      flag: '',
      notes: [ {title: 'Example', items: [1, 2, 3, 4, 5], color: 'red'} ],
      id: '',
      currNote: ''
    };
  }

  openModal = (flag, id='') => {
    const note = this.state.notes[id];
    this.setState({modal: !this.state.modal, flag: flag, id: id, currNote: note})
  }

  closeModal = () => {
    this.setState({modal: !this.state.modal})
  }

  addNote = (title, items, color) => {
    const note = {
      title: title,
      items: items,
      color: color
    }
    const notes = this.state.notes;
    notes.push(note);
    this.setState({notes: notes});
    this.closeModal()
  }

  updateNote = (title, items, color) => {
    const note = {
      title: title,
      items: items,
      color: color
    }
    const notes = this.state.notes;
    notes[this.state.id] = note;
    this.setState({notes: notes});
    this.closeModal()
  }

  deleteNote = () => {
    this.state.notes.splice(this.state.id, 1);
    this.setState({notes: this.state.notes, modal: !this.state.modal})
  }
  
  checkDelete = (id) => {
    this.openModal('del', id)
  }

  editNote = (id) => {
    this.openModal('edit', id)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome To Blend Notes</h1>
          <button className="Add-note btn" onClick={() => this.openModal('add')}>+ Add Note</button>
        </header>
        <NotesList delete={this.checkDelete} notes={this.state.notes} edit={this.editNote} />
        {this.state.modal ? <Modal addNote={this.addNote} updateNote={this.updateNote} close={this.closeModal} flag={this.state.flag} delete={this.deleteNote} edit={this.editNote} note={this.state.currNote} /> : null }
      </div>
    );
  }
}

export default App;
