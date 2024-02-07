import { useMutation } from "react-query";
import { BASE_URL } from "../../static/constants/constants";
import { apiEndpoints } from "../../static/routes/apiEndpoints";
import useFarms from "./UseFarms";

const deleteFarmEndpoint = apiEndpoints.deleteFarm;
const useDeleteFarm = () => {
  const { refetch } = useFarms();
  const deleteFarmMutation = useMutation(deleteFarm);
  

  async function deleteFarm(farmId: string) {
    try {
        console.log("Deleting farm with ID:", farmId);
      const response = await fetch(
        `${BASE_URL}${deleteFarmEndpoint.replace(":farmId", farmId)}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage =
          errorData?.error?.message || "Unknown error occurred";
        console.error(`Failed to delete farm: `, errorMessage);
        throw new Error(`Failed to delete farm: ${errorMessage}`);
      }

      refetch();
    } catch (error) {
      console.error(`Failed to delete farm: `, error);
    }
  }
  return {
    deleteFarm: deleteFarmMutation.mutate,
  };
};

export default useDeleteFarm;