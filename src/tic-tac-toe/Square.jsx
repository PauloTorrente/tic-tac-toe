import React from 'react';
import styled from 'styled-components';
import Ficha from './Ficha.jsx';
import './styles/App.css';

const SquareButton = styled.button`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Square = ({ value, onClick }) => (
  <button className="SquareButton" onClick={onClick}>
    {value && <Ficha value={value} />}
  </button>
);

export default Square;
