import { useParams } from "react-router-dom";
import machineIcon from "../../../assets/icons/machine.png";
import {
  BigBlueButton,
  PageTitle,
  RedButton,
  TitleImage,
  UpdateButtonContainer,
} from "../../../ui_elements/CommonStyledElements";
import { DetailsInfoContainer } from "../../Farm/FarmDetailsPage/styles/farmDetailsInfo.styles";
import MachineDetailsInfo from "./MachineDetailsInfo";
import { MachineDetailsPageLogic } from "./logic/machineDetailsPage.logic";
import UserRoleHOC from "../../../HOCs/UserRoleHOC/UserRoleHOC";
import { machineDetailButtons } from "./static/machineDetails.static";

const MachineDetailsPage = () => {
  const { machineId } = useParams();
  const { machine, farm, handleUpdateMachineInfo, handleDeleteMachine } =
    MachineDetailsPageLogic(machineId);

  return (
    <div>
      {machine && (
        <div>
          <PageTitle>
            <TitleImage src={machineIcon} alt="Machine Icon" />
            {machine?.registrationNumber}
          </PageTitle>
          <DetailsInfoContainer>
            <MachineDetailsInfo
              brand={machine?.brand}
              model={machine?.model}
              farmName={farm?.name}
            ></MachineDetailsInfo>
            <UserRoleHOC>
            <UpdateButtonContainer>
              <BigBlueButton onClick={() => handleUpdateMachineInfo(machine.id)}>
                {machineDetailButtons.update}
              </BigBlueButton>
              <RedButton onClick={() => handleDeleteMachine(machine.id)}>
                {machineDetailButtons.delete}
              </RedButton>
            </UpdateButtonContainer>
            </UserRoleHOC>
          </DetailsInfoContainer>
          <h1> More Info Will be available soon!</h1>
        </div>
      )}
    </div>
  );
};

export default MachineDetailsPage;
