import soilsIcon from "../../../assets/icons/soil.png";
import {
  Container,
  GreenButton,
  LoadingContainer,
  LoadingText,
  PageMainButtonsContainer,
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import SearchBar from "../../../components/Global/bars/searchBar/SearchBar";
import SoilTable from "../../../components/tables/SoilTable/SoilTable";
import { useSoilsPageLogic } from "./soilPage.logic";
import UserRoleHOC from "../../../HOCs/UserRoleHOC/UserRoleHOC";

export default function SoilsPage() {
  const {
    soils,
    title,
    isLoading,
    handleSearch,
    handleCreateSoil,
    handleDeleteSoil,
    searchPlaceholder,
  } = useSoilsPageLogic();

  return (
    <div>
      {isLoading && <LoadingText>LOADING</LoadingText>}
      <LoadingContainer $isLoading={isLoading}>
        <PageTitle>
          <TitleImage src={soilsIcon} alt="Processing Types Icon" />
          {title}
        </PageTitle>
        <PageMainButtonsContainer>
          <SearchBar placeholder={searchPlaceholder} onSearch={handleSearch} />
          <UserRoleHOC>
            <GreenButton onClick={handleCreateSoil}>Create Soil</GreenButton>
          </UserRoleHOC>
        </PageMainButtonsContainer>
        <Container>
          {soils && <SoilTable soils={soils} onDeleteSoil={handleDeleteSoil} />}
        </Container>
      </LoadingContainer>
    </div>
  );
}
