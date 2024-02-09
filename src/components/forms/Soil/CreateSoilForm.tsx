import Input from "../Global/Input/Input";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../ui_elements/CommonStyledElements";
import { CreateSoilFormProps } from "./CreateSoilForm.static";
import { useCreateSoilForm } from "./CreateSoilForm.logic";

const CreateSoilForm: React.FC<CreateSoilFormProps> = ({ onSubmit }) => {
  const { formData, nameIsInvalid, handleInputChange, handleInputBlur, handleSubmit } = useCreateSoilForm(onSubmit);

  return (
    <FormContainer>
      <FormItems onSubmit={handleSubmit}>
        <Input
          label="name"
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

        <GreenButton>Create Soil</GreenButton>
      </FormItems>
    </FormContainer>
  );
};

export default CreateSoilForm;
