import React from 'react';
import styled from 'styled-components';
import Square from './Square.jsx';
import './styles/App.css';

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 5px;
  margin: 0 auto;
`;

const Board = ({ squares, onClick }) => (
  <div className="BoardContainer">
    {squares.map((square, index) => (
      <Square key={index} value={square} onClick={() => onClick(index)} />
    ))}
  </div>
);

export default Board;
