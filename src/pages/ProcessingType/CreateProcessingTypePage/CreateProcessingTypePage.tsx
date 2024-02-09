import {
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import processingTypeIcon from "../../../assets/icons/processing.png";
import CreateProcessingTypeForm from "../../../components/forms/ProcessingType/CreateProcessingTypeForm";
import { useCreateProcessingTypePageLogic } from "./CreateProcessingTypePage.logic";

export default function CreateProcessingTypePage() {
  const { title, handleCreateProcessingType } =
    useCreateProcessingTypePageLogic();
  return (
    <div>
      <PageTitle>
        <TitleImage src={processingTypeIcon} alt="ProcessingType Icon" />
        {title}
      </PageTitle>
      <CreateProcessingTypeForm onSubmit={handleCreateProcessingType} />
    </div>
  );
}
