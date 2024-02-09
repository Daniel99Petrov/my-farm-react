import Input from "../../Global/Input/Input";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../../ui_elements/CommonStyledElements";
import { CreateFarmFormProps } from "./CreateFarmForm.static";
import { useCreateFarmForm } from "./CreateFarmForm.logic";

const CreateFarmForm: React.FC<CreateFarmFormProps> = ({ onSubmit }) => {
  const {
    formData,
    nameIsInvalid,
    latitudeIsInvalid,
    longitudeIsInvalid,
    handleInputChange,
    handleInputBlur,
    handleSubmit,
  } = useCreateFarmForm(onSubmit);

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
