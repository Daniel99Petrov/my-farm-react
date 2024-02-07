import { useMutation } from "react-query";
import useSoils from "./UseSoils";
import { BASE_URL } from "../../static/constants/constants";
import { deleteSoilEndpoint } from "../../services/soilService";

const useDeleteSoil = () => {
  const { refetch } = useSoils();
  const deleteSoilMutation = useMutation(deleteSoil);
  

  async function deleteSoil(soilId: string) {
    try {
        console.log("Deleting soil with ID:", soilId);
      const response = await fetch(
        `${BASE_URL}${deleteSoilEndpoint.replace(":soilId", soilId)}`,
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
        console.error(`Failed to delete soil: `, errorMessage);
        throw new Error(`Failed to delete soil: ${errorMessage}`);
      }

      refetch();
    } catch (error) {
      console.error(`Failed to delete soil: `, error);
    }
  }
  return {
    deleteSoil: deleteSoilMutation.mutate,
  };
};

export default useDeleteSoil;

