import { useQuery } from "react-query";
import { fetchGrowingPeriodDetails } from "../../services/growingPeriodService";

const useGrowingPeriodDetails = (growingPeriodId: string | undefined) => {
  const { data: growingPeriod, refetch } = useQuery(
    ["growingPeriod", growingPeriodId],
    () => fetchGrowingPeriodDetails(growingPeriodId)
  );

  return { growingPeriod, refetch };
};

export default useGrowingPeriodDetails;
