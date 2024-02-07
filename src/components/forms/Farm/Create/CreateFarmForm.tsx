import { useState } from "react";
import Input from "../../Global/Input/Input";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../../ui_elements/CommonStyledElements";
import { isNotEmpty } from "../../../../utils/validation";
import { CreateFarmFormProps } from "./CreateFarmForm.static";

const CreateFarmForm: React.FC<CreateFarmFormProps> = ({ onSubmit }) => {
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

  return (
    <FormContainer>
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
          label="Latitude"
          id="latitude"
          type="text"
          name="latitude"
          onBlur={() => handleInputBlur("latitude")}
          onChange={(event: { target: { value: string } }) =>
            handleInputChange("latitude", event.target.value)
          }
          value={formData.latitude}
          error={latitudeIsInvalid && "Please enter valid latitude!"}
          required
        />
        <Input
          label="Longitude"
          id="longitude"
          type="text"
          name="longitude"
          onBlur={() => handleInputBlur("longitude")}
          onChange={(event: { target: { value: string } }) =>
            handleInputChange("longitude", event.target.value)
          }
          value={formData.longitude}
          error={longitudeIsInvalid && "Please enter valid longitude!"}
          required
        />
        <GreenButton>Create Farm</GreenButton>
      </FormItems>
    </FormContainer>
  );
};

export default CreateFarmForm;
