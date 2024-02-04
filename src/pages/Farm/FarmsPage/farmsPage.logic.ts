import { useEffect, useState } from "react";
import { Farm } from "../../../static/types/types";
import { useNavigate } from "react-router-dom";
import useFarms from "../../../hooks/UseFarms";


export const useFarmsPageLogic = () => {
  const navigate = useNavigate();

  // const [farms, setFarms] = useState<Farm[]>([]);
  const [filteredFarms, setFilteredFarms] = useState<Farm[] | undefined >([]);
  const [isLoading, setIsLoading] = useState(true);
  const title = "All Farms";
  const searchPlaceholder = "Search farm..";
  const handleCreateFarm = () => {
    navigate("/farm-create");
  };
const {farms} = useFarms();
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

return {
  farms: filteredFarms,
  isLoading,
  handleSearch,
  handleCreateFarm,
  title,
  searchPlaceholder,
};
};

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const farmsData = await fetchFarms();
//       setFarms(farmsData);
//       setFilteredFarms(farmsData);
//     } catch (error) {
//       console.error("Error during fetch:", error);
//     }
//   };
//   fetchData();
// }, []);