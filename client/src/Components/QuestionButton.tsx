import { ReactNode } from "react";
import styled from "styled-components";

export interface QuestionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  className?: string;
  isLoading?: boolean;
}

export const QuestionButton: React.FC<QuestionButtonProps> = ({
  children,
  className,
  isLoading,
  ...htmlButtonProps
}) => {
  return (
    <ButtonContainer className={className} {...htmlButtonProps}>
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  padding: 10px 25px;
  min-width: 226px;

  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  letter-spacing: 1px;

  :hover {
  }

  :disabled {
    cursor: not-allowed;
  }
`;
