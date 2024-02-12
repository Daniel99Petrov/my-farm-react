export interface TransferMachineModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (formData: {toFarmId: string}) => void;
    machineId: string | undefined;
    error: string;
  }