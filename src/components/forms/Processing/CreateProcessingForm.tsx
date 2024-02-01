import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../ui_elements/CommonStyledElements";
import OptionInput from "../Global/OptionInput";
import useGrowingPeriods from "../../../hooks/UseGrowingPeriods";
import useMachines from "../../../hooks/UseMachines";
import useProcessingTypes from "../../../hooks/UseProcessingTypes";
import GrowingPeriodOptionInput from "../Global/GrowingPeriodOptionInput";
import { registerLocale } from "react-datepicker";
import en from "date-fns/locale/en-US";

registerLocale("en", en);
interface CreateProcessingFormProps {
  onSubmit: (formData: {
    growingPeriodId: string;
    processingTypeId: string;
    machineId: string;
    date: Date;
  }) => void;
}
const CreateProcessingForm: React.FC<CreateProcessingFormProps> = ({
  onSubmit,
}) => {
  const [selectedGrowingPeriodId, setSelectedGrowingPeriodId] = useState("");
  const [selectedProcessingTypeId, setSelectedProcessingTypeId] = useState("");
  const [selectedMachineId, setSelectedMachineId] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { growingPeriods } = useGrowingPeriods();
  const { processingTypes } = useProcessingTypes();
  const { machines } = useMachines();

  const handleGrowingPeriodSelect = (selectedGrowingPeriodId: string) => {
    setSelectedGrowingPeriodId(selectedGrowingPeriodId);
  };
  const handleProcessingTypeSelect = (selectedProcessingTypeId: string) => {
    setSelectedProcessingTypeId(selectedProcessingTypeId);
  };
  const handleMachineSelect = (selectedMachineId: string) => {
    setSelectedMachineId(selectedMachineId);
  };
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      growingPeriodId: selectedGrowingPeriodId,
      processingTypeId: selectedProcessingTypeId,
      machineId: selectedMachineId,
      date: selectedDate,
    };

    onSubmit(formData);
  };

  return (
    <FormContainer>
      <FormItems onSubmit={handleSubmit}>
        <GrowingPeriodOptionInput
          options={growingPeriods}
          label="Field"
          onSelect={handleGrowingPeriodSelect}
        />
        <OptionInput
          options={processingTypes}
          label="Processing Type"
          onSelect={handleProcessingTypeSelect}
          displayProperty="name"
        />
        <OptionInput
          options={machines}
          label="Machine"
          onSelect={handleMachineSelect}
          displayProperty="registrationNumber"
        />
        <label>Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          locale="en"
        />
        <GreenButton type="submit">Create Processing</GreenButton>
      </FormItems>
    </FormContainer>
  );
};

export default CreateProcessingForm;
