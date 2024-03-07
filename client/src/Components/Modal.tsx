import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

export interface ModalProps {
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  showModal: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  header,
  body,
  footer,
  showModal,
  onClose,
}) => {
  if (!showModal) {
    return null;
  }

  const portalRoot = document.getElementById("portal");

  return portalRoot
    ? ReactDOM.createPortal(
        <BlurWrapper>
          <Container>
            <Header>
              {header}
              <CloseButton type="button" onClick={onClose}>
                X
              </CloseButton>
            </Header>
            <Body> {body} </Body>
            <Footer> {footer} </Footer>
          </Container>
        </BlurWrapper>,
        portalRoot
      )
    : null;
};

const BlurWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: ${(props) => props.theme.zIndex.others};
  backdrop-filter: blur(32px);
`;

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: auto;
  max-width: 660px;
  width: 100%;
  height: 660px;
  padding: 20px;
  box-shadow: 0 5px 10px 2px rgba(195, 192, 192, 0.5);

  border-radius: 4px;

  z-index: ${(props) => props.theme.zIndex.header};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 6px;
  display: flex;
  border: none;
  background: none;
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.beige};
`;

const Footer = styled.div`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.beige};
`;

export default Modal;
