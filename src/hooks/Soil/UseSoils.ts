import { useQuery } from "react-query";
import { fetchSoils } from "../../services/soilService";

const useSoils = () => {
  const {
    data: soils,
    isLoading,
    error,
    refetch,
  } = useQuery({ queryKey: ["soils"], queryFn: fetchSoils });

  return { soils, isLoading, error, refetch };
};
export default useSoils;
