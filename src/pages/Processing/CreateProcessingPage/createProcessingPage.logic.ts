import { useNavigate, useParams } from "react-router-dom";
import { createProcessing } from "../../../services/processingService";
import { routes } from "../../../static/routes/routes";
import { CreateProcessingFormData } from "./createProcessingPage.static";

export const useCreateProcessingPageLogic = () => {
  const navigate = useNavigate();
  const { growingPeriodId } = useParams();
  const title = "Fill in the info to create a new Processing";
  const handleCreateProcessing = async (formData: CreateProcessingFormData) => {
    try {
      if (growingPeriodId) {
        await createProcessing(
          growingPeriodId,
          formData.processingTypeId,
          formData.machineId,
          formData.date
        );
        navigate(
          routes.growingPeriodDetails.replace(
            ":growingPeriodId",
            growingPeriodId
          )
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { handleCreateProcessing, title };
};
