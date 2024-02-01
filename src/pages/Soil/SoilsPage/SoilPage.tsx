import soilsIcon from "../../../assets/icons/soil.png";
import {
  GreenButton,
  PageMainButtonsContainer,
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import SearchBar from "../../../components/bars/searchBar/SearchBar";
import SoilTable from "../../../components/tables/SoilTable";
import { useSoilsPageLogic } from "./soilPage.logic";

export default function SoilsPage() {
  const { soils, title, handleSearch, handleCreateSoil, searchPlaceholder } =
    useSoilsPageLogic();

  return (
    <div>
      <PageTitle>
        <TitleImage src={soilsIcon} alt="Processing Types Icon" />
        {title}
      </PageTitle>
      <PageMainButtonsContainer>
        <SearchBar placeholder={searchPlaceholder} onSearch={handleSearch} />
        <GreenButton onClick={handleCreateSoil}>Create Soil</GreenButton>
      </PageMainButtonsContainer>
      {soils && <SoilTable soils={soils} />}
    </div>
  );
}
