import { useMutation } from "react-query";
import { BASE_URL } from "../../static/constants/constants";
import { apiEndpoints } from "../../static/routes/apiEndpoints";
import { useProcessingsByGrowingPeriodId } from "./UseProcessingsByGrowingPeriodId";

const deleteProcessingEndpoint = apiEndpoints.deleteProcessing;
export const useDeleteProcessingByGrowingPeriodId = (growingPeriodId: string | undefined) => {
  const { refetch: refetchProcessings } =
    useProcessingsByGrowingPeriodId(growingPeriodId); // Refetch function for growing periods
  const deleteProcessingMutation = useMutation(deleteProcessing);

  async function deleteProcessing(processingId: string) {
    try {
      const response = await fetch(
        `${BASE_URL}${deleteProcessingEndpoint.replace(
          ":processingId",
          processingId
        )}`,
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
        console.error(`Failed to delete processing: `, errorMessage);
        throw new Error(`Failed to delete processing: ${errorMessage}`);
      }

      refetchProcessings();
    } catch (error) {
      console.error(`Failed to delete processing: `, error);
    }
  }

  return {
    deleteProcessing: deleteProcessingMutation.mutate,
  };
};

export default useDeleteProcessingByGrowingPeriodId;
