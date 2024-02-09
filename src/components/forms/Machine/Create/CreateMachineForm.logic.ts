import { useState } from "react";
import useFarms from "../../../../hooks/Farm/UseFarms";
import { isNotEmpty } from "../../../../utils/validation";

export const useCreateMachineFormLogic = (
  onSubmit: (formData: {
    registrationNumber: string;
    brand: string;
    model: string;
    farmId: string;
  }) => void
) => {
  const [formData, setFormData] = useState({
    registrationNumber: "",
    brand: "",
    model: "",
    farmId: "",
  });
  const [didEdit, setDidEdit] = useState({
    registrationNumber: false,
    brand: false,
    model: false,
    farmId: false,
  });
  const registrationNumberIsInvalid =
    didEdit.registrationNumber && !isNotEmpty(formData.registrationNumber);
  const brandIsInvalid = didEdit.brand && !isNotEmpty(formData.brand);
  const modelIsInvalid = didEdit.model && !isNotEmpty(formData.model);

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
      registrationNumber: formData.registrationNumber,
      brand: formData.brand,
      model: formData.model,
      farmId: formData.farmId,
    };
    onSubmit(submittedFormData);
    (event.target as HTMLFormElement).reset();
  }
  return {
    farms,
    formData,
    registrationNumberIsInvalid,
    modelIsInvalid,
    brandIsInvalid,
    handleInputChange,
    handleSelectChange,
    handleInputBlur,
    handleSubmit,
  };
};
