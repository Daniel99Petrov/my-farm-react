import { useMutation } from "react-query";
import { BASE_URL } from "../../static/constants/constants";
import { apiEndpoints } from "../../static/routes/apiEndpoints";
import useProcessingTypes from "./UseProcessingTypes";

const deleteProcessingTypeEndpoint = apiEndpoints.deleteProcessingType;
const useDeleteProcessingType = () => {
  const { refetch } = useProcessingTypes();
  const deleteProcessingTypeMutation = useMutation(deleteProcessingType);
  

  async function deleteProcessingType(processingTypeId: string) {
    try {
        console.log("Deleting processing type with ID:", processingTypeId);
      const response = await fetch(
        `${BASE_URL}${deleteProcessingTypeEndpoint.replace(":processingTypeId", processingTypeId)}`,
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
        console.error(`Failed to delete processing type: `, errorMessage);
        throw new Error(`Failed to delete processing type: ${errorMessage}`);
      }

      refetch();
    } catch (error) {
      console.error(`Failed to delete processing type: `, error);
    }
  }
  return {
    deleteProcessingType: deleteProcessingTypeMutation.mutate,
  };
};

export default useDeleteProcessingType;

