import { useNavigate } from "react-router-dom";
import { apiEndpoints } from "../../static/routes/apiEndpoints";
import useFarms from "./UseFarms";
import { useMutation } from "react-query";
import { Farm } from "../../static/types/types";
import { BASE_URL } from "../../static/constants/constants";

const updateFarmEndpoint = apiEndpoints.updateFarm;

const useUpdateFarm = () => {
  const { refetch } = useFarms(); 
const navigate = useNavigate();
const updateFarmMutation = useMutation<string, Error, { farmId: string ; updatedData: Partial<Farm> }>(
    async ({ farmId, updatedData }) => {
      try {
        console.log("Updating farm with ID:", farmId);
        const response = await fetch(
          `${BASE_URL}${updateFarmEndpoint.replace(":farmId", farmId)}`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          const errorMessage =
            errorData?.error?.message || "Unknown error occurred";
          console.error(`Failed to update farm: `, errorMessage);
          throw new Error(`Failed to update farm: ${errorMessage}`);
        }

        refetch(); 
        return farmId;
      } catch (error) {
        console.error(`Failed to update farm: `, error);
        throw error;
      }
    },
    {
      onSuccess: (data) => {
        navigate(`/farm/${data}`);
      },
    }
  );

  return {
    updateFarm: updateFarmMutation.mutate,
  };
};

export default useUpdateFarm;