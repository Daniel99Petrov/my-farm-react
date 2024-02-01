import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Soil } from "../../../types/types";
import { fetchSoils } from "../../../services/soilService";

export const useSoilsPageLogic = () => {
  const [soils, setSoils] = useState<Soil[]>([]);
  const [filteredSoils, setFilteredSoils] = useState<Soil[]>([]);
  const title = "All Soils";
  const searchPlaceholder = "Search soil..";
  const navigate = useNavigate();
  const handleCreateSoil = () => {
    navigate("/soil-create");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const soilsData = await fetchSoils();
        setSoils(soilsData);
        setFilteredSoils(soilsData);
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };
    fetchData();
  }, []);
  const handleSearch = (query: string) => {
    const filtered = soils.filter((soil) =>
      soil.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSoils(filtered);
  };

  return {
    soils: filteredSoils,
    handleSearch,
    handleCreateSoil,
    title,
    searchPlaceholder,
  };
};
