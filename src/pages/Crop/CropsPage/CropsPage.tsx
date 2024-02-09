import { useCropsPageLogic } from "./cropsPage.logic";
import cropIcon from "../../../assets/icons/crop.png";
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
import CropTable from "../../../components/tables/CropTable/CropTable";
import UserRoleHOC from "../../../HOCs/UserRoleHOC/UserRoleHOC";

export default function CropsPage() {
  const {
    crops,
    title,
    isLoading,
    handleSearch,
    handleCreateCrop,
    handleDeleteCrop,
    searchPlaceholder,
  } = useCropsPageLogic();

  return (
    <div>
      {isLoading && <LoadingText>LOADING</LoadingText>}
      <LoadingContainer $isLoading={isLoading}>
        <PageTitle>
          <TitleImage src={cropIcon} alt="Crop Icon" />
          {title}
        </PageTitle>
        <PageMainButtonsContainer>
          <SearchBar placeholder={searchPlaceholder} onSearch={handleSearch} />
          <UserRoleHOC>
            <GreenButton onClick={handleCreateCrop}>Create Crop</GreenButton>
          </UserRoleHOC>
        </PageMainButtonsContainer>
        <Container>
          {crops && <CropTable crops={crops} onDeleteCrop={handleDeleteCrop} />}
        </Container>
      </LoadingContainer>
    </div>
  );
}
