import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useAddAnswersMutation, useGetQuestionsQuery } from "../redux/api";
import { Answer, Question, QuestionAnswer } from "../types";
import { selectAnswer } from "../redux/reducers/answerSlice";
import { setCurrentStep } from "../redux/reducers/stepSlice";
import { resultPage } from "../routes";
import Modal from "../components/Modal";
import BasicButton from "../components/BasicButton";
import AnswerButton from "../components/AnswerButton";
import styled from "styled-components";

const TakeTestPage: React.FC = () => {
  const navigateTo = useNavigate();

  const { data: questions } = useGetQuestionsQuery();
  const [addAnswer] = useAddAnswersMutation();

  const [showModal, setShowModal] = useState(false);
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

  const handleOpenTest = () => {
    setShowModal(true);
  };

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

  const redirectToTakeTestPage = () => {
    navigateTo(resultPage);
  };

  const handleSubmit = async () => {
    await addAnswer(selectedAnswers);

    setShowModal(false);
    redirectToTakeTestPage();
  };

  const isSelected = (answerId: number) => {
    return selectedAnswers.some((answer) => {
      if (answer.id === answerId && answer.questionId === currentStep)
        return true;
    });
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

const QuestionContainer = styled.div`
  padding: 20px;
`;

const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;

export default TakeTestPage;
