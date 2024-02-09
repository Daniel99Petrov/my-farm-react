import { useMutation } from "react-query";
import { BASE_URL } from "../../static/constants/constants";
import { useGrowingPeriodsByFieldId } from "./UseGrowingPeriodsByFieldId";
import { apiEndpoints } from "../../static/routes/apiEndpoints";
const deleteGrowingPeriodEndpoint = apiEndpoints.deleteGrowingPeriod;
export const useDeleteGrowingPeriod = (fieldId: string | undefined) => {
  const { refetch: refetchGrowingPeriods } =
    useGrowingPeriodsByFieldId(fieldId); // Refetch function for growing periods
  const deleteGrowingPeriodMutation = useMutation(deleteGrowingPeriod);

  async function deleteGrowingPeriod(growingPeriodId: string) {
    try {
      const response = await fetch(
        `${BASE_URL}${deleteGrowingPeriodEndpoint.replace(
          ":growingPeriodId",
          growingPeriodId
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
        console.error(`Failed to delete growing period: `, errorMessage);
        throw new Error(`Failed to delete growing period: ${errorMessage}`);
      }

      refetchGrowingPeriods();
    } catch (error) {
      console.error(`Failed to delete growing period: `, error);
    }
  }

  return {
    deleteGrowingPeriod: deleteGrowingPeriodMutation.mutate,
  };
};

export default useDeleteGrowingPeriod;
