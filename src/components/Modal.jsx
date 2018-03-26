import React, { Component } from 'react';
// import Note from './Note.jsx';
import NewNote from './NewNote.jsx';
import DelNote from './DelNote.jsx';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'block',
      modal: '',
      color: 'red'
    }
  }

  componentDidMount() {
    let color; 
    const modal = document.getElementById('ModalVerse');
    this.props.flag === 'edit' ? color = this.props.note.color : color = 'red';
    this.setState({modal: modal, color: color})
  }

  selectColor = (color) => {
    this.setState({color: color});
  }

  render() {
    let color = this.state.color;
    let modal = this.state.modal || '';
    let that = this;
    window.onclick = e => {
      if (e.target === modal) {
        that.props.close();
      }
    }
    if (this.props.flag === 'del') {
      color = '';
    }
    return (
      // <!-- The Modal --> */
      <div id="ModalVerse" className="modal">
        {/* <!-- Modal content --> */}
        <div className="modal-content">
          <div className="modal-color" style={{backgroundColor: color}}></div>
          <div className="modal-body"> 
            { this.props.flag === 'add' ? <NewNote {...this.props} selectColor={this.selectColor} color={color} /> : null }
            { this.props.flag === 'edit' ? <NewNote {...this.props} selectColor={this.selectColor} color={color} /> : null }
            { this.props.flag === 'del' ? <DelNote {...this.props} /> : null }
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
