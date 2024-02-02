import { useEffect, useState } from "react";
import { ProcessingType } from "../../../static/types/types";
import { useNavigate } from "react-router-dom";
import { fetchProcessingTypes } from "../../../services/processingTypeService";

export const useProcessingTypesPageLogic = () => {
  const [processingTypes, setProcessingTypes] = useState<ProcessingType[]>([]);
  const [filteredProcessingTypes, setFilteredProcessingTypes] = useState<
    ProcessingType[]
  >([]);
  const title = "All Processing Types";
  const searchPlaceholder = "Search processing type..";
  const navigate = useNavigate();
  const handleCreateProcessingType = () => {
    navigate("/processing-type-create");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const processingTypesData = await fetchProcessingTypes();
        setProcessingTypes(processingTypesData);
        setFilteredProcessingTypes(processingTypesData);
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };
    fetchData();
  }, []);
  const handleSearch = (query: string) => {
    const filtered = processingTypes.filter((processingType) =>
      processingType.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProcessingTypes(filtered);
  };

  return {
    processingTypes: filteredProcessingTypes,
    handleSearch,
    handleCreateProcessingType,
    title,
    searchPlaceholder,
  };
};
