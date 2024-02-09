import { useNavigate } from "react-router-dom";
import { createSoil } from "../../../services/soilService";

export const useCreateSoilPageLogic = () => {
  const title = "Fill in the info to create a new soil";
  const navigate = useNavigate();

  const handleCreateSoil = async (formData: { name: string }) => {
    try {
      await createSoil(formData.name);
      navigate(`/soil`);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    title,
    handleCreateSoil,
  };
};
