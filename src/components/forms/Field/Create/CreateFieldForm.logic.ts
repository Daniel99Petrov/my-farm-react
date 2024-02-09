import { useState } from "react";
import useFarms from "../../../../hooks/Farm/UseFarms";
import useSoils from "../../../../hooks/Soil/UseSoils";
import { isNotEmpty } from "../../../../utils/validation";

export const useCreateFieldFormLogic = (
    onSubmit: (formData: {
      name: string;
      coordinates: string;
      farmId: string;
      soilId: string;
    }) => void
  ) => {
    const [formData, setFormData] = useState({
      name: "",
      coordinates: "",
      farmId: "",
      soilId: "",
    });
    const [didEdit, setDidEdit] = useState({
      name: false,
      coordinates: false,
      farmId: false,
      soilId: false,
    });
    const nameIsInvalid = didEdit.name && !isNotEmpty(formData.name);
    const coordinatesAreInvalid = false;
  
    const { soils } = useSoils();
    const { farms } = useFarms();
  
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
  
    const handleSelectChange = (identifier: string, value: string) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [identifier]: value,
      }));
    };
  
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      const submittedFormData = {
        name: formData.name,
        coordinates: formData.coordinates,
        farmId: formData.farmId,
        soilId: formData.soilId,
      };
      onSubmit(submittedFormData);
      (event.target as HTMLFormElement).reset();
    }
  
    return {
      farms,
      soils,
      formData,
      nameIsInvalid,
      coordinatesAreInvalid,
      handleInputChange,
      handleSelectChange,
      handleInputBlur,
      handleSubmit,
    };
  };