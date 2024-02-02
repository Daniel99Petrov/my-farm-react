import { useEffect, useState } from "react";
import { GrowingPeriod } from "../static/types/types";
import { fetchGrowingPeriods } from "../services/growingPeriodService";

const useGrowingPeriods = () => {
  const [growingPeriods, setGrowingPeriods] = useState<GrowingPeriod[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const growingPeriodData = await fetchGrowingPeriods();
        setGrowingPeriods(growingPeriodData);
      } catch (error) {
        console.error("Error during fetch:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { growingPeriods, loading };
};

export default useGrowingPeriods;
