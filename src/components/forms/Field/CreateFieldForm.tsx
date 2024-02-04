// import { ChangeEvent, useState } from "react";
// import Input from "../Global/Input";
// import {
//   FormContainer,
//   FormItems,
//   GreenButton,
// } from "../../../ui_elements/CommonStyledElements";
// import useSoils from "../../../hooks/UseSoils";

// import OptionInput from "../Global/OptionInput";
// import useFarms from "../../../hooks/UseFarms";

// interface CreateFieldFormProps {
//   onSubmit: (formData: {
//     name: string;
//     borders: { type: string; coordinates: number[][][] };
//     farmId: string;
//     soilId: string;
//   }) => void;
// }
// const CreateFieldForm: React.FC<CreateFieldFormProps> = ({ onSubmit }) => {
//   const [name, setName] = useState("");
//   const [coordinates, setCoordinates] = useState<string>("");
//   const [selectedFarmId, setSelectedFarmId] = useState("");
//   const [selectedSoilId, setSelectedSoilId] = useState("");

//   const { soils } = useSoils();
//   const { farms } = useFarms();

//   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     switch (name) {
//       case "name":
//         setName(value);
//         break;
//       case "coordinates":
//         setCoordinates(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSoilSelect = (selectedSoilId: string) => {
//     setSelectedSoilId(selectedSoilId);
//   };
//   const handleFarmSelect = (selectedFarmId: string) => {
//     setSelectedFarmId(selectedFarmId);
//   };
//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();

//     // Parse coordinates to number[][][] or handle parsing errors
//     let parsedCoordinates: number[][][] | null = null;
//     try {
//       parsedCoordinates = JSON.parse(coordinates);
//     } catch (error) {
//       console.error("Error parsing coordinates:", error);
//     }

//     if (parsedCoordinates) {
//       const formData = {
//         name,
//         borders: { type: "Polygon", coordinates: parsedCoordinates },
//         farmId: selectedFarmId,
//         soilId: selectedSoilId,
//       };

//       onSubmit(formData);
//     } else {
//       console.error("Invalid coordinates format.");
//     }
//   };

//   return (
//     <FormContainer>
//       <FormItems onSubmit={handleSubmit}>
//         <Input
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleInputChange}
//           label="Name"
//         />
//         <Input
//           type="text"
//           name="coordinates"
//           value={coordinates}
//           onChange={handleInputChange}
//           label="Coordinates"
//         />
//         <OptionInput
//           options={farms}
//           label="Farm"
//           onSelect={handleFarmSelect}
//           displayProperty="name"
//         />
//         <OptionInput
//           options={soils}
//           label="Soil"
//           onSelect={handleSoilSelect}
//           displayProperty="name"
//         />
//         <GreenButton type="submit">Create Field</GreenButton>
//       </FormItems>
//     </FormContainer>
//   );
// };

// export default CreateFieldForm;
import { useState } from "react";
import Input from "../Global/Input2";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../ui_elements/CommonStyledElements";
import useSoils from "../../../hooks/UseSoils";
import OptionInput from "../Global/OptionInput";
import useFarms from "../../../hooks/UseFarms";

interface CreateFieldFormProps {
  onSubmit: (formData: {
    name: string;
    coordinates: string;
    farmId: string;
    soilId: string;
  }) => void;
}

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
  const nameIsInvalid = false
  const coordinatesAreInvalid = false

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

  function handleInputBlur(identifier: string){
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

  function handleSubmit(event) {
    event.preventDefault();

    const submittedFormData = {
      name: formData.name,
      coordinates: formData.coordinates,
      farmId: formData.farmId,
      soilId: formData.soilId,
    };
    onSubmit(submittedFormData);
    event.target.reset;

  }

  return (
      <FormContainer>
    {farms && soils && <FormItems onSubmit={handleSubmit}>
        <Input
          label="Name"
          id="name"
          type="text"
          name="name"
          onBlur={() => handleInputBlur("name")}
          onChange={(event) => handleInputChange("name", event.target.value)}
          value={formData.name}
          error={nameIsInvalid && "Please enter a valid name!"}
        />
        <Input
          label="Coordinates"
          id="coordinates"
          type="text"
          name="coordinates"
          onBlur={() => handleInputBlur("coordinates")}
          onChange={(event) =>
            handleInputChange("coordinates", event.target.value)
          }
          value={formData.coordinates}
          error={coordinatesAreInvalid && "Please enter valid coordinates!"}
        />
        <OptionInput
          options={farms}
          label="Farm"
          onSelect={(value: string) => handleSelectChange("farmId", value)}
          displayProperty="name"
        />
        <OptionInput
          options={soils}
          label="Soil"
          onSelect={(value: string) => handleSelectChange("soilId", value)}
          displayProperty="name"
        />
        <GreenButton>Create Field</GreenButton>
    </FormItems>}
      </FormContainer>
  );
};

export default CreateFieldForm;
