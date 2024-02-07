import { fetchProcessingTypes } from "../../services/processingTypeService";
import { useQuery } from "react-query";

const useProcessingTypes = () => {
  const {
    data: processingTypes,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["processingTypes"],
    queryFn: fetchProcessingTypes,
  });

  return { processingTypes, isLoading, error, refetch };
};

export default useProcessingTypes;
