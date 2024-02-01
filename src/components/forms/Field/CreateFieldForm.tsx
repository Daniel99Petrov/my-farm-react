import { ChangeEvent, useState } from "react";
import Input from "../Global/Input";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../ui_elements/CommonStyledElements";
import useSoils from "../../../hooks/UseSoils";
import useFarms from "../../../hooks/UseFarms";
import OptionInput from "../Global/OptionInput";

interface CreateFieldFormProps {
  onSubmit: (formData: {
    name: string;
    borders: { type: string; coordinates: number[][][] };
    farmId: string;
    soilId: string;
  }) => void;
}
const CreateFieldForm: React.FC<CreateFieldFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [coordinates, setCoordinates] = useState<string>("");
  const [selectedFarmId, setSelectedFarmId] = useState("");
  const [selectedSoilId, setSelectedSoilId] = useState("");

  const { soils } = useSoils();
  const { farms } = useFarms();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "coordinates":
        setCoordinates(value);
        break;
      default:
        break;
    }
  };

  const handleSoilSelect = (selectedSoilId: string) => {
    setSelectedSoilId(selectedSoilId);
  };
  const handleFarmSelect = (selectedFarmId: string) => {
    setSelectedFarmId(selectedFarmId);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Parse coordinates to number[][][] or handle parsing errors
    let parsedCoordinates: number[][][] | null = null;
    try {
      parsedCoordinates = JSON.parse(coordinates);
    } catch (error) {
      console.error("Error parsing coordinates:", error);
    }

    if (parsedCoordinates) {
      const formData = {
        name,
        borders: { type: "Polygon", coordinates: parsedCoordinates },
        farmId: selectedFarmId,
        soilId: selectedSoilId,
      };

      onSubmit(formData);
    } else {
      console.error("Invalid coordinates format.");
    }
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
        <Input
          type="text"
          name="coordinates"
          value={coordinates}
          onChange={handleInputChange}
          label="Coordinates"
        />
        <OptionInput options={farms} label="Farm" onSelect={handleFarmSelect} />
        <OptionInput options={soils} label="Soil" onSelect={handleSoilSelect} />
        <GreenButton type="submit">Create Field</GreenButton>
      </FormItems>
    </FormContainer>
  );
};

export default CreateFieldForm;
