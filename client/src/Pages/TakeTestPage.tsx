import React, { useState } from "react";
import { useGetQuestionsQuery } from "../redux/api";
import { Question, QuestionAnswer } from "../types";
import Modal from "../components/Modal";
import BasicButton from "../components/BasicButton";
import AnswerButton from "../components/AnswerButton";
import styled from "styled-components";

const TakeTestPage: React.FC = () => {
  const {
    data: questions,
    isLoading,
    isFetching,
    isError,
  } = useGetQuestionsQuery();

  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  if (!questions) {
    return null;
  }

  const handleNextQuestion = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Container>
      <BasicButton onClick={() => setShowModal(true)}>
        Start your test
      </BasicButton>
      <Modal
        showModal={showModal}
        header={
          <HeaderContainer>
            Question {currentStep + 1} / {questions.length}
          </HeaderContainer>
        }
        body={questions.map((question: Question) => (
          <Body key={question.id}>
            <QuestionContainer>{question.content}</QuestionContainer>
            <AnswersContainer>
              {question.answers.map((answer: QuestionAnswer, index: number) => (
                <AnswerButton key={index}>{answer.content}</AnswerButton>
              ))}
            </AnswersContainer>
          </Body>
        ))}
        footer={
          <Footer>
            <BasicButton
              onClick={handlePrevQuestion}
              disabled={currentStep === 0}
            >
              Prev question
            </BasicButton>
            <BasicButton onClick={handleNextQuestion}>
              {currentStep === questions.length - 1 ? "Submit" : "Next"}
            </BasicButton>
          </Footer>
        }
        onClose={() => setShowModal(false)}
      />
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

const HeaderContainer = styled.div`
  width: 100%;
`;

const Body = styled.div``;
const QuestionContainer = styled.div``;
const AnswersContainer = styled.div``;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;

export default TakeTestPage;
