import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useAddAnswersMutation, useGetQuestionsQuery } from "../redux/api";
import { Answer, Question, QuestionAnswer } from "../types";
import { resetAnswers, selectAnswer } from "../redux/reducers/answerSlice";
import { resetStep, setCurrentStep } from "../redux/reducers/stepSlice";
import { resultPage } from "../routes";
import Modal from "./Modal";
import Button from "./Button";
import AnswerButton from "./AnswerButton";
import styled from "styled-components";

export interface ModalTestProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const ModalTest: React.FC<ModalTestProps> = ({ showModal, setShowModal }) => {
  const navigateTo = useNavigate();

  const { data: questions } = useGetQuestionsQuery();
  const [addAnswer] = useAddAnswersMutation();

  const [currentQuestion, setCurrentQuestion] = useState<Question>();

  const dispatch = useAppDispatch();
  const selectedAnswers: Answer[] = useAppSelector(
    (state) => state.answerSlice.answers
  );
  const currentStep: number = useAppSelector(
    (state) => state.stepSlice.currentStep
  );

  useEffect(() => {
    if (questions && currentStep) {
      const question = questions.find(
        (question) => question.id === currentStep
      );
      setCurrentQuestion(question);
    }
  }, [currentStep, questions]);

  if (!questions) {
    return null;
  }

  const handleNextQuestion = () => {
    if (currentStep < questions.length) {
      dispatch(setCurrentStep(currentStep + 1));
    }
  };

  const handlePrevQuestion = () => {
    if (currentStep > 0) {
      dispatch(setCurrentStep(currentStep - 1));
    }
  };

  const handleChooseAnswer = (questionId: number, type: string, id: number) => {
    dispatch(
      selectAnswer({
        questionId: questionId,
        type: type,
        id: id,
      })
    );
  };

  const handleSubmit = async () => {
    await addAnswer(selectedAnswers);

    setShowModal(false);
    navigateTo(resultPage);
    dispatch(resetAnswers());
    dispatch(resetStep());
  };

  const isSelected = (answerId: number) => {
    return selectedAnswers.some((answer) => {
      if (answer.id === answerId && answer.questionId === currentStep)
        return true;
    });
  };

  const hasSelectedAnswerForCurrentQuestion = selectedAnswers.some(
    (answer) => answer.questionId === currentStep
  );

  return (
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
            {currentQuestion?.answers?.map((answer: QuestionAnswer) => (
              <AnswerButton
                onClick={() =>
                  handleChooseAnswer(currentStep, answer.type, answer.id)
                }
                key={answer.id}
                selected={isSelected(answer.id)}
              >
                {answer.content}
              </AnswerButton>
            ))}
            <ErrorContainer> All questions are required </ErrorContainer>
          </AnswersContainer>
        </Body>
      }
      footer={
        <Footer>
          <Button onClick={handlePrevQuestion} disabled={currentStep === 1}>
            Prev question
          </Button>
          {currentStep === questions.length ? (
            <Button
              onClick={handleSubmit}
              disabled={!hasSelectedAnswerForCurrentQuestion}
            >
              Submit
            </Button>
          ) : (
            <Button
              onClick={handleNextQuestion}
              disabled={!hasSelectedAnswerForCurrentQuestion}
            >
              Next question
            </Button>
          )}
        </Footer>
      }
      onClose={() => setShowModal(false)}
    />
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  padding: 20px 20px 20px 0;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  color: ${(props) => props.theme.colors.greyDarker};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const QuestionContainer = styled.div`
  padding: 20px 20px 20px 0;
  line-height: 23px;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
`;

const ErrorContainer = styled.div`
  font-style: italic;
`;

const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;

export default ModalTest;
