import { useNavigate } from "react-router-dom";
import { createFarm } from "../../../services/farmService";

export const useCreateFarmPageLogic = () => {
  const title = "Fill in the info to create a new farm";
  const navigate = useNavigate();

  const handleCreateFarm = async (formData: {
    name: string;
    latitude: string;
    longitude: string;
  }) => {
    try {
      const createdFarm = await createFarm(
        formData.name,
        formData.latitude,
        formData.longitude
      );
      const farmId = createdFarm.id;
      navigate(`/farm/${farmId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    title,
    handleCreateFarm,
  };
};
