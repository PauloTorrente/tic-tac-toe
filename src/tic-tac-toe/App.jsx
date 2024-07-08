import React, { useState } from 'react';
import styled from 'styled-components';
import Board from './Board';
import './styles/App.css';

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const PlayerTurn = styled.div`
  font-size: 1.5rem;
  margin: 20px 0;
  color: ${props => props.turn === 'O' ? 'blue' : 'red'};
`;

const TicTacToeApp = () => {
  const [turn, setTurn] = useState('O');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = squares.slice();
    newSquares[index] = turn;
    setSquares(newSquares);
    setWinner(calculateWinner(newSquares));
    setTurn(turn === 'O' ? 'X' : 'O');
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return squares.every(square => square) ? 'Draw' : null;
  };

  return (
    <div className="AppContainer">
      <h1>Tic Tac Toe</h1>
      <div className={`PlayerTurn ${turn === 'O' ? 'blue' : 'red'}`}>
        {winner ? (winner === 'Draw' ? 'Empate' : `Ganador: ${winner}`) : `Turno de: ${turn === 'O' ? '🔵' : '🟥'}`}
      </div>
      <Board squares={squares} onClick={handleClick} />
    </div>
  );
};

export default TicTacToeApp;
