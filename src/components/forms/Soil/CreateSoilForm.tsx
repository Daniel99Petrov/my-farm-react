import { ChangeEvent, useState } from "react";
import Input from "../Global/Input";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../ui_elements/CommonStyledElements";

interface CreateSoilFormProps {
  onSubmit: (formData: {
    name: string;
  }) => void;
}
const CreateSoilForm: React.FC<CreateSoilFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = { name };
    // console.log(selectedSoilId);

    onSubmit(formData);
  };

  return (
    <FormContainer>
      <FormItems onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          label="Name"
        />
        <GreenButton type="submit">Create Soil</GreenButton>
      </FormItems>
    </FormContainer>
  );
};

export default CreateSoilForm;
