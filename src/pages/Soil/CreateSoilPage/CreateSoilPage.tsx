import {
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import soilIcon from "../../../assets/icons/soil.png";
import CreateSoilForm from "../../../components/forms/Soil/CreateSoilForm";
import { useCreateSoilPageLogic } from "./CreateSoilPage.logic";
export default function CreateSoilPage() {
  const { title, handleCreateSoil } = useCreateSoilPageLogic();

  return (
    <div>
      <PageTitle>
        <TitleImage src={soilIcon} alt="soil Icon" />
        {title}
      </PageTitle>
      <CreateSoilForm onSubmit={handleCreateSoil} />
    </div>
  );
}
