import { useState, useEffect } from "react";
import { registerLocale } from "react-datepicker";
import en from "date-fns/locale/en-US";
import { useParams } from "react-router-dom";
import useProcessingTypes from "../../../../hooks/ProcessingType/UseProcessingTypes";
import { fetchMachinesByGrowingPeriodId } from "../../../../services/machineService";
import { Machine } from "../../../../static/types/types";


registerLocale("en", en);

export const useCreateProcessingForm = (onSubmit: (formData: {
  processingTypeId: string;
  machineId: string;
  date: Date;
}) => void) => {
  const { growingPeriodId } = useParams();
  const [machines, setMachines] = useState<Machine[]>();
  const [formData, setFormData] = useState({
    processingTypeId: "",
    machineId: "",
    date: new Date(),
  });

  const { processingTypes } = useProcessingTypes();

  useEffect(() => {
    const loadMachines = async () => {
      try {
        const machinesData = await fetchMachinesByGrowingPeriodId(growingPeriodId);
        setMachines(machinesData);
      } catch (error) {
        console.error("Error loading machines:", error);
      }
    }; 

    loadMachines()
  }, [growingPeriodId]);

  const handleSelectChange = (identifier: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [identifier]: value,
    }));
  };

  const handleDateChange = (date: Date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: date,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(formData);
    (event.target as HTMLFormElement).reset();
  };

  return { formData, processingTypes, machines, handleSelectChange, handleDateChange, handleSubmit };
};