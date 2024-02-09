import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../../ui_elements/CommonStyledElements";
import Input from "../../Global/Input/Input";
import UpdateOptionInput from "../../Global/OptionInput/UpdateOptionInput";
import { UpdateFieldFormProps } from "./UpdateFieldForm.static";
import { useUpdateFieldForm } from "./UpdateFieldForm.logic";

const UpdateFieldForm: React.FC<UpdateFieldFormProps> = ({
  field,
  onSubmit,
}) => {
  const {
    formData,
    nameIsInvalid,
    coordinatesAreInvalid,
    handleInputChange,
    handleInputBlur,
    handleSelectChange,
    handleSubmit,
    soils,
    farms,
  } = useUpdateFieldForm(field, onSubmit);

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
