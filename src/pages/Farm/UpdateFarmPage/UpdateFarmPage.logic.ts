import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Farm } from "../../../static/types/types";
import { fetchFarmDetails } from "../../../services/farmService";
import { UpdateFarmFunction } from "./UpdateFarmPage.static";

export const useUpdateFarmPageLogic = (updateFarmFunction: UpdateFarmFunction) => {
  const { farmId } = useParams();
  const [farm, setFarm] = useState(null);
  const title = "Update Farm";

  useEffect(() => {
    const fetchFarm = async () => {
      try {
        const farmData = await fetchFarmDetails(farmId);
        setFarm(farmData);
      } catch (error) {
        console.error("Error fetching farm details:", error);
      }
    };

    fetchFarm();
  }, [farmId]);

  const handleSubmit = async (formData: Partial<Farm>) => {
    try {
      if (farmId) {
        updateFarmFunction({ farmId, updatedData: formData });
      } else throw new Error("No farm Id provided");
    } catch (error) {
      console.error("Error updating farm:", error);
    }
  };

  return {
    farm,
    title,
    handleSubmit,
  };
};
