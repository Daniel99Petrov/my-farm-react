import { useEffect, useState } from "react";
import { Farm } from "../types/types";
import { fetchFarms } from "../services/farmService";

const useFarms = () => {
  const [farms, setFarms] = useState<Farm[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const farmsData = await fetchFarms();
        setFarms(farmsData);
      } catch (error) {
        console.error("Error during fetch:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { farms, loading };
};

export default useFarms;
