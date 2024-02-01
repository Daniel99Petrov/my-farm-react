import {
    PageTitle,
    TitleImage,
  } from "../../../ui_elements/CommonStyledElements";
  import fieldIcon from "../../../assets/icons/field.png";
  import { useNavigate } from "react-router-dom";
import { FieldBordersType } from "../../../types/types";
import { createField } from "../../../services/fieldService";
import CreateFieldForm from "../../../components/forms/Field/CreateFieldForm";
  export default function CreateFieldPage() {
    const title = "Fill in the info to create a new field";
    const navigate = useNavigate();
    const handleCreateField = async (formData: { name: string; borders: FieldBordersType; soilId: string; farmId: string  }) => {
      try {
        const createdField = await createField(
          formData.name,
          formData.borders,
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