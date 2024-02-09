import { useParams } from "react-router-dom";
import useUpdateMachine from "../../../hooks/Machine/UseUpdateMachine";
import { useState, useEffect } from "react";
import { fetchMachineDetails } from "../../../services/machineService";
import { Machine } from "../../../static/types/types";

export const useUpdateMachinePageLogic = () => {
    const title = "Change registration number of machine if needed";
    const { machineId } = useParams();
    const { updateMachine } = useUpdateMachine();
    const [machine, setMachine] = useState<Machine | null>(null);
  
    useEffect(() => {
      const fetchMachine = async () => {
        try {
          const machineData = await fetchMachineDetails(machineId);
          setMachine(machineData);
        } catch (error) {
          console.error("Error fetching machine details:", error);
        }
      };
  
      fetchMachine();
    }, [machineId]);
  
    const handleSubmit = async (formData: Partial<Machine>) => {
      try {
        if (machineId) {
          updateMachine({ machineId, updatedData: formData });
        } else {
          throw new Error("No machine Id provided");
        }
      } catch (error) {
        console.error("Error updating machine:", error);
      }
    };
  
    return { title, machine, handleSubmit };
  };
