import { useEffect, useState } from "react";
import { Farm } from "../../../static/types/types";
import { useNavigate } from "react-router-dom";
import useFarms from "../../../hooks/Farm/UseFarms";
import useDeleteFarm from "../../../hooks/Farm/UseDeleteFarm";

export const useFarmsPageLogic = () => {
  const { farms } = useFarms();
  const { deleteFarm } = useDeleteFarm();
  const [filteredFarms, setFilteredFarms] = useState<Farm[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(true);
  const title = "All Farms";
  const searchPlaceholder = "Search farm..";
  const navigate = useNavigate();
  const handleCreateFarm = () => {
    navigate("/farm-create");
  };
  console.log(isLoading);

  useEffect(() => {
    if (farms) {
      setFilteredFarms(farms);
      setIsLoading(false);
    }
  }, [farms]);
  const handleSearch = (query: string) => {
    const filtered = farms?.filter((farm: Farm) =>
      farm.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFarms(filtered);
  };
  const handleDeleteFarm = async (farmId: string) => {
    deleteFarm(farmId);
  };
  return {
    farms: filteredFarms,
    isLoading,
    handleSearch,
    handleCreateFarm,
    handleDeleteFarm,
    title,
    searchPlaceholder,
  };
};
