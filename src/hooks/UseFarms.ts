import { useQuery } from "@tanstack/react-query";
import { fetchFarms, getFarmsEndpoint } from "../services/farmService";
import { BASE_URL } from "../static/constants/constants";
import { useEffect, useState } from "react";
import { Farm } from "../static/types/types";

// const getFarmsEndpoint = apiEndpoints.farm;

const useFarms = () => {
  const {
    data: farms,
    isLoading,
    error,
    refetch,
  } = useQuery({ queryKey: ["farms"], queryFn: getFarms });
  async function getFarms() {
    try {
      const response = await fetch(`${BASE_URL}${getFarmsEndpoint}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch farms");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Error during fetch farms:", error);
      throw error;
    }
  }

  return { farms, isLoading, error, refetch };
};
// const [farms, setFarms] = useState<Farm[]>([]);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   console.log("hello");
//   const fetchData = async () => {
//     try {
//       const machinesData = await fetchFarms();
//       console.log(machinesData);

//       setFarms(machinesData);
//     } catch (error) {
//       console.error("Error during fetch:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchData();
// }, []);

// return { farms, loading };
// };
export default useFarms;
