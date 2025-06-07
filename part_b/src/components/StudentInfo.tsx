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

interface StudentData {
  firstName: string;
  lastName: string;
  email: string;
  studentId: string;
}

const FormContainer = styled.div`
  background-color: ${theme.white};
  border-radius: 15px;
  padding: 35px;
  margin: 20px;
  max-width: 450px;
  box-shadow: 0 8px 20px rgba(107, 78, 113, 0.15);
`;

const Title = styled.h2`
  color: ${theme.primary};
  margin-bottom: 25px;
  font-size: 1.8em;
  font-weight: 600;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: ${theme.text};
  font-weight: 500;
  font-size: 1.1em;
`;

const Input = styled.input`
  padding: 12px;
  border: 2px solid ${theme.secondary}40;
  border-radius: 8px;
  font-size: 1em;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${theme.primary};
    box-shadow: 0 0 0 3px ${theme.primary}20;
  }

  &:hover {
    border-color: ${theme.primary}80;
  }
`;

const SubmitButton = styled.button`
  background-color: ${theme.accent};
  color: ${theme.text};
  border: none;
  border-radius: 8px;
  padding: 14px;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 10px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

const StudentInfo: React.FC = () => {
  const [formData, setFormData] = useState<StudentData>({
    firstName: '',
    lastName: '',
    email: '',
    studentId: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted student data:', formData);
    // Here you would typically send the data to a server
  };

  return (
    <FormContainer>
      <Title>Student Information</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="Enter your first name"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Enter your last name"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="studentId">Student ID</Label>
          <Input
            type="text"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            required
            placeholder="Enter your student ID"
          />
        </FormGroup>
        <SubmitButton type="submit">Submit Information</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default StudentInfo; 