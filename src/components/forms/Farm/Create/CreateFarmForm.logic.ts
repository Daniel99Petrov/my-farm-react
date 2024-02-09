import { useState } from "react";
import { isNotEmpty } from "../../../../utils/validation";

export const useCreateFarmForm = (onSubmit: (formData: {
    name: string;
    latitude: string;
    longitude: string;
  }) => void) => {
    const [formData, setFormData] = useState({
      name: "",
      latitude: "",
      longitude: "",
    });
    const [didEdit, setDidEdit] = useState({
      name: false,
      latitude: false,
      longitude: false,
    });
    const nameIsInvalid = didEdit.name && !isNotEmpty(formData.name);
    const latitudeIsInvalid = didEdit.latitude && !isNotEmpty(formData.latitude);
    const longitudeIsInvalid =
      didEdit.longitude && !isNotEmpty(formData.longitude);
  
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
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      const submittedFormData = {
        name: formData.name,
        latitude: formData.latitude,
        longitude: formData.longitude,
      };
      onSubmit(submittedFormData);
      (event.target as HTMLFormElement).reset();
    }
  
    return { formData, nameIsInvalid, latitudeIsInvalid, longitudeIsInvalid, handleInputChange, handleInputBlur, handleSubmit };
  };