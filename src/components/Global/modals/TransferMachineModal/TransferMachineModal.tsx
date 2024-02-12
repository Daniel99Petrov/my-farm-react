import {
  TransferMachineModalProps,

} from "./transferMachineModal.static";
import {
  ModalContent,
  ModalOverlay,
} from "../ConfirmModal/confirmModal.styles";
import TransferMachineForm from "../../../forms/Machine/Transfer/TransferMachineForm";
import useMachineDetails from "../../../../hooks/Machine/UseMachineDetails";
import { RedButton } from "../../../../ui_elements/CommonStyledElements";
import ErrorMessage from "../../../forms/Global/ErrorMessage/ErrorMessage";

const TransferMachineModal: React.FC<TransferMachineModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  machineId,
  error,
}) => {
  const { machine } = useMachineDetails(machineId);
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      {machine && (
        <ModalContent>
          <h2>Transfer Machine</h2>
          <TransferMachineForm machine={machine} onSubmit={onSubmit} />
          <RedButton onClick={onClose}>Cancel</RedButton>
          {error && <ErrorMessage message={error} />}
        </ModalContent>
      )}
    </ModalOverlay>
  );
};

export default TransferMachineModal;
