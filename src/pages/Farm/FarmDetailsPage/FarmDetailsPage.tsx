import { MouseEventHandler } from "react";
import { useParams } from "react-router-dom";
import "leaflet/dist/leaflet.css";

import FieldCardsContainer from "../../../components/cards/field_card/FieldCardsContainer";
import farmIcon from "../../../assets/icons/farm.png";
import {
  BigBlueButton,
  MapDetailsContainer,
  PageTitle,
  RedButton,
  TitleImage,
  UpdateButtonContainer,
} from "../../../ui_elements/CommonStyledElements";
import FarmDetailsInfo from "./FarmDetailsInfo";
import {
  DetailsInfoContainer,
  StyledMap,
} from "./styles/farmDetailsInfo.styles";
import { ToggleButtonsContainer } from "./styles/farmDetailsPage.styles";
import MachineCardsContainer from "../../../components/cards/machine_card/MachineCardsContainer";
import { FarmDetailsPageLogic } from "./logic/farmDetailsPage.logic";
import UserRoleHOC from "../../../HOCs/UserRoleHOC/UserRoleHOC";
import { farmDetailButtons } from "./static/farmDetails.static";

const FarmDetailsPage = () => {
  const { farmId } = useParams();
  const {
    farm,
    fields,
    machines,
    handleUpdateFarmInfo,
    handleDeleteFarm,
    showFields,
    toggleShowFields,
  } = FarmDetailsPageLogic(farmId);

  return (
    <div>
      {farm && (
        <div>
          <PageTitle>
            <TitleImage src={farmIcon} alt="Farm Icon" />
            {farm.name}
          </PageTitle>
          <MapDetailsContainer>
            <StyledMap id="map" style={{ height: "400px" }}></StyledMap>
            <DetailsInfoContainer>
              <FarmDetailsInfo
                longitude={farm.location.coordinates[0]}
                latitude={farm.location.coordinates[1]}
                fieldsCount={fields.length}
                machinesCount={machines.length}
              ></FarmDetailsInfo>
              <UserRoleHOC>
                <UpdateButtonContainer>
                  <BigBlueButton onClick={() => handleUpdateFarmInfo(farm.id)}>
                    {farmDetailButtons.update}
                  </BigBlueButton>
                  <RedButton onClick={() => handleDeleteFarm(farm.id)}>
                    {farmDetailButtons.delete}
                  </RedButton>
                </UpdateButtonContainer>
              </UserRoleHOC>
            </DetailsInfoContainer>
          </MapDetailsContainer>
          <ToggleButtonsContainer>
            <BigBlueButton
              onClick={toggleShowFields as MouseEventHandler<HTMLButtonElement>}
              style={{
                fontWeight: showFields ? "bold" : "normal",
                backgroundColor: showFields ? "lightblue" : "",
              }}
            >
              {farmDetailButtons.showFields}
            </BigBlueButton>
            <BigBlueButton
              onClick={toggleShowFields as MouseEventHandler<HTMLButtonElement>}
              style={{
                fontWeight: !showFields ? "bold" : "normal",
                backgroundColor: !showFields ? "lightblue" : "",
              }}
            >
              {farmDetailButtons.showMachines}
            </BigBlueButton>
          </ToggleButtonsContainer>
          {showFields ? (
            <FieldCardsContainer fields={fields} />
          ) : (
            <MachineCardsContainer machines={machines} />
          )}
        </div>
      )}
    </div>
  );
};

export default FarmDetailsPage;
