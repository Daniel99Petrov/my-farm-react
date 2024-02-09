import {
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import machineIcon from "../../../assets/icons/machine.png";
import CreateMachineForm from "../../../components/forms/Machine/Create/CreateMachineForm";
import { useCreateMachinePageLogic } from "./createMachinePage.logic";

export default function CreateMachinePage() {
  const { handleCreateMachine, title } = useCreateMachinePageLogic();
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
