import { CreateGrowingPeriodFormProps } from "./CreateGrowingPeriodForm.static";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../../ui_elements/CommonStyledElements";
import { registerLocale } from "react-datepicker";
import en from "date-fns/locale/en-US";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OptionInput from "../../Global/OptionInput/OptionInput";
import { useCreateGrowingPeriodFormLogic } from "./CreateGrowingPeriodForm.logic";

registerLocale("en", en);
const CreateGrowingPeriodForm: React.FC<CreateGrowingPeriodFormProps> = ({
  onSubmit,
}) => {
  const {
    crops,
    machines,
    processingTypes,
    formData,
    handleSelectChange,
    handleDateChange,
    handleSubmit,
  } = useCreateGrowingPeriodFormLogic(onSubmit);

  return (
    <FormContainer>
      {crops && machines && processingTypes && (
        <FormItems onSubmit={handleSubmit}>
          <OptionInput
            options={crops}
            label="Crop"
            onSelect={(value: string) => handleSelectChange("cropId", value)}
            displayProperty="name"
            required
          />
          <OptionInput
            options={machines}
            label="Machine"
            onSelect={(value: string) => handleSelectChange("machineId", value)}
            displayProperty="registrationNumber"
            required
          />
          <OptionInput
            options={processingTypes}
            label="Processing Type"
            onSelect={(value: string) =>
              handleSelectChange("processingTypeId", value)
            }
            displayProperty="name"
            required
          />
          <label>Date:</label>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            dateFormat="MMMM d, yyyy"
            locale="en"
            required
          />
          <GreenButton>Create Growing Period</GreenButton>
        </FormItems>
      )}
    </FormContainer>
  );
};

export default CreateGrowingPeriodForm;
