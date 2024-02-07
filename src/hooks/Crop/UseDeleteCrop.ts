import { useMutation } from "react-query";
import { BASE_URL } from "../../static/constants/constants";
import useCrops from "./UseCrops";
import { apiEndpoints } from "../../static/routes/apiEndpoints";

const deleteCropEndpoint = apiEndpoints.deleteCrop;
const useDeleteCrop = () => {
  const { refetch } = useCrops();
  const deleteCropMutation = useMutation(deleteCrop);
  

  async function deleteCrop(cropId: string) {
    try {
        console.log("Deleting crop with ID:", cropId);
      const response = await fetch(
        `${BASE_URL}${deleteCropEndpoint.replace(":cropId", cropId)}`,
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
        console.error(`Failed to delete crop: `, errorMessage);
        throw new Error(`Failed to delete crop: ${errorMessage}`);
      }

      refetch();
    } catch (error) {
      console.error(`Failed to delete crop: `, error);
    }
  }
  return {
    deleteCrop: deleteCropMutation.mutate,
  };
};

export default useDeleteCrop;

