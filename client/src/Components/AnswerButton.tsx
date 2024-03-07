import { ReactNode } from "react";
import styled, { css } from "styled-components";

export interface AnswerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode | any;
  className?: string;
  isLoading?: boolean;
  isSelected?: boolean;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({
  children,
  className,
  isLoading,
  isSelected,
  ...htmlButtonProps
}) => {
  return (
    <ButtonContainer
      className={className}
      {...htmlButtonProps}
      isSelected={isSelected}
    >
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<{ isSelected?: boolean }>`
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

  ${(props) =>
    props.isSelected &&
    css`
      border: 1px bold red;
    `}
`;

export default AnswerButton;
