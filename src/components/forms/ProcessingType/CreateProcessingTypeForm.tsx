import Input from "../Global/Input/Input";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../ui_elements/CommonStyledElements";
import { CreateProcessingTypeFormProps } from "./CreateProcessingType.static";
import { useCreateProcessingTypeForm } from "./CreateProcessingType.logic";

const CreateProcessingTypeForm: React.FC<CreateProcessingTypeFormProps> = ({
  onSubmit,
}) => {
  const { formData, nameIsInvalid, handleInputChange, handleInputBlur, handleSubmit } = useCreateProcessingTypeForm(onSubmit);

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

        <GreenButton>Create Processing Type</GreenButton>
      </FormItems>
    </FormContainer>
  );
};
export default CreateProcessingTypeForm;
