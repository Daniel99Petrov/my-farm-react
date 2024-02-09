import { useNavigate } from "react-router-dom";
import { routes } from "../../../static/routes/routes";
import { createMachine } from "../../../services/machineService";

export const useCreateMachinePageLogic = () => {
const title = "Fill in the info to create a new machine";
  const navigate = useNavigate();
  const handleCreateMachine = async (formData: {
    registrationNumber: string;
    brand: string;
    model: string;
    farmId: string;
  }) => {
    try {
      const createdMachine = await createMachine(
        formData.registrationNumber,
        formData.brand,
        formData.model,
        formData.farmId
      );
      console.log(createdMachine);

      const machineId = createdMachine.id;
      navigate(routes.machineDetails.replace(":machineId",machineId));
    } catch (error) {
      console.error(error);
    }
  };
  return { handleCreateMachine,title };
};