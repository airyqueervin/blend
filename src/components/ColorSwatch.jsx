import React from 'react';

const colors = ['red', 'green', 'orange', 'blue'];

const ColorSwatch = props => (
  <div id="Colors" sytle={{textAlign: 'center'}}>
    {colors.map(color => <div onClick={() => { props.selectColor(color); props.handleColorChange()}} id="square" style={{backgroundColor: color, border: props.color === color ? '2px solid black' : null}} ></div> )}
  </div>
);

export default ColorSwatch;
