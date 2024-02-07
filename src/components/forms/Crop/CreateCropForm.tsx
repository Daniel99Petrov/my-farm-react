import { useState } from "react";
import Input from "../Global/Input/Input";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../ui_elements/CommonStyledElements";
import { isNotEmpty } from "../../../utils/validation";
import { CreateCropFormProps } from "./CreateCropForm.static";

const CreateCropForm: React.FC<CreateCropFormProps> = ({ onSubmit }) => {
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
    };
    onSubmit(submittedFormData);
    (event.target as HTMLFormElement).reset();
  }

  return (
    <FormContainer>
      <FormItems onSubmit={handleSubmit}>
        <Input
          label="name"
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

        <GreenButton>Create Crop</GreenButton>
      </FormItems>
    </FormContainer>
  );
};

export default CreateCropForm;
