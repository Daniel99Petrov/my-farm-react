import { useState } from "react";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../../ui_elements/CommonStyledElements";
import Input from "../../Global/Input/Input";
import { Farm, } from "../../../../static/types/types";
import { isNotEmpty } from "../../../../utils/validation";

interface UpdateFarmFormProps {
  farm: Farm;
  onSubmit: (updatedData: Partial<Farm>) => void;
}

const UpdateFarmForm: React.FC<UpdateFarmFormProps> = ({
  farm,
  onSubmit,
}) => {
    const initialValues: Record<string, string> = {
        name: farm.name,
    }
  const [formData, setFormData] = useState({
    name: farm.name || "",
    latitude: farm.location.coordinates[1].toString() || "",
    longitude: farm.location.coordinates[0].toString() || "",
  });
  const [didEdit, setDidEdit] = useState({
    name: false,
    latitude: false,
    longitude: false,
  });
  const nameIsInvalid =
    didEdit.name && !isNotEmpty(formData.name);
  const latitudeIsInvalid =
    didEdit.latitude && !isNotEmpty(formData.latitude);
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const changedFields = Object.entries(formData).filter(
        ([key, value]) => value !== initialValues[key]
      );
      const submittedFormData = Object.fromEntries(changedFields);
    // const submittedFormData = {
    //   name: formData.name,
    //   latitude: formData.latitude,
    //   longitude: formData.longitude,
    // };

    onSubmit(submittedFormData);
  };

  return (
    <FormContainer>
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
          error={
            nameIsInvalid &&
            "Please enter valid name!"
          }
        />
        <Input
          label="Latitude"
          id="latitude"
          type="text"
          name="latitude"
          onBlur={() => handleInputBlur("latitude")}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange("latitude", event.target.value)
          }
          value={formData.latitude}
          required
          error={
            latitudeIsInvalid &&
            "Please enter valid latitude!"
          }
        />
        <Input
          label="Longitude"
          id="longitude"
          type="text"
          name="longitude"
          onBlur={() => handleInputBlur("longitude")}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange("longitude", event.target.value)
          }
          value={formData.longitude}
          required
          error={
            longitudeIsInvalid &&
            "Please enter valid longitude!"
          }
        />
        <GreenButton>Update Farm</GreenButton>
      </FormItems>
    </FormContainer>
  );
};

export default UpdateFarmForm;
