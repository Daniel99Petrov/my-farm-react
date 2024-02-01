import { useEffect, useState } from "react";
import { fetchSoils } from "../services/soilService";
import { Soil } from "../types/types";

const useSoils = () => {
  const [soils, setSoils] = useState<Soil[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const soilsData = await fetchSoils();
        setSoils(soilsData);
      } catch (error) {
        console.error("Error during fetch:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { soils, loading };
};

export default useSoils;
