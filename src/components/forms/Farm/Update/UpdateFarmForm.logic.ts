import { useState } from "react";
import { isNotEmpty } from "../../../../utils/validation";
import { Farm } from "../../../../static/types/types";

export const useUpdateFarmForm = (farm: Farm, onSubmit: (formData: Partial<Farm>) => void) => {
    const initialValues: Record<string, string> = {
      name: farm.name,
    };
    const [formData, setFormData] = useState({
        name: farm.name || "",
    latitude: farm.location.coordinates[1].toString() || "",
    longitude: farm.location.coordinates[0].toString() || "",
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
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const changedFields = Object.entries(formData).filter(
        ([key, value]) => value !== initialValues[key]
      );
      const submittedFormData = Object.fromEntries(changedFields);
  
      onSubmit(submittedFormData);
    };
  
    return { formData, nameIsInvalid, latitudeIsInvalid, longitudeIsInvalid, handleInputChange, handleInputBlur, handleSubmit };
  };