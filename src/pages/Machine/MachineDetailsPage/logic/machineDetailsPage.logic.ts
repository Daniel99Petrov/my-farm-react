import { useEffect, useState } from "react";
import { Farm } from "../../../../static/types/types";

import { Machine } from "../../../../static/types/types";
import { fetchMachineDetails } from "../../../../services/machineService";
import { fetchFarmDetails } from "../../../../services/farmService";
import { useNavigate } from "react-router-dom";
import useDeleteMachine from "../../../../hooks/Machine/UseDeleteMachine";
import { routes } from "../../../../static/routes/routes";

export const MachineDetailsPageLogic = (machineId: string | undefined) => {
  const [machine, setMachine] = useState<Machine | null>(null);
  const [farm, setFarm] = useState<Farm | null>(null);
  const navigate = useNavigate();
  const { deleteMachine } = useDeleteMachine();

  useEffect(() => {
    const loadMachine = async () => {
      try {
        const machineData = await fetchMachineDetails(machineId);
        setMachine(machineData);
      } catch (error) {
        console.error("Error loading machine details:", error);
      }
    };

    loadMachine();
  }, [machineId]);

  useEffect(() => {
    if (machine) {
      const loadFarm = async () => {
        try {
          const farmData = await fetchFarmDetails(machine.farmId);
          setFarm(farmData);
        } catch (error) {
          console.error("Error loading farm:", error);
        }
      };
      loadFarm();
    }
  }, [machine]);

  return {
    machine,
    farm,
    handleUpdateMachineInfo: (id: string) => {
      navigate(routes.updateMachine.replace(":machineId", id));
    },
    handleDeleteMachine: (id: string) => {
      deleteMachine(id);
      navigate(routes.machine);
    },
  };
};
