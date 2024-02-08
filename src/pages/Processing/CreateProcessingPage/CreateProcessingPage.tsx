import {
  PageTitle,
  TitleImage,
} from "../../../ui_elements/CommonStyledElements";
import processingIcon from "../../../assets/icons/processing.png";
import { createProcessing } from "../../../services/processingService";
import CreateProcessingForm from "../../../components/forms/Processing/Create/CreateProcessingForm";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../../../static/routes/routes";
export default function CreateProcessingPage() {
  const title = "Fill in the info to create a new Processing";
  const navigate = useNavigate();
  const {growingPeriodId} = useParams();
  const handleCreateProcessing = async (formData: {
    processingTypeId: string;
    machineId: string;
    date: Date;
  }) => {
    try {
      if(growingPeriodId){
      await createProcessing(
        growingPeriodId,
        formData.processingTypeId,
        formData.machineId,
        formData.date
      );
      navigate(routes.growingPeriodDetails.replace(":growingPeriodId",growingPeriodId));
      }
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
