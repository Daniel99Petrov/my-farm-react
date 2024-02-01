import { useCropsPageLogic } from "./cropsPage.logic";
import cropIcon from "../../../assets/icons/crop.png";
import {
  GreenButton,
  PageMainButtonsContainer,
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import SearchBar from "../../../components/bars/searchBar/SearchBar";
import CropTable from "../../../components/tables/CropTable";

export default function CropsPage() {
  const { crops, title, handleSearch, handleCreateFarm, searchPlaceholder } =
    useCropsPageLogic();

  return (
    <div>
      <PageTitle>
        <TitleImage src={cropIcon} alt="Crop Icon" />
        {title}
      </PageTitle>
      <PageMainButtonsContainer>
        <SearchBar placeholder={searchPlaceholder} onSearch={handleSearch} />
        <GreenButton onClick={handleCreateFarm}>Create Crop</GreenButton>
      </PageMainButtonsContainer>
      {crops && <CropTable crops={crops} />}
    </div>
  );
}
