import React, { Component } from 'react';
import ColorSwatch from './ColorSwatch.jsx';

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listValue: '',
      title: '',
      change: false
    }
  }

  componentDidMount() {
    if (this.props.flag === 'edit') {
      const note = this.props.note;
      const list = note.items.join('\n');
      this.setState({title: note.title, listValue: list, change: false})
    }
  }

  handleListChange = e => {
    this.setState({listValue: e.target.value, change: true})
  }

  handleTitleChange = e => {
    this.setState({title: e.target.value, change: true})
  }

  handleColorChange = () => {
    this.setState({change: true})
  }

  handleSubmit = e => {
    const items = this.state.listValue.split('\n');
    // parse the text body by new line and create a new list of items
    if (this.props.flag === 'edit') {
      this.props.updateNote(this.state.title, items, this.props.color)
    } else {
      this.props.addNote(this.state.title, items, this.props.color);
    }
  }

  render() {
    return (
      <div>
        <br/>
        <ColorSwatch handleColorChange={this.handleColorChange} selectColor={this.props.selectColor} color={this.props.color} />
        <br/>
        <form onSubmit={this.handleSubmit}>
          <input id="title" type="text" value={this.state.title} onChange={this.handleTitleChange} placeholder="Untitled" />
          <br/>
          <br/>
          <textarea rows="30" cols="50" value={this.state.listValue} onChange={this.handleListChange} placeholder="Just start typing here" />
        </form>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={this.props.close}>Cancel</button>
          {this.props.flag === 'add' ? this.state.listValue && this.state.title ? <button className="btn btn-add" onClick={this.handleSubmit}>Add</button> : <button className="btn btn-add-no">Add</button> : null}
          {this.props.flag === 'edit' ? this.state.change ? <button className="btn btn-add" onClick={this.handleSubmit}>Save</button> : <button className="btn btn-add-no">Save</button> : null}
        </div>
      </div>
    );
  }
}

export default NewNote;
