import {
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import farmIcon from "../../../assets/icons/farm.png";
import CreateFarmForm from "../../../components/forms/Farm/Create/CreateFarmForm";
import { useCreateFarmPageLogic } from "./createFarm.logic";
export default function CreateFarmPage() {
  const { title, handleCreateFarm } = useCreateFarmPageLogic();
  return (
    <div>
      <PageTitle>
        <TitleImage src={farmIcon} alt="Farm Icon" />
        {title}
      </PageTitle>
      <CreateFarmForm onSubmit={handleCreateFarm} />
    </div>
  );
}
