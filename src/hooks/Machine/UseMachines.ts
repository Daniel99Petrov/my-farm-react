import { fetchMachines } from "../../services/machineService";
import { useQuery } from "react-query";

const useMachines = () => {
  const {
    data: machines,
    isLoading,
    error,
    refetch,
  } = useQuery({ queryKey: ["machines"], queryFn: fetchMachines });

  return { machines, isLoading, error, refetch };
};

export default useMachines;
