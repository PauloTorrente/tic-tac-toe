import styled, { css } from 'styled-components';

const Ficha = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.value === 'O' && css`
    background-color: blue;
    border-radius: 50%;
  `}

  ${props => props.value === 'X' && css`
    background-color: red;
  `}
`;

export default Ficha;
