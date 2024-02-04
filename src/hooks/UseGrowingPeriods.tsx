import { fetchGrowingPeriods } from "../services/growingPeriodService";
import { GrowingPeriod } from "../static/types/types";
import { useEffect, useState } from "react";

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
