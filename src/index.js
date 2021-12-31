import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
      return (
        <button className="square">
            <div className="letters">{this.props.value.letters}</div>
            <div>{this.props.value.key}</div>
          
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i}/>;
    }
  
    render() {
      const status = 'Initialized.';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="key-row">
            {this.renderSquare({key: 1, letters: ''})}
            {this.renderSquare({key: 2, letters: 'A B C'})}
            {this.renderSquare({key: 3, letters: 'D E F'})}
          </div>
          <div className="key-row">
            {this.renderSquare({key: 4, letters: 'G H I'})}
            {this.renderSquare({key: 5, letters: 'J K L'})}
            {this.renderSquare({key: 6, letters: 'M N O'})}
          </div>
          <div className="key-row">
            {this.renderSquare({key: 7, letters: 'P Q R S'})}
            {this.renderSquare({key: 8, letters: 'T U V'})}
            {this.renderSquare({key: 9, letters: 'W X Y Z'})}
          </div>
          <div className="key-row">
            {this.renderSquare({key: '*', letters: ''})}
            {this.renderSquare({key: 0, letters: 'OPER'})}
            {this.renderSquare({key: '#', letters: ''})}
          </div>
        </div>
      );
    }
  }
  
  class Keypad extends React.Component {
    render() {
      return (
        <div className="keypad">
          <div className="keypad-board">
            <Board />
          </div>
          <div className="keypad-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Keypad />,
    document.getElementById('root')
  );
