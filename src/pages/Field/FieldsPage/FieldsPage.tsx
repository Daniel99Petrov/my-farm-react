import fieldIcon from "../../../assets/icons/field.png";
import {
  GreenButton,
  LoadingContainer,
  LoadingText,
  PageMainButtonsContainer,
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import SearchBar from "../../../components/Global/bars/searchBar/SearchBar";
import { useFieldsPageLogic } from "./fieldsPage.logic";
import FieldCardsContainer from "../../../components/cards/field_card/FieldCardsContainer";
import UserRoleHOC from "../../../HOCs/UserRoleHOC/UserRoleHOC";

export default function FieldsPage() {
  const {
    fields,
    title,
    isLoading,
    handleSearch,
    handleCreateField,
    searchPlaceholder,
  } = useFieldsPageLogic();

  return (
    <div>
      {isLoading && <LoadingText>LOADING</LoadingText>}
      <LoadingContainer $isLoading={isLoading}>
        <PageTitle>
          <TitleImage src={fieldIcon} alt="Field Icon" />
          {title}
        </PageTitle>
        <PageMainButtonsContainer>
          <SearchBar placeholder={searchPlaceholder} onSearch={handleSearch} />
          <UserRoleHOC>
          <GreenButton onClick={handleCreateField}>Create Field</GreenButton>
          </UserRoleHOC>
        </PageMainButtonsContainer>
        {fields && <FieldCardsContainer fields={fields} />}
      </LoadingContainer>
    </div>
  );
}
