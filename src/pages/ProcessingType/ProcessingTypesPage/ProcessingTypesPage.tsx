import processingTypesIcon from "../../../assets/icons/processing.png";
import {
  GreenButton,
  PageMainButtonsContainer,
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import SearchBar from "../../../components/bars/searchBar/SearchBar";
import { useProcessingTypesPageLogic } from "./processingTypesPage.logic";
import ProcessingTypeTable from "../../../components/tables/ProcessingTypeTable";

export default function ProcessingTypesPage() {
  const { processingTypes, title, handleSearch, handleCreateProcessingType, searchPlaceholder } =
    useProcessingTypesPageLogic();

  return (
    <div>
      <PageTitle>
        <TitleImage src={processingTypesIcon} alt="Processing Types Icon" />
        {title}
      </PageTitle>
      <PageMainButtonsContainer>
        <SearchBar placeholder={searchPlaceholder} onSearch={handleSearch} />
        <GreenButton onClick={handleCreateProcessingType}>Create Processing Type</GreenButton>
      </PageMainButtonsContainer>
      {processingTypes && <ProcessingTypeTable processingTypes={processingTypes} />}
    </div>
  );
}
