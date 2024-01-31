import fieldIcon from "../../../assets/icons/field.png";
import {
  GreenButton,
  PageMainButtonsContainer,
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import SearchBar from "../../../components/bars/searchBar/SearchBar";
import { useFieldsPageLogic } from "./fieldsPage.logic";
import FieldCardsContainer from "../../../components/cards/field_card/FieldCardsContainer";

export default function FieldsPage() {
  const { fields, title, handleSearch, handleCreateField, searchPlaceholder } =
    useFieldsPageLogic();

  return (
    <div>
      <PageTitle>
        <TitleImage src={fieldIcon} alt="Field Icon" />
        {title}
      </PageTitle>
      <PageMainButtonsContainer>
        <SearchBar placeholder={searchPlaceholder} onSearch={handleSearch} />
        <GreenButton onClick={handleCreateField}>Create Field</GreenButton>
      </PageMainButtonsContainer>
      {fields && <FieldCardsContainer fields={fields} />}
    </div>
  );
}