import {
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import processingIcon from "../../../assets/icons/processing.png";
import CreateProcessingForm from "../../../components/forms/Processing/Create/CreateProcessingForm";
import { useCreateProcessingPageLogic } from "./createProcessingPage.logic";

export default function CreateProcessingPage() {
  
  const { handleCreateProcessing, title } = useCreateProcessingPageLogic();
  return (
    <div>
      <PageTitle>
        <TitleImage src={processingIcon} alt="Processing Icon" />
        {title}
      </PageTitle>
      <CreateProcessingForm onSubmit={handleCreateProcessing} />
    </div>
  );
}
