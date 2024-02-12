import { useQuery } from "react-query";
import { fetchMachineDetails } from "../../services/machineService";

const useMachineDetails = (machineId: string | undefined) => {
    const { data: machine, refetch } = useQuery(
      ["machine", machineId],
      () => fetchMachineDetails(machineId)
    );
  
    return { machine, refetch };
  };
  
  export default useMachineDetails;