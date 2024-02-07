import { useEffect, useState } from "react";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../../ui_elements/CommonStyledElements";
import Input from "../../Global/Input/Input";
import { Machine } from "../../../../static/types/types";
import { isNotEmpty } from "../../../../utils/validation";
import { fetchFarmDetails } from "../../../../services/farmService";

interface UpdateMachineFormProps {
  machine: Machine;
  onSubmit: (updatedData: Partial<Machine>) => void;
}

const UpdateMachineForm: React.FC<UpdateMachineFormProps> = ({
  machine,
  onSubmit,
}) => {
  const initialValues: Record<string, string> = {
    registrationNumber: machine.registrationNumber,
  }
  const [formData, setFormData] = useState({
    registrationNumber: machine.registrationNumber || "",
    farmName: "",
  });
  const [didEdit, setDidEdit] = useState({
    registrationNumber: false,
  });
  const registrationNumberIsInvalid =
    didEdit.registrationNumber && !isNotEmpty(formData.registrationNumber);

  useEffect(() => {
    if (machine) {
      const loadFarm = async () => {
        try {
          const farmData = await fetchFarmDetails(machine.farmId);
          setFormData((prevFormData) => ({
            ...prevFormData,
            farmName: farmData.name,
          }));
        } catch (error) {
          console.error("Error loading farm:", error);
        }
      };
      loadFarm();
    }
  }, [machine]);

  const handleInputChange = (identifier: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  };
  function handleInputBlur(identifier: string) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const changedFields = Object.entries(formData).filter(
      ([key, value]) => value !== initialValues[key]
    );
    const submittedFormData = Object.fromEntries(changedFields);

    onSubmit(submittedFormData);
  };

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
