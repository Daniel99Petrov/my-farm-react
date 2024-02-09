import { useState } from "react";
import { isNotEmpty } from "../../../utils/validation";

export const useCreateProcessingTypeForm = (onSubmit: (formData: { name: string }) => void) => {
    const [formData, setFormData] = useState({
      name: "",
    });
    const [didEdit, setDidEdit] = useState({
      name: false,
    });
    const nameIsInvalid = didEdit.name && !isNotEmpty(formData.name);
  
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
  
    const handleInputBlur = (identifier: string) => {
      setDidEdit((prevEdit) => ({
        ...prevEdit,
        [identifier]: true,
      }));
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      const submittedFormData = {
        name: formData.name,
      };
      onSubmit(submittedFormData);
      (event.target as HTMLFormElement).reset();
    };
  
    return { formData, nameIsInvalid, handleInputChange, handleInputBlur, handleSubmit };
  };