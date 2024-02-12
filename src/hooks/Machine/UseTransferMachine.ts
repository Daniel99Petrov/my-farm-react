import { useMutation } from "react-query";
import { BASE_URL } from "../../static/constants/constants";
import { apiEndpoints } from "../../static/routes/apiEndpoints";
import useMachineDetails from "./UseMachineDetails";
import { useState } from "react";

const transferMachineEndpoint = apiEndpoints.transferMachine;

const useTransferMachine = (refetchMachineId: string | undefined) => {
  const { refetch } = useMachineDetails(refetchMachineId);
  const [error, setError] = useState<string>('');
  const transferMachineMutation = useMutation<
    string,
    Error,
    { machineId: string; fromFarmId: string; toFarmId: string }
  >(async ({ machineId, fromFarmId, toFarmId }) => {
    try {
      console.log("Transferring machine with ID:", machineId);
      const response = await fetch(
        `${BASE_URL}${transferMachineEndpoint
          .replace(":id", machineId)
          .replace(":fromFarmId", fromFarmId)
          .replace(":toFarmId", toFarmId)}`,
        {
          method: "PATCH",
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
          setError(errorMessage);
          setTimeout(() => {setError("")}, 8000)
        console.error(`Failed to transfer machine: `, errorMessage);
        throw new Error(`Failed to transfer machine: ${errorMessage}`);
      }
      refetch();
      return machineId;
    } catch (error) {
      console.error(`Failed to transfer machine: `, error);
      throw error;
    }
  });

  return {
    transferMachine: transferMachineMutation.mutate, error
  };
};

export default useTransferMachine;
