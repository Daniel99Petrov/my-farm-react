import { Machine } from "../../../../static/types/types";

export interface TransferMachineFormProps {
    machine: Machine;
    onSubmit: (updatedData: { toFarmId: string }) => void;
  }