import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCrops from "../../../hooks/Crop/UseCrops";
import { Crop } from "../../../static/types/types";
import useDeleteCrop from "../../../hooks/Crop/UseDeleteCrop";

export const useCropsPageLogic = () => {
  const { crops } = useCrops();
  const {deleteCrop} = useDeleteCrop();
  const [filteredCrops, setFilteredCrops] = useState<Crop[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(true);
  const title = "All Crops";
  const searchPlaceholder = "Search crop..";
  const navigate = useNavigate();
  const handleCreateCrop = () => {
    navigate("/crop-create");
  };

  useEffect(() => {
    if (crops) {
      setFilteredCrops(crops);
      setIsLoading(false);
    }
  }, [crops]);
  const handleSearch = (query: string) => {
    const filtered = crops?.filter((crop) =>
      crop.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCrops(filtered);
  };
  const handleDeleteCrop = async (cropId: string) => {
    await deleteCrop(cropId);
  };
  return {
    crops: filteredCrops,
    handleSearch,
    isLoading,
    handleCreateCrop,
    handleDeleteCrop,
    title,
    searchPlaceholder,
  };
};
