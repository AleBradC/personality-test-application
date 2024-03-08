import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useDeleteAllAnswersMutation,
  useGetAnswersResultQuery,
} from "../redux/api";
import { landingPageRoute } from "../routes";
import BasicButton from "../components/Button";
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
      <div> {data?.result} </div>
      <div>
        <p> Reset and retry </p>
        <BasicButton onClick={handleRetryTest}> Retry </BasicButton>
      </div>
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

const Footer = styled.footer`
  background-color: #f8f9fa;
  padding: 20px;
  width: 100%;
  text-align: center;
  margin-top: auto;
`;

export default ResultPage;
