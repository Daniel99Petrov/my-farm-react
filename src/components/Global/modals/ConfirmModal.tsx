import styled from "styled-components";
import {
  GreenButton,
  RedButton,
} from "../../../ui_elements/CommonStyledElements";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  color: brown;
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
}

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  children,
}: LogoutModalProps): JSX.Element | null {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <p>{children}</p>
        <ButtonContainer>
          <RedButton onClick={onConfirm}>Yes</RedButton>
          <GreenButton onClick={onClose}>No</GreenButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
}
