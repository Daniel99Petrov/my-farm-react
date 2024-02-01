import {
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import processingIcon from "../../../assets/icons/processing.png";
import { createProcessing } from "../../../services/processingService";
import CreateProcessingForm from "../../../components/forms/Processing/CreateProcessingForm";
import { useNavigate } from "react-router-dom";
export default function CreateProcessingPage() {
  const title = "Fill in the info to create a new Processing";
  const navigate = useNavigate();
  const handleCreateProcessing = async (formData: {
    growingPeriodId: string;
    processingTypeId: string;
    machineId: string;
    date: Date;
  }) => {
    try {
       await createProcessing(
        formData.growingPeriodId,
        formData.processingTypeId,
        formData.machineId,
        formData.date
      );
      navigate(`/processing`);
    } catch (error) {
      console.error(error);
    }
  };
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
