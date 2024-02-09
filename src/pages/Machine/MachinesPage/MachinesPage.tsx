import machineIcon from "../../../assets/icons/machine.png";
import {
  GreenButton,
  LoadingContainer,
  LoadingText,
  PageMainButtonsContainer,
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import SearchBar from "../../../components/Global/bars/searchBar/SearchBar";
import { useMachinesPageLogic } from "./machinesPage.logic";
import MachineCardsContainer from "../../../components/cards/machine_card/MachineCardsContainer";
import UserRoleHOC from "../../../HOCs/UserRoleHOC/UserRoleHOC";

export default function MachinesPage() {
  const {
    machines,
    title,
    isLoading,
    handleSearch,
    handleCreateField,
    searchPlaceholder,
  } = useMachinesPageLogic();

  return (
    <div>
      {isLoading && <LoadingText>LOADING</LoadingText>}
      <LoadingContainer $isLoading={isLoading}>
        <PageTitle>
          <TitleImage src={machineIcon} alt="Field Icon" />
          {title}
        </PageTitle>
        <PageMainButtonsContainer>
          <SearchBar placeholder={searchPlaceholder} onSearch={handleSearch} />
          <UserRoleHOC>
          <GreenButton onClick={handleCreateField}>Create Machine</GreenButton>
          </UserRoleHOC>
        </PageMainButtonsContainer>
        {machines && <MachineCardsContainer machines={machines} />}
      </LoadingContainer>
    </div>
  );
}
