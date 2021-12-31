import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {/* TODO */}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square />;
    }
  
    render() {
      const status = 'Initialized.';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="key-row">
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
          </div>
          <div className="key-row">
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
          </div>
          <div className="key-row">
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
          </div>
          <div className="key-row">
            {this.renderSquare('*')}
            {this.renderSquare(0)}
            {this.renderSquare('#')}
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
