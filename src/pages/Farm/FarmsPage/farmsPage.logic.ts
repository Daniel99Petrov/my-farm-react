import { useEffect, useState } from "react";
import { Farm } from "../../../types/types";
import { fetchFarms } from "../../../services/farmService";
import { useNavigate } from "react-router-dom";

export const useFarmsPageLogic = () => {
  const navigate = useNavigate();
  
  const [farms, setFarms] = useState<Farm[]>([]);
  const [filteredFarms, setFilteredFarms] = useState<Farm[]>([]);
  const title = "All Farms";
  const searchPlaceholder = "Search farm..";
  const handleCreateFarm = () => {
    navigate("/farm-create");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const farmsData = await fetchFarms();
        setFarms(farmsData);
        setFilteredFarms(farmsData);
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };
    fetchData();
  }, []);
  const handleSearch = (query: string) => {
    const filtered = farms.filter((farm) =>
      farm.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFarms(filtered);
  };

  return {
    farms: filteredFarms,
    handleSearch,
    handleCreateFarm,
    title,
    searchPlaceholder,
  };
};
