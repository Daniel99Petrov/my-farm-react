import { useState } from "react";
import Input from "../../Global/Input/Input";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../../ui_elements/CommonStyledElements";
import useFarms from "../../../../hooks/Farm/UseFarms";
import OptionInput from "../../Global/OptionInput/OptionInput";
import { CreateMachineFormProps } from "./CreateMachineForm.static";
import { isNotEmpty } from "../../../../utils/validation";

const CreateMachineForm: React.FC<CreateMachineFormProps> = ({ onSubmit }) => {
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

  return (
    <FormContainer>
      {farms && (
        <FormItems onSubmit={handleSubmit}>
          <Input
            label="Registration Number"
            id="registrationNumber"
            type="text"
            name="registrationNumber"
            onBlur={() => handleInputBlur("registrationNumber")}
            onChange={(event: { target: { value: string } }) =>
              handleInputChange("registrationNumber", event.target.value)
            }
            value={formData.registrationNumber}
            error={
              registrationNumberIsInvalid &&
              "Please enter a valid registration number!"
            }
            required
          />
          <Input
            label="Brand"
            id="brand"
            type="text"
            name="brand"
            onBlur={() => handleInputBlur("brand")}
            onChange={(event: { target: { value: string } }) =>
              handleInputChange("brand", event.target.value)
            }
            value={formData.brand}
            error={brandIsInvalid && "Please enter valid brand!"}
            required
          />
          <Input
            label="Model"
            id="model"
            type="text"
            name="model"
            onBlur={() => handleInputBlur("model")}
            onChange={(event: { target: { value: string } }) =>
              handleInputChange("model", event.target.value)
            }
            value={formData.model}
            error={modelIsInvalid && "Please enter valid model!"}
            required
          />
          <OptionInput
            options={farms}
            label="Farm"
            onSelect={(value: string) => handleSelectChange("farmId", value)}
            displayProperty="name"
            required
          />
          <GreenButton>Create Machine</GreenButton>
        </FormItems>
      )}
    </FormContainer>
  );
};
export default CreateMachineForm;
