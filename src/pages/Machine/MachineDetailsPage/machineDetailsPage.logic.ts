import { useEffect, useState } from "react";
import { Farm } from "../../../types/types";

import { Machine } from "../../../types/types";
import { fetchMachineDetails } from "../../../services/machineService";
import { fetchFarmDetails } from "../../../services/farmService";

export const MachineDetailsPageLogic = (machineId: string | undefined) => {
  const [machine, setMachine] = useState<Machine | null>(null);
  const [farm, setFarm] = useState<Farm | null>(null);

  useEffect(() => {
    const loadMachine = async () => {
      try {
        const machineData = await fetchMachineDetails(machineId);
        setMachine(machineData);
      } catch (error) {
        console.error("Error loading field details:", error);
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
    handleUpdateFieldInfo: (id: string) => console.log(id),
  };
};
