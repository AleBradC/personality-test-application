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
  padding: 14px 25px;
  min-width: 226px;
  border: none;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1px;
  background: ${(props) => props.theme.colors.grey};
  border: 1px solid ${(props) => props.theme.colors.grey2};

  &:hover {
    background: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.greyDarker};
  }

  ${(props) =>
    props.selected &&
    css`
      border: 1px solid ${(props) => props.theme.colors.blue};
      color: ${(props) => props.theme.colors.blue};
      font-weight: bold;
    `}
`;

export default AnswerButton;
