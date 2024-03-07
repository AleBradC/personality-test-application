import { ReactNode } from "react";
import styled, { css } from "styled-components";

export interface AnswerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode | any;
  className?: string;
  isLoading?: boolean;
  selected: any;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({
  children,
  className,
  isLoading,
  selected,
  ...htmlButtonProps
}) => {
  return (
    <ButtonContainer
      className={className}
      selected={selected}
      {...htmlButtonProps}
    >
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<{ selected: boolean }>`
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
    props.selected &&
    css`
      border: 1px solid red;
    `}
`;

export default AnswerButton;
