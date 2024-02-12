import "react-datepicker/dist/react-datepicker.css";
import {
  FormContainer,
  FormItems,
  GreenButton,
  StyledDatePicker,
} from "../../../../ui_elements/CommonStyledElements";
import OptionInput from "../../Global/OptionInput/OptionInput";
import { registerLocale } from "react-datepicker";
import en from "date-fns/locale/en-US";
import { CreateProcessingFormProps } from "./CreateProcessingForm.static";
import { useCreateProcessingForm } from "./CreateProcessingForm.logic";

registerLocale("en", en);

const CreateProcessingForm: React.FC<CreateProcessingFormProps> = ({
  onSubmit,
}) => {
  const {
    formData,
    processingTypes,
    machines,
    handleSelectChange,
    handleDateChange,
    handleSubmit,
  } = useCreateProcessingForm(onSubmit);

  return (
    <FormContainer>
      {processingTypes && machines && (
        <FormItems onSubmit={handleSubmit}>
          <OptionInput
            options={processingTypes}
            label="Processing Type"
            onSelect={(value: string) =>
              handleSelectChange("processingTypeId", value)
            }
            displayProperty="name"
            required
          />
          <OptionInput
            options={machines}
            label="Machine"
            onSelect={(value: string) => handleSelectChange("machineId", value)}
            displayProperty="registrationNumber"
          />
          <label>Date:</label>
          <StyledDatePicker
            selected={formData.date}
            onChange={handleDateChange}
            dateFormat="MMMM d, yyyy"
            locale="en"
            required
          />
          <GreenButton type="submit">Create Processing</GreenButton>
        </FormItems>
      )}
    </FormContainer>
  );
};

export default CreateProcessingForm;
