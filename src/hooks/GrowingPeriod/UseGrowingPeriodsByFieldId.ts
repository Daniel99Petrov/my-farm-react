import { useQuery } from "react-query";
import { fetchGrowingPeriodsByFieldId } from "../../services/growingPeriodService";

export const useGrowingPeriodsByFieldId = (fieldId: string | undefined) => {
  const { data: growingPeriods, refetch } = useQuery(
    ["growingPeriods", fieldId],
    () => fetchGrowingPeriodsByFieldId(fieldId)
  );

  return { growingPeriods, refetch };
};
