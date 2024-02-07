import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../../ui_elements/CommonStyledElements";
import OptionInput from "../../Global/OptionInput/OptionInput";
import useGrowingPeriods from "../../../../hooks/GrowingPeriod/UseGrowingPeriods";
import useMachines from "../../../../hooks/Machine/UseMachines";
import useProcessingTypes from "../../../../hooks/ProcessingType/UseProcessingTypes";
import GrowingPeriodOptionInput from "../../Global/GrowingPeriodOptionInput";
import { registerLocale } from "react-datepicker";
import en from "date-fns/locale/en-US";
import { CreateProcessingFormProps } from "./CreateProcessingForm.static";

registerLocale("en", en);

const CreateProcessingForm: React.FC<CreateProcessingFormProps> = ({
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    growingPeriodId: "",
    processingTypeId: "",
    machineId: "",
    date: new Date(),
  });

  const { growingPeriods } = useGrowingPeriods();
  const { processingTypes } = useProcessingTypes();
  const { machines } = useMachines();

  const handleSelectChange = (identifier: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [identifier]: value,
    }));
  };

  const handleDateChange = (date: Date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: date,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(formData);
    (event.target as HTMLFormElement).reset();
  };

  return (
    <FormContainer>
      {growingPeriods && processingTypes && machines && (
        <FormItems onSubmit={handleSubmit}>
          <GrowingPeriodOptionInput
            options={growingPeriods}
            label="Field"
            onSelect={(value: string) =>
              handleSelectChange("growingPeriodId", value)
            }
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
          <OptionInput
            options={machines}
            label="Machine"
            onSelect={(value: string) => handleSelectChange("machineId", value)}
            displayProperty="registrationNumber"
          />
          <label>Date:</label>
          <DatePicker
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
