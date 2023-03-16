import styled from 'styled-components';

export const Button = styled.div`
  display: inline-block;
  margin: 0 auto;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://cdn-icons-png.flaticon.com/512/2810/2810409.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;
