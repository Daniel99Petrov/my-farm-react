import {
  GreenButton,
  RedButton,
} from "../../../../ui_elements/CommonStyledElements";
import { LogoutModalProps } from "./confirmModal.static";
import { ModalOverlay, ModalContent, ButtonContainer } from "./confirmModal.styles";

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
          <RedButton onClick={onConfirm}>Logout</RedButton>
          <GreenButton onClick={onClose}>Cancel</GreenButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
}
