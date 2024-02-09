import {
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import machineIcon from "../../../assets/icons/machine.png";
import UpdateMachineForm from "../../../components/forms/Machine/Update/UpdateMachineForm";
import { useUpdateMachinePageLogic } from "./UpdateMachinePage.logic";

export default function UpdateMachinePage() {
  const { machine, handleSubmit, title } = useUpdateMachinePageLogic();

  return (
    <div>
      <PageTitle>
        <TitleImage src={machineIcon} alt="Machine Icon" />
        {title}
      </PageTitle>
      {machine && (
        <UpdateMachineForm machine={machine} onSubmit={handleSubmit} />
      )}
    </div>
  );
}
