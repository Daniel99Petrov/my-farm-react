import { ChangeEvent, useState } from "react";
import Input from "../Input";
import { FormContainer, FormItems, GreenButton } from "../../../ui_elements/CommonStyledElements";

interface CreateFarmFormProps {
    onSubmit: (formData: { name: string; latitude: string; longitude: string;  }) => void;
  }
const CreateFarmForm : React.FC<CreateFarmFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
//   const [selectedSoilId, setSelectedSoilId] = useState("");

//   const { soils } = useSoils();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "latitude":
        setLatitude(value);
        break;
      case "longitude":
        setLongitude(value);
        break;
      default:
        break;
    }
  };

//   const handleSoilSelect = (selectedSoilId: string) => {
//     setSelectedSoilId(selectedSoilId);
//   };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = { name, latitude, longitude };
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
      <Input
        type="text"
        name="latitude"
        value={latitude}
        onChange={handleInputChange}
        label="Latitude"
      />
      <Input
        type="text"
        name="longitude"
        value={longitude}
        onChange={handleInputChange}
        label="Longitude"
      />
      {/* <OptionInput options={soils} label="Soil" onSelect={handleSoilSelect} /> */}
      <GreenButton type="submit">Create Farm</GreenButton>
    </FormItems>
    </FormContainer>
  );
};

export default CreateFarmForm;
