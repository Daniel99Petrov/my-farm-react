import { useState } from "react";
import { Field } from "../../../../static/types/types";
import { isNotEmpty } from "../../../../utils/validation";
import useFarms from "../../../../hooks/Farm/UseFarms";
import useSoils from "../../../../hooks/Soil/UseSoils";

export const useUpdateFieldForm = (
  field: Field,
  onSubmit: (formData: Partial<Field>) => void
) => {
  const initialValues: Record<string, string> = {
    name: field.name,
    coordinates: JSON.stringify(field.borders.coordinates),
  };
  const [formData, setFormData] = useState({
    name: field.name,
    coordinates: JSON.stringify(field.borders.coordinates),
    farmId: field.farmId,
    soilId: field.soilId,
  });
  const [didEdit, setDidEdit] = useState({
    name: false,
    coordinates: false,
    farmId: false,
    soilId: false,
  });
  const nameIsInvalid = didEdit.name && !isNotEmpty(formData.name);
  const coordinatesAreInvalid = false;
  // didEdit.coordinates && !isNotEmpty(formData.coordinates);
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formData.coordinates = JSON.parse(formData.coordinates);
    const changedFields = Object.entries(formData).filter(
      ([key, value]) => value !== initialValues[key]
    );

    const submittedFormData: any = {};

    changedFields.forEach(([key, value]) => {
      submittedFormData[key] = value;
    });

    const coordinatesChanged = changedFields.some(
      ([key, _]) => key === "coordinates"
    );

    if (coordinatesChanged) {
      submittedFormData.borders = {
        type: "Polygon",
        coordinates: formData.coordinates,
      };
    }

    onSubmit(submittedFormData);
  };

  return {
    formData,
    nameIsInvalid,
    coordinatesAreInvalid,
    handleInputChange,
    handleInputBlur,
    handleSelectChange,
    handleSubmit,
    soils,
    farms,
  };
};
