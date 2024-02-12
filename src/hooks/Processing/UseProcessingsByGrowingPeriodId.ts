import { useQuery } from "react-query";
import { fetchProcessingsByGrowingPeriodId } from "../../services/processingService";

export const useProcessingsByGrowingPeriodId = (growingPeriodId: string | undefined) => {
    const { data: processings, refetch } = useQuery(
      ["processings", growingPeriodId],
      () => fetchProcessingsByGrowingPeriodId(growingPeriodId)
    );
  
    return { processings, refetch };
  };