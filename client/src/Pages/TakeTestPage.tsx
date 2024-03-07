import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useAddAnswersMutation, useGetQuestionsQuery } from "../redux/api";
import { Answer, Question, QuestionAnswer } from "../types";
import { selectAnswer } from "../redux/reducers/answerSlice";
import Modal from "../components/Modal";
import BasicButton from "../components/BasicButton";
import AnswerButton from "../components/AnswerButton";
import styled from "styled-components";

const TakeTestPage: React.FC = () => {
  const { data: questions } = useGetQuestionsQuery();
  const [addAnswer] = useAddAnswersMutation();

  const dispatch = useAppDispatch();
  const selectedAnswers: Answer[] = useAppSelector(
    (state) => state.answerSlice.answers
  );

  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question>();

  useEffect(() => {
    questions?.filter((question) => {
      if (question.id === currentStep) {
        setCurrentQuestion(question);
      }
    });
  }, [currentStep]);

  if (!questions) {
    return null;
  }

  const handleOpenTest = () => {
    setShowModal(true);
    setCurrentStep(1);
  };

  const handleNextQuestion = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChooseAnswer = (questionId: number, type: string) => {
    dispatch(
      selectAnswer({
        questionId: questionId,
        type: type,
      })
    );
  };

  const handleSubmit = async () => {
    await addAnswer(selectedAnswers);

    setShowModal(false);
  };

  return (
    <Container>
      <BasicButton onClick={handleOpenTest}>Start your test</BasicButton>
      <Modal
        showModal={showModal}
        header={
          <HeaderContainer>
            Question {currentStep} / {questions.length}
          </HeaderContainer>
        }
        body={
          <Body>
            <QuestionContainer>{currentQuestion?.content}</QuestionContainer>
            <AnswersContainer>
              {currentQuestion?.answers?.map(
                (answer: QuestionAnswer, index: number) => (
                  <AnswerButton
                    onClick={() => handleChooseAnswer(currentStep, answer.type)}
                    key={index}
                  >
                    {answer.content}
                  </AnswerButton>
                )
              )}
            </AnswersContainer>
          </Body>
        }
        footer={
          <Footer>
            <BasicButton
              onClick={handlePrevQuestion}
              disabled={currentStep === 1}
            >
              Prev question
            </BasicButton>
            {currentStep === questions.length ? (
              <BasicButton onClick={handleSubmit}> Submit </BasicButton>
            ) : (
              <BasicButton onClick={handleNextQuestion}>
                Next question
              </BasicButton>
            )}
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
