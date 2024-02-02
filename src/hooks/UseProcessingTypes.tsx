import { useEffect, useState } from "react";
import { ProcessingType } from "../static/types/types";
import { fetchProcessingTypes } from "../services/processingTypeService";

const useProcessingTypes = () => {
  const [processingTypes, setProcessingTypes] = useState<ProcessingType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const processingTypeData = await fetchProcessingTypes();
        setProcessingTypes(processingTypeData);
      } catch (error) {
        console.error("Error during fetch:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(processingTypes);
  return { processingTypes, loading };
};

export default useProcessingTypes;
