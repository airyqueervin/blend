import React from 'react';

const DelNote = props => (
  <div>
    <div>
      <h1>Delete Note</h1>
      <p>Are you sure you want to delete this note?</p>
    </div>
    <div className="modal-footer">
        <button className="btn-cancel" onClick={props.close}>Cancel</button>
        <button className="btn btn-add" onClick={props.delete}>Delete</button>
      </div>
  </div>
);

export default DelNote;
