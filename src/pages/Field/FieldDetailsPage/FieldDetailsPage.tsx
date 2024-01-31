import { useParams } from "react-router-dom";
import { FieldDetailsPageLogic } from "./logic/FieldDetailsPage.logic";
import fieldIcon from "../../../assets/icons/field.png";
import {
  BigBlueButton,
  MapDetailsContainer,
  PageTitle,
  TitleImage,
  UpdateButtonContainer,
} from "../../../ui_elements/CommonStyledElements";
import {
  DetailsInfoContainer,
  StyledMap,
} from "../../Farm/FarmDetailsPage/styles/farmDetailsInfo.styles";
import FieldDetailsInfo from "./FieldDetailsInfo";

const FieldDetailsPage = () => {
  const { fieldId } = useParams();
  const { field, farm, soil, handleUpdateFieldInfo } =
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
                borders={field.borders.coordinates}
                farmName={farm?.name}
              ></FieldDetailsInfo>
              <UpdateButtonContainer>
                <BigBlueButton onClick={() => handleUpdateFieldInfo(field.id)}>
                  Update Field Info
                </BigBlueButton>
              </UpdateButtonContainer>
            </DetailsInfoContainer>
          </MapDetailsContainer>
        </div>
      )}
    </div>
  );
};

export default FieldDetailsPage;
