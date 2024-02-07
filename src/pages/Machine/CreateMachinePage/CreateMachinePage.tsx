import {
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import machineIcon from "../../../assets/icons/machine.png";
import { useNavigate } from "react-router-dom";
import { createMachine } from "../../../services/machineService";
import CreateMachineForm from "../../../components/forms/Machine/Create/CreateMachineForm";
export default function CreateMachinePage() {
  const title = "Fill in the info to create a new machine";
  const navigate = useNavigate();
  const handleCreateMachine = async (formData: {
    registrationNumber: string;
    brand: string;
    model: string;
    farmId: string;
  }) => {
    try {
      const createdMachine = await createMachine(
        formData.registrationNumber,
        formData.brand,
        formData.model,
        formData.farmId
      );
      console.log(createdMachine);

      const machineId = createdMachine.id;
      navigate(`/machine/${machineId}`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <PageTitle>
        <TitleImage src={machineIcon} alt="Machine Icon" />
        {title}
      </PageTitle>
      <CreateMachineForm onSubmit={handleCreateMachine} />
    </div>
  );
}
