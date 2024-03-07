import React from "react";
import { useNavigate } from "react-router-dom";
import { takeTestPageRoute } from "../routes";
import {
  useDeleteAllAnswersMutation,
  useGetAnswerResultQuery,
} from "../redux/api";
import BasicButton from "../components/BasicButton";
import styled from "styled-components";

const ResultPage: React.FC = () => {
  const navigateTo = useNavigate();
  const { data } = useGetAnswerResultQuery();
  const [deleteAllAnswers, { isSuccess }] = useDeleteAllAnswersMutation();

  const redirectToTakeTestPage = () => {
    navigateTo(takeTestPageRoute);
  };

  if (isSuccess) {
    redirectToTakeTestPage();
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
