import {
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import farmIcon from "../../../assets/icons/farm.png";
import { useNavigate } from "react-router-dom";
import CreateFarmForm from "../../../components/forms/Farm/CreateFarmForm";
import { createFarm } from "../../../services/farmService";
export default function CreateFarmPage() {
  const title = "Fill in the info to create a new farm";
  const navigate = useNavigate();
  const handleCreateFarm = async (formData: { name: string; latitude: string; longitude: string;  }) => {
    try {
      const createdFarm = await createFarm(
        formData.name,
        formData.latitude,
        formData.longitude,
        // formData.soilId
      );
      const farmId = createdFarm.id;
      navigate(`/farm/${farmId}`);
    } catch (error) {
      console.error(error);
    }
  };
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
