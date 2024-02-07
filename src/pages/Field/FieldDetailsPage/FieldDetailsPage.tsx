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

const FieldDetailsPage = () => {
  const { fieldId } = useParams();
  const { field, farm, soil,growingPeriods,handleCreateGrowingPeriod, handleUpdateFieldInfo, handleDeleteField } =
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
                // TODO change this to a modal on hover
                coordinates={field.borders.coordinates}
                farmName={farm?.name}
              ></FieldDetailsInfo>
              <UpdateButtonContainer>
                <BigBlueButton onClick={() => handleUpdateFieldInfo(field.id)}>
                  Update Field Info
                </BigBlueButton>
                <RedButton onClick={() => handleDeleteField(field.id)}>
                  Delete Field 
                </RedButton>
              </UpdateButtonContainer>
            </DetailsInfoContainer>
          </MapDetailsContainer>
          <ProcessingButtonsContainer>
            <GreenButton onClick={() => handleCreateGrowingPeriod(field.id)}>
            Create Growing Period
            </GreenButton>
            <GreenButton onClick={() => handleCreateGrowingPeriod(field.id)}>
            Add New Processing
            </GreenButton>
          </ProcessingButtonsContainer>
          <GrowingPeriodCardsContainer growingPeriods={growingPeriods} />
        </div>
      )}
    </div>
  );
};
export default FieldDetailsPage;
