import { useParams } from "react-router-dom";
import machineIcon from "../../../assets/icons/machine.png";
import {
  BigBlueButton,
  PageTitle,
  TitleImage,
  UpdateButtonContainer,
} from "../../../ui_elements/CommonStyledElements";
import { DetailsInfoContainer } from "../../Farm/FarmDetailsPage/styles/farmDetailsInfo.styles";
import MachineDetailsInfo from "./MachineDetailsInfo";
import { MachineDetailsPageLogic } from "./machineDetailspage.logic";

const MachineDetailsPage = () => {
  const { machineId } = useParams();
  const { machine, farm, handleUpdateFieldInfo } =
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
              // TODO change this to a modal on hover
              model={machine?.model}
              farmName={farm?.name}
            ></MachineDetailsInfo>
            <UpdateButtonContainer>
              <BigBlueButton onClick={() => handleUpdateFieldInfo(machine.id)}>
                Update Machine Info
              </BigBlueButton>
            </UpdateButtonContainer>
          </DetailsInfoContainer>
         <h1> More Info Will be available soon!</h1>
        </div>
      )}
    </div>
  );
};

export default MachineDetailsPage;
