import React, { useState } from "react";
import landingPageMascot from "../assets/landing-page-mascot.svg";

import BasicButton from "../components/Button";
import ModalTest from "../components/ModalTest";
import {
  PersonalityType,
  PersonalityTypeVariants,
} from "../components/PersonalityType";
import styled from "styled-components";

const LandingPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenTest = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <UpperContainer>
        <LeftContainer>
          <Title> Discover who you truly are </Title>
          <SubTitle>
            A personality test to know yourself and to enhance your life and
            relationships.
          </SubTitle>
          <BasicButton onClick={handleOpenTest}>Start your test</BasicButton>
          <ModalTest showModal={showModal} setShowModal={setShowModal} />
        </LeftContainer>
        <RightContainer>
          <Image src={landingPageMascot} />
        </RightContainer>
      </UpperContainer>
      <LowerContainer>
        <Title> Find out if you are an introvert or extrovert </Title>
        <TypeContainer>
          <PersonalityType
            variant={PersonalityTypeVariants.INTROVERT}
            name={"Introvert"}
          />
          <PersonalityType
            variant={PersonalityTypeVariants.EXTROVERT}
            name={"Extrovert"}
          />
        </TypeContainer>
      </LowerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background-color: ${(props) => props.theme.colors.black};
  height: 100vh;
  width: 100%;
`;

const UpperContainer = styled.div`
  display: flex;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 400px;
  height: 320px;
`;

const Image = styled.img`
  width: 320px;
  height: 320px;
`;

const RightContainer = styled.div``;

const Title = styled.h1`
  font-size: 32px;
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: ${(props) => props.theme.colors.white};
`;

const SubTitle = styled.p`
  font-size: 18px;
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: ${(props) => props.theme.colors.white};
`;

const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TypeContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export default LandingPage;
