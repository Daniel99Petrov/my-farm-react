import { useState } from "react";
import { CreateGrowingPeriodFormProps } from "./CreateGrowingPeriodForm.static";
import useCrops from "../../../../hooks/Crop/UseCrops";
import useMachines from "../../../../hooks/Machine/UseMachines";
import useProcessingTypes from "../../../../hooks/ProcessingType/UseProcessingTypes";
import { FormContainer, FormItems, GreenButton } from "../../../../ui_elements/CommonStyledElements";
import { registerLocale } from "react-datepicker";
import en from "date-fns/locale/en-US";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OptionInput from "../../Global/OptionInput/OptionInput";

registerLocale("en", en);
const CreateGrowingPeriodForm: React.FC<CreateGrowingPeriodFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    cropId: "",
    machineId: "",
    processingTypeId: "",
    date: new Date(),
  });
  const [didEdit, setDidEdit] = useState({
    cropId: false,
    machineId:false,
    processingTypeId: false,
    date:false,
  });
  const { crops } = useCrops();
  const { machines } = useMachines();
  const { processingTypes } = useProcessingTypes();

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
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const submittedFormData = {
      cropId: formData.cropId,
      machineId: formData.machineId,
      processingTypeId: formData.processingTypeId,
      date: formData.date,
    };
    onSubmit(submittedFormData);
    (event.target as HTMLFormElement).reset();
  }

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
            onSelect={(value: string) => handleSelectChange("processingTypeId", value)}
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
        <GreenButton>Create Farm</GreenButton>
      </FormItems>
        )}
    </FormContainer>
  );
};

export default CreateGrowingPeriodForm;
