import Input from "../../Global/Input/Input";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../../ui_elements/CommonStyledElements";
import OptionInput from "../../Global/OptionInput/OptionInput";
import { CreateFieldFormProps } from "./CreateFieldForm.static";
import { useCreateFieldFormLogic } from "./CreateFieldForm.logic";

const CreateFieldForm: React.FC<CreateFieldFormProps> = ({ onSubmit }) => {
  const {
    farms,
    soils,
    formData,
    nameIsInvalid,
    coordinatesAreInvalid,
    handleInputChange,
    handleSelectChange,
    handleInputBlur,
    handleSubmit,
  } = useCreateFieldFormLogic(onSubmit);

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
            onChange={(event: { target: { value: string } }) =>
              handleInputChange("name", event.target.value)
            }
            value={formData.name}
            error={nameIsInvalid && "Please enter a valid name!"}
            required
          />
          <Input
            label="Coordinates"
            id="coordinates"
            type="text"
            name="coordinates"
            onBlur={() => handleInputBlur("coordinates")}
            onChange={(event: { target: { value: string } }) =>
              handleInputChange("coordinates", event.target.value)
            }
            value={formData.coordinates}
            error={coordinatesAreInvalid && "Please enter valid coordinates!"}
            required
          />
          <OptionInput
            options={farms}
            label="Farm"
            onSelect={(value: string) => handleSelectChange("farmId", value)}
            displayProperty="name"
            required
          />
          <OptionInput
            options={soils}
            label="Soil"
            onSelect={(value: string) => handleSelectChange("soilId", value)}
            displayProperty="name"
            required
          />
          <GreenButton>Create Field</GreenButton>
        </FormItems>
      )}
    </FormContainer>
  );
};

export default CreateFieldForm;
