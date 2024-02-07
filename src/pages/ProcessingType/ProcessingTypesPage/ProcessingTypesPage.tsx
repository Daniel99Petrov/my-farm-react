import processingTypesIcon from "../../../assets/icons/processing.png";
import {
  Container,
  GreenButton,
  LoadingContainer,
  LoadingText,
  PageMainButtonsContainer,
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import SearchBar from "../../../components/bars/searchBar/SearchBar";
import { useProcessingTypesPageLogic } from "./processingTypesPage.logic";
import ProcessingTypeTable from "../../../components/tables/ProcessingTypeTable";

export default function ProcessingTypesPage() {
  const {
    processingTypes,
    title,
    isLoading,
    handleSearch,
    handleCreateProcessingType,
    handleDeleteProcessingType,
    searchPlaceholder,
  } = useProcessingTypesPageLogic();

  return (
    <div>
      {isLoading && <LoadingText>LOADING</LoadingText>}
      <LoadingContainer $isLoading={isLoading}>
        <PageTitle>
          <TitleImage src={processingTypesIcon} alt="Processing Types Icon" />
          {title}
        </PageTitle>
        <PageMainButtonsContainer>
          <SearchBar placeholder={searchPlaceholder} onSearch={handleSearch} />
          <GreenButton onClick={handleCreateProcessingType}>
            Create Processing Type
          </GreenButton>
        </PageMainButtonsContainer>
        <Container>
        {processingTypes && (
          <ProcessingTypeTable
            processingTypes={processingTypes}
            onDeleteProcessingType={handleDeleteProcessingType}
          />
        )}
      </Container>
      </LoadingContainer>
    </div>
  );
}
