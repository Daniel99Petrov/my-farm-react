import { useParams } from "react-router-dom";
import { FieldDetailsPageLogic } from "./logic/FieldDetailsPage.logic";
import fieldIcon from "../../../assets/icons/field.png";
import {
  BigBlueButton,
  GreenButton,
  MapDetailsContainer,
  PageTitle,
  RedButton,
  TitleImage,
  UpdateButtonContainer,
} from "../../../ui_elements/CommonStyledElements";
import {
  DetailsInfoContainer,
  StyledMap,
} from "../../Farm/FarmDetailsPage/styles/farmDetailsInfo.styles";
import FieldDetailsInfo from "./FieldDetailsInfo";
import GrowingPeriodCardsContainer from "../../../components/cards/growing_period_card/GrowingPeriodCardContainer";
import { ProcessingButtonsContainer } from "./styles/FieldDetailsPage.styles";
import UserRoleHOC from "../../../HOCs/UserRoleHOC/UserRoleHOC";
import { fieldDetailButtons } from "./static/FieldDetailsPage.static";

const FieldDetailsPage = () => {
  const { fieldId } = useParams();
  const { field, farm, soil,growingPeriods,handleCreateGrowingPeriod,handleCreateProcessing, handleUpdateFieldInfo, handleDeleteField } =
    FieldDetailsPageLogic(fieldId);

  return (
    <div>
      {field && (
        <div>
          <PageTitle>
            <TitleImage src={fieldIcon} alt="Farm Icon" />
            {field.name}
          </PageTitle>
          <MapDetailsContainer>
            <StyledMap id="fieldMap" style={{ height: "400px" }}></StyledMap>
            <DetailsInfoContainer>
              <FieldDetailsInfo
                soilName={soil?.name}
                coordinates={field.borders.coordinates}
                farmName={farm?.name}
              ></FieldDetailsInfo>
              <UserRoleHOC>
              <UpdateButtonContainer>
                <BigBlueButton onClick={() => handleUpdateFieldInfo(field.id)}>
                  {fieldDetailButtons.update}
                </BigBlueButton>
                <RedButton onClick={() => handleDeleteField(field.id)}>
                {fieldDetailButtons.delete}
                </RedButton>
              </UpdateButtonContainer>
              </UserRoleHOC>
            </DetailsInfoContainer>
          </MapDetailsContainer>
          <UserRoleHOC>
          <ProcessingButtonsContainer>
            <GreenButton onClick={() => handleCreateGrowingPeriod(field.id)}>
            {fieldDetailButtons.createPeriod}
            </GreenButton>
            <GreenButton onClick={() => handleCreateProcessing(field.id, growingPeriods[0]?.id)}>
            {fieldDetailButtons.createProcessing}
            </GreenButton>
          </ProcessingButtonsContainer>
          </UserRoleHOC>
          <GrowingPeriodCardsContainer growingPeriods={growingPeriods} />
        </div>
      )}
    </div>
  );
};
export default FieldDetailsPage;
