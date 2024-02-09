import useUpdateFarm from "../../../hooks/Farm/UseUpdateFarm";
import {
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import farmIcon from "../../../assets/icons/farm.png";
import UpdateFarmForm from "../../../components/forms/Farm/Update/UpdateFarmForm";
import { useUpdateFarmPageLogic } from "./UpdateFarmPage.logic";

export default function UpdateFarmPage() {
  const { updateFarm } = useUpdateFarm();
  const { title, handleSubmit, farm } = useUpdateFarmPageLogic(updateFarm);

  return (
    <div>
      <PageTitle>
        <TitleImage src={farmIcon} alt="Farm Icon" />
        {title}
      </PageTitle>
      {farm && <UpdateFarmForm farm={farm} onSubmit={handleSubmit} />}
    </div>
  );
}
