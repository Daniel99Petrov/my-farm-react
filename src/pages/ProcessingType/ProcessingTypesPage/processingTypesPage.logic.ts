import { useEffect, useState } from "react";
import { ProcessingType } from "../../../static/types/types";
import { useNavigate } from "react-router-dom";
import useProcessingTypes from "../../../hooks/ProcessingType/UseProcessingTypes";
import useDeleteProcessingType from "../../../hooks/ProcessingType/UseDeleteProcessingType";

export const useProcessingTypesPageLogic = () => {
  const { processingTypes } = useProcessingTypes();
  const {deleteProcessingType} = useDeleteProcessingType();
  const [filteredProcessingTypes, setFilteredProcessingTypes] = useState<
    ProcessingType[] | undefined
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const title = "All Processing Types";
  const searchPlaceholder = "Search processing type..";
  const navigate = useNavigate();
  const handleCreateProcessingType = () => {
    navigate("/processing-type-create");
  };

  useEffect(() => {
    if (processingTypes) {
      setFilteredProcessingTypes(processingTypes);
      setIsLoading(false);
    }
  }, [processingTypes]);
  const handleSearch = (query: string) => {
    const filtered = processingTypes?.filter((processingType) =>
      processingType.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProcessingTypes(filtered);
  };
  const handleDeleteProcessingType= async (processingTypeId: string) => {
    await deleteProcessingType(processingTypeId);
  };

  return {
    processingTypes: filteredProcessingTypes,
    handleSearch,
    isLoading,
    handleCreateProcessingType,
    handleDeleteProcessingType,
    title,
    searchPlaceholder,
  };
};
