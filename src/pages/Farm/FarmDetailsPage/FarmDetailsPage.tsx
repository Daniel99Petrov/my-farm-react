import { MouseEventHandler } from "react";
import { useParams } from "react-router-dom";
import "leaflet/dist/leaflet.css";

import FieldCardsContainer from "../../../components/cards/field_card/FieldCardsContainer";
import farmIcon from "../../../assets/icons/farm.png";
import {
  BigBlueButton,
  MapDetailsContainer,
  PageTitle,
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

const FarmDetailsPage = () => {
  const { farmId } = useParams();
  const {
    farm,
    fields,
    machines,
    handleUpdateFarmInfo,
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
              <UpdateButtonContainer>
                <BigBlueButton onClick={() => handleUpdateFarmInfo(farm.id)}>
                  Update Farm Info
                </BigBlueButton>
              </UpdateButtonContainer>
            </DetailsInfoContainer>
          </MapDetailsContainer>
          <ToggleButtonsContainer>
            {/* TODO format the buttons to be better looking */}
            <button
              onClick={toggleShowFields as MouseEventHandler<HTMLButtonElement>}
              style={{ fontWeight: showFields ? "bold" : "normal" }}
            >
              Show Fields
            </button>
            <button
              onClick={toggleShowFields as MouseEventHandler<HTMLButtonElement>}
              style={{ fontWeight: !showFields ? "bold" : "normal" }}
            >
              Show Machines
            </button>
          </ToggleButtonsContainer>
          {/* {fields && <FieldCardsContainer fields={fields} />} */}
          {showFields ? (
            <FieldCardsContainer fields={fields} />
          ) : (
            <MachineCardsContainer machines={machines} /> // Conditionally render MachineCardsContainer
          )}
        </div>
      )}
    </div>
  );
};

export default FarmDetailsPage;
