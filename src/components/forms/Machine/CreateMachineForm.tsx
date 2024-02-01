import { ChangeEvent, useState } from "react";
import Input from "../Global/Input";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../ui_elements/CommonStyledElements";
import useFarms from "../../../hooks/UseFarms";
import OptionInput from "../Global/OptionInput";

interface CreateMachineFormProps {
  onSubmit: (formData: {
    registrationNumber: string;
    brand: string;
    model: string;
    farmId: string;
  }) => void;
}
const CreateMachineForm: React.FC<CreateMachineFormProps> = ({ onSubmit }) => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [selectedFarmId, setSelectedFarmId] = useState("");

  const { farms } = useFarms();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "registrationNumber":
        setRegistrationNumber(value);
        break;
      case "brand":
        setBrand(value);
        break;
      case "model":
        setModel(value);
        break;
      default:
        break;
    }
  };

  const handleFarmSelect = (selectedFarmId: string) => {
    setSelectedFarmId(selectedFarmId);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
      const formData = {
        registrationNumber,
        brand,
        model,
        farmId: selectedFarmId,
      };
      onSubmit(formData);
    };

  return (
    <FormContainer>
      <FormItems onSubmit={handleSubmit}>
        <Input
          type="text"
          name="registrationNumber"
          value={registrationNumber}
          onChange={handleInputChange}
          label="Registration Number"
        />
        <Input
          type="text"
          name="brand"
          value={brand}
          onChange={handleInputChange}
          label="Brand"
        />
        <Input
          type="text"
          name="model"
          value={model}
          onChange={handleInputChange}
          label="Model"
        />
        <OptionInput options={farms} label="Farm" onSelect={handleFarmSelect} displayProperty="name"/>
        <GreenButton type="submit">Create Machine</GreenButton>
      </FormItems>
    </FormContainer>
  );
};

export default CreateMachineForm;
