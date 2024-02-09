import {
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import fieldIcon from "../../../assets/icons/field.png";
import UpdateFieldForm from "../../../components/forms/Field/Update/UpdateFieldForm";
import { useUpdateFieldPageLogic } from "./UpdateFieldPage.logic";

export default function UpdateFieldPage() {
  const { title, field, handleSubmit } = useUpdateFieldPageLogic();

  return (
    <div>
      <PageTitle>
        <TitleImage src={fieldIcon} alt="Field Icon" />
        {title}
      </PageTitle>
      {field && <UpdateFieldForm field={field} onSubmit={handleSubmit} />}
    </div>
  );
}
