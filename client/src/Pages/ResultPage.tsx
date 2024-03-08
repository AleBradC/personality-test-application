import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useDeleteAllAnswersMutation,
  useGetAnswersResultQuery,
} from "../redux/api";
import { landingPageRoute } from "../routes";
import { PERSONALITY_TYPE } from "../constants";
import {
  PersonalityType,
  PersonalityTypeVariants,
} from "../components/PersonalityType";
import BasicButton from "../components/Button";
import content from "../content.json";
import styled from "styled-components";

const ResultPage: React.FC = () => {
  const navigateTo = useNavigate();
  const { data } = useGetAnswersResultQuery();
  const [deleteAllAnswers, { isSuccess }] = useDeleteAllAnswersMutation();

  if (isSuccess) {
    navigateTo(landingPageRoute);
  }

  const handleRetryTest = async () => {
    await deleteAllAnswers();
  };

  return (
    <Container>
      <UpperContainer>
        <Title> {content.resultPage.title} </Title>
        <SubTitle>
          {content.resultPage.result} {data?.result}
        </SubTitle>
        <PersonalityType
          variant={
            data?.result === PERSONALITY_TYPE.INTROVERT
              ? PersonalityTypeVariants.INTROVERT
              : PersonalityTypeVariants.EXTROVERT
          }
        />
      </UpperContainer>
      <LowerContainer>
        <Content>
          {data?.result === PERSONALITY_TYPE.INTROVERT
            ? content.resultPage.introvert
            : content.resultPage.extrovert}
        </Content>
        <BasicButton onClick={handleRetryTest}>
          {content.resultPage.buttons.retry}
        </BasicButton>
      </LowerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  background-color: ${(props) => props.theme.colors.black};
  height: 100vh;
  width: 100%;
`;

const UpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 46px;
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: ${(props) => props.theme.colors.white};
  margin: 10px;
`;

const SubTitle = styled.p`
  font-size: 26px;
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: ${(props) => props.theme.colors.blue};
  margin: 0 0 24px 0;
`;

const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`;

const Content = styled.p`
  font-size: 18px;
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: ${(props) => props.theme.colors.white};
`;

export default ResultPage;
