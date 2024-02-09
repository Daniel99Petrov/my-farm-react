import { useNavigate } from "react-router-dom";
import { createProcessingType } from "../../../services/processingTypeService";

export const useCreateProcessingTypePageLogic = () => {
  const title = "Fill in the info to create a new processing type";
  const navigate = useNavigate();

  const handleCreateProcessingType = async (formData: { name: string }) => {
    try {
      await createProcessingType(formData.name);
      navigate(`/processing-type`);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    title,
    handleCreateProcessingType,
  };
};
