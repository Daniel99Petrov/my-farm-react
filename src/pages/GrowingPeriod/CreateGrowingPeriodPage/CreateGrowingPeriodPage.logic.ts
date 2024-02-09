import { useNavigate, useParams } from "react-router-dom";
import { createGrowingPeriod } from "../../../services/growingPeriodService";
import { CreateGrowingPeriodFormData } from "./CreateGrowingPeriodPage.static";
import { routes } from "../../../static/routes/routes";

export const useCreateGrowingPeriodPageLogic = () => {
  const navigate = useNavigate();
  const { fieldId } = useParams();
  const title = "Fill in the info to create a new growing period";

  const handleCreateGrowingPeriod = async (
    formData: CreateGrowingPeriodFormData
  ) => {
    try {
      if (fieldId) {
        const createdGrowingPeriod = await createGrowingPeriod(
          fieldId,
          formData.cropId,
          formData.machineId,
          formData.processingTypeId,
          formData.date
        );
        const growingPeriodId = createdGrowingPeriod.id;
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

  return { title, handleCreateGrowingPeriod };
};
