import { useState, useEffect } from "react";
import { fetchFarmDetails } from "../../../../services/farmService";
import { Machine } from "../../../../static/types/types";
import { isNotEmpty } from "../../../../utils/validation";

export const useUpdateMachineForm = (
  machine: Machine,
  onSubmit: (updatedData: Partial<Machine>) => void
) => {
  const initialValues: Record<string, string> = {
    registrationNumber: machine.registrationNumber,
  };

  const [formData, setFormData] = useState({
    registrationNumber: machine.registrationNumber || "",
    farmName: "",
  });
  const [didEdit, setDidEdit] = useState({
    registrationNumber: false,
  });
  const registrationNumberIsInvalid =
    didEdit.registrationNumber && !isNotEmpty(formData.registrationNumber);

  useEffect(() => {
    if (machine) {
      const loadFarm = async () => {
        try {
          const farmData = await fetchFarmDetails(machine.farmId);
          setFormData((prevFormData) => ({
            ...prevFormData,
            farmName: farmData.name,
          }));
        } catch (error) {
          console.error("Error loading farm:", error);
        }
      };
      loadFarm();
    }
  }, [machine]);

  const handleInputChange = (identifier: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  };

  function handleInputBlur(identifier: string) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const changedFields = Object.entries(formData).filter(
      ([key, value]) => value !== initialValues[key]
    );
    const submittedFormData = Object.fromEntries(changedFields);

    onSubmit(submittedFormData);
  };

  return {
    formData,
    registrationNumberIsInvalid,
    handleInputChange,
    handleInputBlur,
    handleSubmit,
  };
};
