import { useNavigate } from "react-router-dom";
import { createCrop } from "../../../services/cropService";

export const useCreateCropPageLogic = () => {
  const title = "Fill in the info to create a new crop";
  const navigate = useNavigate();

  const handleCreateCrop = async (formData: { name: string }) => {
    try {
      await createCrop(formData.name);
      navigate(`/crop`);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    title,
    handleCreateCrop,
  };
};
