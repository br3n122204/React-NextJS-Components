import React from 'react';
import styled from '@emotion/styled';
import WelcomeCard from './components/WelcomeCard';
import Counter from './components/Counter';
import StudentInfo from './components/StudentInfo';

// Theme colors
const theme = {
  primary: '#6B4E71',    // Deep lavender
  secondary: '#8E7C93',  // Muted lavender
  accent: '#F4D03F',     // Warm yellow
  background: '#F5F0F7',  // Light lavender
  text: '#2C3E50',       // Deep blue-gray
  white: '#FFFFFF'
};

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: ${theme.background};
  min-height: 100vh;
`;

const Section = styled.section`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: ${theme.primary};
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5em;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

function App() {
  return (
    <AppContainer>
      <Title>React Components Showcase</Title>
      <Section>
        <WelcomeCard name="Student" message="Welcome to our uniquely styled React Components Demo!" />
      </Section>
      
      <Section>
        <Counter />
      </Section>
      
      <Section>
        <StudentInfo />
      </Section>
    </AppContainer>
  );
}

export default App;
