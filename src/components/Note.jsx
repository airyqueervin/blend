import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    }
  }

  componentDidMount() {
    this.setState({id: this.props.id})
  }

  render() {
    return (
      <div className="card">
        <div className="note-color" style={{backgroundColor: `${this.props.color}`}}></div>
          <div className="card-header">
            <p className="card-title">{this.props.title}</p>
            <div className="trash icon icon-pencil" onClick={() => this.props.edit(this.state.id)}>
              <i className="fas fa-pencil-alt"></i>
            </div>
            <div className="trash icon" onClick={() => this.props.delete(this.state.id)}>
              <i className="fa fa-trash"></i>
            </div>
          </div>
        <div className="container">
          <ul>
            {this.props.items ? this.props.items.map((item,i) => <li key={i}>{item}</li>) : null}
          </ul>
        </div>
      </div>
    );
  }
}

export default Note;
