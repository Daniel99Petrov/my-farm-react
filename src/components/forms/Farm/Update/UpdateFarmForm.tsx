import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../../ui_elements/CommonStyledElements";
import Input from "../../Global/Input/Input";
import { UpdateFarmFormProps } from "./UpdateFarmForm.static";
import { useUpdateFarmForm } from "./UpdateFarmForm.logic";

const UpdateFarmForm: React.FC<UpdateFarmFormProps> = ({ farm, onSubmit }) => {
  const { formData, nameIsInvalid, latitudeIsInvalid, longitudeIsInvalid, handleInputChange, handleInputBlur, handleSubmit } = useUpdateFarmForm(farm, onSubmit);

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
          error={nameIsInvalid && "Please enter valid name!"}
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
          error={latitudeIsInvalid && "Please enter valid latitude!"}
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
          error={longitudeIsInvalid && "Please enter valid longitude!"}
        />
        <GreenButton>Update Farm</GreenButton>
      </FormItems>
    </FormContainer>
  );
};

export default UpdateFarmForm;
