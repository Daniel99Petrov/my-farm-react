import { useQuery } from "react-query";
import { fetchCrops } from "../../services/cropService";

const useCrops = () => {
  const {
    data: crops,
    isLoading,
    error,
    refetch,
  } = useQuery({ queryKey: ["soils"], queryFn: fetchCrops });

  return { crops, isLoading, error, refetch };
};
export default useCrops;
