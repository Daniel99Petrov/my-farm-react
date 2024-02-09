import {
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import fieldIcon from "../../../assets/icons/field.png";
import CreateFieldForm from "../../../components/forms/Field/Create/CreateFieldForm";
import { useCreateFieldPageLogic } from "./createFieldPage.logic";

export default function CreateFieldPage() {
  const { title, handleCreateField } = useCreateFieldPageLogic();

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
