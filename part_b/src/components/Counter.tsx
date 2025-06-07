import React, { useState } from 'react';
import styled from '@emotion/styled';

const theme = {
  primary: '#6B4E71',    // Deep lavender
  secondary: '#8E7C93',  // Muted lavender
  accent: '#F4D03F',     // Warm yellow
  background: '#F5F0F7',  // Light lavender
  text: '#2C3E50',       // Deep blue-gray
  white: '#FFFFFF'
};

const CounterContainer = styled.div`
  background-color: ${theme.white};
  border-radius: 15px;
  padding: 30px;
  margin: 20px;
  text-align: center;
  max-width: 300px;
  box-shadow: 0 8px 20px rgba(107, 78, 113, 0.15);
`;

const CountDisplay = styled.div`
  font-size: 3.5em;
  color: ${theme.primary};
  margin: 25px 0;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(107, 78, 113, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background-color: ${props => props.variant === 'secondary' ? theme.secondary : theme.accent};
  color: ${props => props.variant === 'secondary' ? theme.white : theme.text};
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 1.1em;
  font-weight: 600;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Title = styled.h2`
  color: ${theme.primary};
  margin-bottom: 20px;
  font-size: 1.8em;
  font-weight: 600;
`;

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <CounterContainer>
      <Title>Counter</Title>
      <CountDisplay>{count}</CountDisplay>
      <ButtonContainer>
        <Button onClick={decrement}>-</Button>
        <Button variant="secondary" onClick={reset}>Reset</Button>
        <Button onClick={increment}>+</Button>
      </ButtonContainer>
    </CounterContainer>
  );
};

export default Counter; 