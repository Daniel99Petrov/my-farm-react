import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../../ui_elements/CommonStyledElements";
import Input from "../../Global/Input/Input";
import { UpdateMachineFormProps } from "./UpdateMachineForm.static";
import { useUpdateMachineForm } from "./UpdateMachineForm.logic";

const UpdateMachineForm: React.FC<UpdateMachineFormProps> = ({
  machine,
  onSubmit,
}) => {
  const {
    formData,
    registrationNumberIsInvalid,
    handleInputChange,
    handleInputBlur,
    handleSubmit,
  } = useUpdateMachineForm(machine, onSubmit);

  return (
    <FormContainer>
      <FormItems onSubmit={handleSubmit}>
        <Input
          label="Registration Number"
          id="registrationNumber"
          type="text"
          name="registrationNumber"
          onBlur={() => handleInputBlur("registrationNumber")}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange("registrationNumber", event.target.value)
          }
          value={formData.registrationNumber}
          required
          error={
            registrationNumberIsInvalid &&
            "Please enter valid registration number!"
          }
        />
        <Input
          label="Brand"
          id="brand"
          type="text"
          name="brand"
          value={machine.brand || ""}
          disabled
          error={undefined}
        />
        <Input
          label="Model"
          id="model"
          type="text"
          name="model"
          value={machine.model || ""}
          disabled
          error={undefined}
        />
        <Input
          label="Farm"
          id="farm"
          type="text"
          name="farm"
          value={formData.farmName || ""}
          disabled
          error={undefined}
        />
        <GreenButton>Update Machine</GreenButton>
      </FormItems>
    </FormContainer>
  );
};

export default UpdateMachineForm;
