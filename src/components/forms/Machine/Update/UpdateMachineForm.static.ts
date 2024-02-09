import { Machine } from "../../../../static/types/types";

export interface UpdateMachineFormProps {
    machine: Machine;
    onSubmit: (updatedData: Partial<Machine>) => void;
  }