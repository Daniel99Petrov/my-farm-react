import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../../ui_elements/CommonStyledElements";
import UpdateOptionInput from "../../Global/OptionInput/UpdateOptionInput";
import { useTransferMachineForm } from "./TransferMachineForm.logic";
import { TransferMachineFormProps } from "./TransferMachineForm.static";

const TransferMachineForm: React.FC<TransferMachineFormProps> = ({
  machine,
  onSubmit,
}) => {
  const { farms, handleSelectChange, handleSubmit } = useTransferMachineForm(
    machine,
    onSubmit
  );

  return (
    <FormContainer>
      {farms && (
        <FormItems onSubmit={handleSubmit}>
          <UpdateOptionInput
            options={farms}
            label="Transfer to Farm"
            onSelect={(value: string) => handleSelectChange(value)}
            displayProperty="name"
            defaultValue={machine.farmId}
            required
          />
          <GreenButton type="submit">Transfer Machine</GreenButton>
        </FormItems>
      )}
    </FormContainer>
  );
};

export default TransferMachineForm;
