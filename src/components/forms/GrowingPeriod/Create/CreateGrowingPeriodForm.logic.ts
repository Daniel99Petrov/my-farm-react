import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useCrops from "../../../../hooks/Crop/UseCrops";
import useProcessingTypes from "../../../../hooks/ProcessingType/UseProcessingTypes";
import { fetchMachinesByFieldId } from "../../../../services/machineService";
import { Machine } from "../../../../static/types/types";

export const useCreateGrowingPeriodFormLogic = (
    onSubmit: (formData: {
      cropId: string;
      machineId: string;
      processingTypeId: string;
      date: Date;
    }) => void
  ) => {
    const { fieldId } = useParams();
    const [machines, setMachines] = useState<Machine[]>();
    const [formData, setFormData] = useState({
      cropId: "",
      machineId: "",
      processingTypeId: "",
      date: new Date(),
    });
    const { crops } = useCrops();
    const { processingTypes } = useProcessingTypes();
  
    useEffect(() => {
      const loadMachines = async () => {
        try {
          const machinesData = await fetchMachinesByFieldId(fieldId);
          setMachines(machinesData);
        } catch (error) {
          console.error("Error loading machines:", error);
        }
      };
  
      loadMachines();
    }, [fieldId]);
  
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
  
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      const submittedFormData = {
        cropId: formData.cropId,
        machineId: formData.machineId,
        processingTypeId: formData.processingTypeId,
        date: formData.date,
      };
      onSubmit(submittedFormData);
      (event.target as HTMLFormElement).reset();
    }
  
    return {
      crops,
      machines,
      processingTypes,
      formData,
      handleSelectChange,
      handleDateChange,
      handleSubmit,
    };
  };