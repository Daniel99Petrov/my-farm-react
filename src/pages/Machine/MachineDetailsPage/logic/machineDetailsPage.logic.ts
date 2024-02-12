import { useEffect, useState } from "react";
import { Farm } from "../../../../static/types/types";
import { fetchFarmDetails } from "../../../../services/farmService";
import { useNavigate } from "react-router-dom";
import useDeleteMachine from "../../../../hooks/Machine/UseDeleteMachine";
import { routes } from "../../../../static/routes/routes";
import useMachineDetails from "../../../../hooks/Machine/UseMachineDetails";
import useTransferMachine from "../../../../hooks/Machine/UseTransferMachine";

export const MachineDetailsPageLogic = (machineId: string | undefined) => {
  const { machine } = useMachineDetails(machineId);
  const [farm, setFarm] = useState<Farm | null>(null);
  const navigate = useNavigate();
  const { deleteMachine } = useDeleteMachine();
  const { transferMachine, error } = useTransferMachine(machineId);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);

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

  const openTransferModal = () => {
    setIsTransferModalOpen(true);
  };

  const closeTransferModal = () => {
    setIsTransferModalOpen(false);
  };
  const handleTransferSubmit = (formData: { toFarmId: string }) => {
    transferMachine({
      machineId: machine.id,
      fromFarmId: machine.farmId,
      toFarmId: formData.toFarmId,
    });
    if(!error){
      closeTransferModal();
    } else {
      return

    }
  };

  return {
    machine,
    farm,
    openTransferModal,
    closeTransferModal,
    handleTransferSubmit,
    error,
    isTransferModalOpen,
    handleUpdateMachineInfo: (id: string) => {
      navigate(routes.updateMachine.replace(":machineId", id));
    },
    handleDeleteMachine: (id: string) => {
      deleteMachine(id);
      navigate(routes.machine);
    },
  };
};
