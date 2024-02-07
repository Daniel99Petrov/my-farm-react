import { useState } from "react";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../../ui_elements/CommonStyledElements";
import Input from "../../Global/Input/Input";
import { Field } from "../../../../static/types/types";
import { isNotEmpty } from "../../../../utils/validation";
import OptionInput from "../../Global/OptionInput/OptionInput";
import useFarms from "../../../../hooks/Farm/UseFarms";
import useSoils from "../../../../hooks/Soil/UseSoils";
import UpdateOptionInput from "../../Global/OptionInput/UpdateOptionInput";

interface UpdateFieldFormProps {
  field: Field;
  onSubmit: (updatedData: Partial<Field>) => void;
}
interface SubmittedFormData {
  name?: string;
  coordinates?: string;
  farmId?: string;
  soilId?: string;
  borders?: {
    type: string;
    coordinates: string;
  };
}
const UpdateFieldForm: React.FC<UpdateFieldFormProps> = ({
  field,
  onSubmit,
}) => {
  const initialValues: Record<string, string> = {
    name: field.name,
    coordinates: JSON.stringify(field.borders.coordinates),
  };
  const [formData, setFormData] = useState({
    name: field.name || "",
    coordinates: JSON.stringify(field.borders.coordinates) || "",
    farmId: field.farmId || "",
    soilId: field.soilId || "",
  });
  const [didEdit, setDidEdit] = useState({
    name: false,
    coordinates: false,
    farmId: false,
    soilId: false,
  });
  const nameIsInvalid = didEdit.name && !isNotEmpty(formData.name);
  const coordinatesAreInvalid = false;
  // didEdit.coordinates && !isNotEmpty(formData.coordinates);
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formData.coordinates = JSON.parse(formData.coordinates);
    const changedFields = Object.entries(formData).filter(
      ([key, value]) => value !== initialValues[key]
    );

    const submittedFormData: any = {};

    changedFields.forEach(([key, value]) => {
      submittedFormData[key] = value;
    });

    const coordinatesChanged = changedFields.some(
      ([key, _]) => key === "coordinates"
    );

    if (coordinatesChanged) {
      submittedFormData.borders = {
        type: "Polygon",
        coordinates: formData.coordinates,
      };
    }

    onSubmit(submittedFormData);
  };

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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange("name", event.target.value)
            }
            value={formData.name}
            required
            error={nameIsInvalid && "Please enter valid name!"}
          />
          <Input
            label="Coordinates"
            id="coordinates"
            type="text"
            name="coordinates"
            onBlur={() => handleInputBlur("coordinates")}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange("coordinates", event.target.value)
            }
            value={formData.coordinates}
            required
            error={coordinatesAreInvalid && "Please enter valid coordinates!"}
          />
          <UpdateOptionInput
            options={farms}
            label="Farm"
            onSelect={(value: string) => handleSelectChange("farmId", value)}
            displayProperty="name"
            defaultValue={field.farmId}
            required
          />
          <UpdateOptionInput
            options={soils}
            label="Soil"
            onSelect={(value: string) => handleSelectChange("soilId", value)}
            displayProperty="name"
            defaultValue={field.soilId}
            required
          />
          <GreenButton>Update Farm</GreenButton>
        </FormItems>
      )}
    </FormContainer>
  );
};

export default UpdateFieldForm;
