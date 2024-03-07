import { ReactNode } from "react";
import styled from "styled-components";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  className?: string;
  isLoading?: boolean;
}

const BasicButton: React.FC<ButtonProps> = ({
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

  &:hover {
    background: ${(props) => props.theme.colors.blueLight};
    color: ${(props) => props.theme.colors.greyDarker};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default BasicButton;
