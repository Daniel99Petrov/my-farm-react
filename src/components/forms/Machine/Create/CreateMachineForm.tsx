import Input from "../../Global/Input/Input";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../../ui_elements/CommonStyledElements";
import OptionInput from "../../Global/OptionInput/OptionInput";
import { CreateMachineFormProps } from "./CreateMachineForm.static";
import { useCreateMachineFormLogic } from "./CreateMachineForm.logic";

const CreateMachineForm: React.FC<CreateMachineFormProps> = ({ onSubmit }) => {
  const {
    formData,
    farms,
    handleInputChange,
    handleInputBlur,
    handleSubmit,
    registrationNumberIsInvalid,
    brandIsInvalid,
    modelIsInvalid,
    handleSelectChange,
  } = useCreateMachineFormLogic(onSubmit);

  return (
    <FormContainer>
      {farms && (
        <FormItems onSubmit={handleSubmit}>
          <Input
            label="Registration Number"
            id="registrationNumber"
            type="text"
            name="registrationNumber"
            onBlur={() => handleInputBlur("registrationNumber")}
            onChange={(event: { target: { value: string } }) =>
              handleInputChange("registrationNumber", event.target.value)
            }
            value={formData.registrationNumber}
            error={
              registrationNumberIsInvalid &&
              "Please enter a valid registration number!"
            }
            required
          />
          <Input
            label="Brand"
            id="brand"
            type="text"
            name="brand"
            onBlur={() => handleInputBlur("brand")}
            onChange={(event: { target: { value: string } }) =>
              handleInputChange("brand", event.target.value)
            }
            value={formData.brand}
            error={brandIsInvalid && "Please enter valid brand!"}
            required
          />
          <Input
            label="Model"
            id="model"
            type="text"
            name="model"
            onBlur={() => handleInputBlur("model")}
            onChange={(event: { target: { value: string } }) =>
              handleInputChange("model", event.target.value)
            }
            value={formData.model}
            error={modelIsInvalid && "Please enter valid model!"}
            required
          />
          <OptionInput
            options={farms}
            label="Farm"
            onSelect={(value: string) => handleSelectChange("farmId", value)}
            displayProperty="name"
            required
          />
          <GreenButton>Create Machine</GreenButton>
        </FormItems>
      )}
    </FormContainer>
  );
};
export default CreateMachineForm;
