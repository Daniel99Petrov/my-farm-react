import FarmCardsContainer from "../../../components/cards/farm_card/FarmCardsContainer";
import {
  GreenButton,
  PageMainButtonsContainer,
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import { useFarmsPageLogic } from "./farmsPage.logic";
import farmIcon from "../../../assets/icons/farm.png";
import SearchBar from "../../../components/bars/searchBar/SearchBar";

export default function FarmsPage() {
  const { farms, title, handleSearch, handleCreateFarm,searchPlaceholder } = useFarmsPageLogic();
  

  return (
    <div>
      <PageTitle>
        <TitleImage src={farmIcon} alt="Farm Icon" />
        {title}
      </PageTitle>
      <PageMainButtonsContainer>
        <SearchBar placeholder={searchPlaceholder} onSearch={handleSearch} />
        <GreenButton onClick={handleCreateFarm}>Create Farm</GreenButton>
      </PageMainButtonsContainer>
      {farms && <FarmCardsContainer farms={farms} />}
    </div>
  );
}
