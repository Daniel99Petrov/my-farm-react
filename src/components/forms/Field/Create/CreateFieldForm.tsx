import { useState } from "react";
import Input from "../../Global/Input/Input";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../../ui_elements/CommonStyledElements";
import useSoils from "../../../../hooks/Soil/UseSoils";
import OptionInput from "../../Global/OptionInput/OptionInput";
import useFarms from "../../../../hooks/Farm/UseFarms";
import { isNotEmpty } from "../../../../utils/validation";
import { CreateFieldFormProps } from "./CreateFieldForm.static";

const CreateFieldForm: React.FC<CreateFieldFormProps> = ({ onSubmit }) => {
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

  return (
    <FormContainer>
      {farms && soils && (
        <FormItems onSubmit={handleSubmit}>
          <Input
            label="Name"
            id="name"
            type="text"
            name="name"
            onBlur={() => handleInputBlur("name")}
            onChange={(event: { target: { value: string } }) =>
              handleInputChange("name", event.target.value)
            }
            value={formData.name}
            error={nameIsInvalid && "Please enter a valid name!"}
            required
          />
          <Input
            label="Coordinates"
            id="coordinates"
            type="text"
            name="coordinates"
            onBlur={() => handleInputBlur("coordinates")}
            onChange={(event: { target: { value: string } }) =>
              handleInputChange("coordinates", event.target.value)
            }
            value={formData.coordinates}
            error={coordinatesAreInvalid && "Please enter valid coordinates!"}
            required
          />
          <OptionInput
            options={farms}
            label="Farm"
            onSelect={(value: string) => handleSelectChange("farmId", value)}
            displayProperty="name"
            required
          />
          <OptionInput
            options={soils}
            label="Soil"
            onSelect={(value: string) => handleSelectChange("soilId", value)}
            displayProperty="name"
            required
          />
          <GreenButton>Create Field</GreenButton>
        </FormItems>
      )}
    </FormContainer>
  );
};

export default CreateFieldForm;
