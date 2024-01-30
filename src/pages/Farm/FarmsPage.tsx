import { useEffect, useState } from "react";
import { Farm } from "../../types/types";
import { fetchFarms } from "../../services/farmService";
import FarmCardsContainer from "../../components/cards/farm_card/FarmCardsContainer";

export default function FarmsPage() {
  const [farms, setFarms] = useState<Farm[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const farmsData = await fetchFarms();
        setFarms(farmsData);
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Farms Page</h2>
      {farms && <FarmCardsContainer farms={farms} />}
    </div>
  );
}
