import { useQuery } from "react-query";
import { fetchFields } from "../../services/fieldService";

const useFields = () => {
  const {
    data: fields,
    isLoading,
    error,
    refetch,
  } = useQuery({ queryKey: ["fields"], queryFn: fetchFields });

  return { fields, isLoading, error, refetch };
};

export default useFields;
