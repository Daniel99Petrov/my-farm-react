import { useParams } from "react-router-dom";
import machineIcon from "../../../assets/icons/machine.png";
import {
  BigBlueButton,
  GreenButton,
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
import TransferMachineModal from "../../../components/Global/modals/TransferMachineModal/TransferMachineModal";

const MachineDetailsPage = () => {
  const { machineId } = useParams();
  const { machine, farm, isTransferModalOpen,closeTransferModal,openTransferModal,handleUpdateMachineInfo, handleDeleteMachine, handleTransferSubmit, error} =
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
              <GreenButton
              onClick={() => openTransferModal()}>{machineDetailButtons.transfer}
              </GreenButton>
              <BigBlueButton onClick={() => handleUpdateMachineInfo(machine.id)}>
                {machineDetailButtons.update}
              </BigBlueButton>
              <RedButton onClick={() => handleDeleteMachine(machine.id)}>
                {machineDetailButtons.delete}
              </RedButton>
            </UpdateButtonContainer>
            </UserRoleHOC>
          </DetailsInfoContainer>
        </div>
      )}
      <TransferMachineModal
        isOpen={isTransferModalOpen}
        onClose={closeTransferModal}
        onSubmit={handleTransferSubmit}
        machineId={machineId}
        error={error}
      />
    </div>
  );
};

export default MachineDetailsPage;
