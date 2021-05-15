import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
      }
    render() {
      return (
          
        <button className="square" onClick={() => this.setState({value: 'X'})}>
          {this.state.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.n)
        this.state = {
          squares: Array(this.props.n).fill(null),
        };
      }
    renderSquare(i) {
      return(
        <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
         />
      );
    }
  
    render() {
        const status = 'Next player: ' + this.props.n;
        var list = []
        for(var r = 0; r < this.props.n; r++){
            var next = []
            next.push(<div className="board-row"></div>)
            for(var c = 0; c < this.props.n; c++){
                next.push(this.renderSquare(r + c * r))
            }
            list.push(next)
        }
      return (
        <div>
          <div className="status">{status}</div>
            {list}
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board n={4}/>
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  