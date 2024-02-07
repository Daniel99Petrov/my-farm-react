import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Soil } from "../../../static/types/types";
import useSoils from "../../../hooks/Soil/UseSoils";
import useDeleteSoil from "../../../hooks/Soil/UseDeleteSoil";

export const useSoilsPageLogic = () => {
  const { soils } = useSoils();
  const { deleteSoil } = useDeleteSoil();
  const [filteredSoils, setFilteredSoils] = useState<Soil[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(true);
  const title = "All Soils";
  const searchPlaceholder = "Search soil..";
  const navigate = useNavigate();
  const handleCreateSoil = () => {
    navigate("/soil-create");
  };

  useEffect(() => {
    if (soils) {
      setFilteredSoils(soils);
      setIsLoading(false);
    }
  }, [soils]);
  const handleSearch = (query: string) => {
    const filtered = soils?.filter((soil) =>
      soil.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSoils(filtered);
  };
  const handleDeleteSoil = async (soilId: string) => {
    await deleteSoil(soilId);
  };
  

  return {
    soils: filteredSoils,
    isLoading,
    handleSearch,
    handleCreateSoil,
    handleDeleteSoil,
    title,
    searchPlaceholder,
  };
};
