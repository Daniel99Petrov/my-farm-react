import { useMutation } from "react-query";
import { BASE_URL } from "../../static/constants/constants";
import { apiEndpoints } from "../../static/routes/apiEndpoints";
import useMachines from "./UseMachines";

const deleteMachineEndpoint = apiEndpoints.deleteMachine;
const useDeleteMachine = () => {
  const { refetch } = useMachines();
  const deleteMachineMutation = useMutation(deleteMachine);
  

  async function deleteMachine(machineId: string) {
    try {
      const response = await fetch(
        `${BASE_URL}${deleteMachineEndpoint.replace(":machineId", machineId)}`,
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
        console.error(`Failed to delete machine: `, errorMessage);
        throw new Error(`Failed to delete machine: ${errorMessage}`);
      }

      refetch();
    } catch (error) {
      console.error(`Failed to delete machine: `, error);
    }
  }
  return {
    deleteMachine: deleteMachineMutation.mutate,
  };
};

export default useDeleteMachine;

