import machineIcon from "../../../assets/icons/machine.png";
import {
  GreenButton,
  PageMainButtonsContainer,
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import SearchBar from "../../../components/bars/searchBar/SearchBar";
import { useMachinesPageLogic } from "./machinesPage.logic";
import MachineCardsContainer from "../../../components/cards/machine_card/MachineCardsContainer";

export default function MachinesPage() {
  const { machines, title, handleSearch, handleCreateField, searchPlaceholder } =
    useMachinesPageLogic();

  return (
    <div>
      <PageTitle>
        <TitleImage src={machineIcon} alt="Field Icon" />
        {title}
      </PageTitle>
      <PageMainButtonsContainer>
        <SearchBar placeholder={searchPlaceholder} onSearch={handleSearch} />
        <GreenButton onClick={handleCreateField}>Create Machine</GreenButton>
      </PageMainButtonsContainer>
      {machines && <MachineCardsContainer machines={machines} />}
    </div>
  );
}
