import React from 'react';

const ColorSwatch = props => (
  <div id="Colors" sytle={{textAlign: 'center'}}>
    <div onClick={() => { props.selectColor('red'); props.handleColorChange()}} id="square" style={{backgroundColor: 'red', border: props.color === 'red' ? '2px solid black' : null}} ></div>
    <div onClick={() => { props.selectColor('green'); props.handleColorChange()}} id="square" style={{backgroundColor: 'green', border: props.color === 'green' ? '2px solid black' : null}} ></div>
    <div onClick={() => { props.selectColor('orange'); props.handleColorChange()}} id="square" style={{backgroundColor: 'orange', border: props.color === 'orange' ? '2px solid black' : null}} ></div>
    <div onClick={() => { props.selectColor('blue'); props.handleColorChange()}} id="square" style={{backgroundColor: 'blue', border: props.color === 'blue' ? '2px solid black' : null}} ></div>
  </div>
);

export default ColorSwatch;
