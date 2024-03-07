import React, { useState } from "react";
import landingPageImg from "../assets/landing-page.png";
import BasicButton from "../components/BasicButton";
import ModalTest from "../components/ModalTest";
import Header from "../components/Header";
import styled from "styled-components";

const LandingPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenTest = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <Header />
      <Content>
        <LeftContent>
          <Image src={landingPageImg} />
        </LeftContent>
        <RightContent>
          <Title> Discover who you truly are </Title>
          <SubTitle>
            A personality test to know yourself and to enhance your life and
            relationships.
          </SubTitle>
          <BasicButton onClick={handleOpenTest}>Start your test</BasicButton>
          <ModalTest showModal={showModal} setShowModal={setShowModal} />
        </RightContent>
      </Content>
      <Footer>&copy; 2024 Personality test</Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white2};
`;

const Content = styled.div`
  display: flex;
`;

const LeftContent = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 30px 30px 30px 80px;
`;

const Title = styled.h1`
  font-size: 46px;
  font-family: Newsreader Display, sans-serif;
`;

const SubTitle = styled.p`
  font-size: 28px;
  font-family: Kumbh Sans, sans-serif;
`;

const Footer = styled.footer`
  background-color: #f8f9fa;
  padding: 20px;
  width: 100%;
  text-align: center;
  margin-top: auto;
`;

export default LandingPage;
