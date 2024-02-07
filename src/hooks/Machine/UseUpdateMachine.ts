import { useMutation } from "react-query";
import useMachines from "./UseMachines";
import { apiEndpoints } from "../../static/routes/apiEndpoints";
import { BASE_URL } from "../../static/constants/constants";
import { useNavigate } from "react-router-dom";
import { Machine } from "../../static/types/types";

// interface MachineUpdateData {
//     registrationNumber: string;
//   }
const updateMachineEndpoint = apiEndpoints.updateMachine;

const useUpdateMachine = () => {
  const { refetch } = useMachines(); 
const navigate = useNavigate();
const updateMachineMutation = useMutation<string, Error, { machineId: string ; updatedData: Partial<Machine> }>(
    async ({ machineId, updatedData }) => {
      try {
        console.log("Updating machine with ID:", machineId);
        const response = await fetch(
          `${BASE_URL}${updateMachineEndpoint.replace(":machineId", machineId)}`,
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
          console.error(`Failed to update machine: `, errorMessage);
          throw new Error(`Failed to update machine: ${errorMessage}`);
        }

        refetch(); 
        return machineId;
      } catch (error) {
        console.error(`Failed to update machine: `, error);
        throw error;
      }
    },
    {
      onSuccess: (data) => {
        navigate(`/machine/${data}`);
      },
    }
  );

  return {
    updateMachine: updateMachineMutation.mutate,
  };
};

export default useUpdateMachine;