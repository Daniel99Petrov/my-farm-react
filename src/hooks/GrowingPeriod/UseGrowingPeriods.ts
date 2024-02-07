import { useQuery } from "react-query";
import { fetchGrowingPeriods } from "../../services/growingPeriodService";

const useGrowingPeriods = () => {
  const {
    data: growingPeriods,
    isLoading,
    error,
    refetch,
  } = useQuery({ queryKey: ["growingPeriods"], queryFn: fetchGrowingPeriods });

  return { growingPeriods, isLoading, error, refetch };
};

export default useGrowingPeriods;
