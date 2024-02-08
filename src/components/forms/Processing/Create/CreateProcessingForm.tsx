import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../../ui_elements/CommonStyledElements";
import OptionInput from "../../Global/OptionInput/OptionInput";
import useProcessingTypes from "../../../../hooks/ProcessingType/UseProcessingTypes";
import { registerLocale } from "react-datepicker";
import en from "date-fns/locale/en-US";
import { CreateProcessingFormProps } from "./CreateProcessingForm.static";
import { fetchMachinesByGrowingPeriodId } from "../../../../services/machineService";
import { useParams } from "react-router-dom";
import { Machine } from "../../../../static/types/types";

registerLocale("en", en);

const CreateProcessingForm: React.FC<CreateProcessingFormProps> = ({
  onSubmit,
}) => {
  const {growingPeriodId} = useParams();
  const [machines, setMachines] = useState<Machine[]>();
  const [formData, setFormData] = useState({
    processingTypeId: "",
    machineId: "",
    date: new Date(),
  });

  const { processingTypes } = useProcessingTypes();

  useEffect(() => {
    const loadMachines = async () => {
      try {
        const machinesData = await fetchMachinesByGrowingPeriodId(growingPeriodId);
        setMachines(machinesData);
      } catch (error) {
        console.error("Error loading machines:", error);
      }
    }; 

    loadMachines()
  }, [growingPeriodId]);

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
