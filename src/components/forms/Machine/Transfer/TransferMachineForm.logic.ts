import { useState } from "react";
import useFarms from "../../../../hooks/Farm/UseFarms";
import { Machine } from "../../../../static/types/types";

export const useTransferMachineForm = (
    machine: Machine,
    onSubmit: (formData: { toFarmId: string }) => void
  ) => {
    const [toFarmId, setToFarmId] = useState(machine.farmId);
    const { farms } = useFarms();
  
    const handleSelectChange = ( value: string) => {
      setToFarmId(value);
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit({ toFarmId });
    };
  
    return {
      farms,
      handleSelectChange,
      handleSubmit,
    };
  };