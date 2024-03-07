import React from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.svg";
import landingPageImg from "../assets/landing-page.png";
import { takeTestPageRoute } from "../routes";
import BasicButton from "../components/BasicButton";
import styled from "styled-components";

const LandingPage: React.FC = () => {
  const navigateTo = useNavigate();

  const redirectToTakeTestPage = () => {
    navigateTo(takeTestPageRoute);
  };

  return (
    <Container>
      <Header>
        <Logo src={logoImg} />
      </Header>
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
          <StyledBasicButton onClick={redirectToTakeTestPage}>
            Test your personality
          </StyledBasicButton>
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

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 90px;
  border-bottom: solid 1px blue;
  padding: 0px 20px;
`;

const Logo = styled.img`
  width: 250px;
  height: 88px;
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

const StyledBasicButton = styled(BasicButton)`
  display: flex;
`;

const Footer = styled.footer`
  background-color: #f8f9fa;
  padding: 20px;
  width: 100%;
  text-align: center;
  margin-top: auto;
`;

export default LandingPage;
