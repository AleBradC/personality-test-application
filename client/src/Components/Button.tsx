import { ReactNode } from "react";
import styled from "styled-components";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  className?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
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
  padding: 12px 32px;
  min-width: 200px;

  border: none;
  border-radius: 30px;
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  letter-spacing: 1px;
  background-color: ${(props) => props.theme.colors.blue};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default Button;
