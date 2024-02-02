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
import { LoadingContainer, LoadingText } from "../../../ui_elements/CommonStyledElements";

export default function FarmsPage() {
  const { farms, title, handleSearch,isLoading, handleCreateFarm,searchPlaceholder } = useFarmsPageLogic();

  return (
    <div>
      {isLoading && <LoadingText>LOADING</LoadingText>}
      <LoadingContainer $isLoading={isLoading}>
      <PageTitle>
        <TitleImage src={farmIcon} alt="Farm Icon" />
        {title} 
      </PageTitle>
      <PageMainButtonsContainer>
        <SearchBar placeholder={searchPlaceholder} onSearch={handleSearch} />
        <GreenButton onClick={handleCreateFarm}>Create Farm</GreenButton>
      </PageMainButtonsContainer>
      {farms && <FarmCardsContainer farms={farms} />}
      </LoadingContainer>
    </div>
  );
}
