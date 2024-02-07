import {
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import fieldIcon from "../../../assets/icons/field.png";
import { useNavigate } from "react-router-dom";
import { createField } from "../../../services/fieldService";
import CreateFieldForm from "../../../components/forms/Field/Create/CreateFieldForm";
export default function CreateFieldPage() {
  const title = "Fill in the info to create a new field";
  const navigate = useNavigate();
  const handleCreateField = async (formData: {
    name: string;
    coordinates: string;
    soilId: string;
    farmId: string;
  }) => {
    try {
      const parsedCoordinates = JSON.parse(formData.coordinates);
      const createdField = await createField(
        formData.name,
        { type: "Polygon", coordinates: parsedCoordinates },
        formData.farmId,
        formData.soilId
      );
      const fieldId = createdField.id;
      navigate(`/field/${fieldId}`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <PageTitle>
        <TitleImage src={fieldIcon} alt="Field Icon" />
        {title}
      </PageTitle>
      <CreateFieldForm onSubmit={handleCreateField} />
    </div>
  );
}
