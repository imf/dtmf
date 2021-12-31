import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    playTones(tones) {
        console.log('Playing tones: ' + tones)
    }

    render() {
      return (
        <button className="square" onClick={() => this.playTones(this.props.value.tones)}>
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
            {this.renderSquare({key: 1, letters: '', tones: [697, 1209]})}
            {this.renderSquare({key: 2, letters: 'A B C', tones: [697, 1336]})}
            {this.renderSquare({key: 3, letters: 'D E F', tones: [697, 1477]})}
            {this.renderSquare({key: 'A', letters: '', tones: [697, 1633]})}
          </div>
          <div className="key-row">
            {this.renderSquare({key: 4, letters: 'G H I', tones: [770, 1209]})}
            {this.renderSquare({key: 5, letters: 'J K L', tones: [770, 1336]})}
            {this.renderSquare({key: 6, letters: 'M N O', tones: [770, 1477]})}
            {this.renderSquare({key: 'B', letters: '', tones: [770, 1633]})}
          </div>
          <div className="key-row">
            {this.renderSquare({key: 7, letters: 'P Q R S', tones: [852, 1209]})}
            {this.renderSquare({key: 8, letters: 'T U V', tones: [852, 1336]})}
            {this.renderSquare({key: 9, letters: 'W X Y Z', tones: [852, 1477]})}
            {this.renderSquare({key: 'C', letters: '', tones: [852, 1633]})}
          </div>
          <div className="key-row">
            {this.renderSquare({key: '*', letters: '', tones: [941, 1209]})}
            {this.renderSquare({key: 0, letters: 'OPER', tones: [941, 1336]})}
            {this.renderSquare({key: '#', letters: '', tones: [941, 1477]})}
            {this.renderSquare({key: 'D', letters: '', tones: [941, 1633]})}
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
