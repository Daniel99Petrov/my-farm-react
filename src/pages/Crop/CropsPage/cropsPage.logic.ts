import { useEffect, useState } from "react";
import { Crop } from "../../../types/types";
import { useNavigate } from "react-router-dom";
import { fetchCrops } from "../../../services/cropService";

export const useCropsPageLogic = () => {
  const [crops, setCrops] = useState<Crop[]>([]);
  const [filteredCrops, setFilteredCrops] = useState<Crop[]>([]);
  const title = "All Crops";
  const searchPlaceholder = "Search crop..";
  const navigate = useNavigate();
  const handleCreateFarm = () => {
    navigate("/crop-create");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cropsData = await fetchCrops();
        setCrops(cropsData);
        setFilteredCrops(cropsData);
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };
    fetchData();
  }, []);
  const handleSearch = (query: string) => {
    const filtered = crops.filter((crop) =>
      crop.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCrops(filtered);
  };

  return {
    crops: filteredCrops,
    handleSearch,
    handleCreateFarm,
    title,
    searchPlaceholder,
  };
};
