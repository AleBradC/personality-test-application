import React from "react";
import styled from "styled-components";

const TakeTestPage: React.FC = () => {
  return (
    <Container>
      <Header>PERSONALITY TEST</Header>
      <SubHeader>PERSONALITY TEST</SubHeader>
      <Button>PERSONALITY TEST</Button>
      <Footer>PERSONALITY TEST</Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SubHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
  }
`;

const Footer = styled.footer`
  background-color: #f8f9fa;
  padding: 20px;
  width: 100%;
  text-align: center;
`;

export default TakeTestPage;
