import React from 'react';
import styled from '@emotion/styled';

const theme = {
  primary: '#6B4E71',    // Deep lavender
  secondary: '#8E7C93',  // Muted lavender
  accent: '#F4D03F',     // Warm yellow
  background: '#F5F0F7',  // Light lavender
  text: '#2C3E50',       // Deep blue-gray
  white: '#FFFFFF'
};

interface WelcomeCardProps {
  name: string;
  message?: string;
}

const Card = styled.div`
  background-color: ${theme.white};
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(107, 78, 113, 0.15);
  padding: 30px;
  margin: 20px;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h2`
  color: ${theme.primary};
  margin-bottom: 15px;
  font-size: 1.8em;
  font-weight: 600;
`;

const Message = styled.p`
  color: ${theme.secondary};
  font-size: 1.2em;
  line-height: 1.5;
  margin: 0;
`;

const WelcomeCard: React.FC<WelcomeCardProps> = ({ name, message = "Welcome to our application!" }) => {
  return (
    <Card>
      <Title>Hello, {name}!</Title>
      <Message>{message}</Message>
    </Card>
  );
};

export default WelcomeCard; 