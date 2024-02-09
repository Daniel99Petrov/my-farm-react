import Input from "../Global/Input/Input";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../ui_elements/CommonStyledElements";
import { CreateCropFormProps } from "./CreateCropForm.static";
import { useCreateCropForm } from "./CreateCropForm.logic";

const CreateCropForm: React.FC<CreateCropFormProps> = ({ onSubmit }) => {
  const {
    formData,
    nameIsInvalid,
    handleInputChange,
    handleInputBlur,
    handleSubmit,
  } = useCreateCropForm(onSubmit);

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

        <GreenButton>Create Crop</GreenButton>
      </FormItems>
    </FormContainer>
  );
};

export default CreateCropForm;
