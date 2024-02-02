import { BASE_URL } from "../static/constants/constants";
import { apiEndpoints } from "../static/routes/apiEndpoints";
import { GrowingPeriod } from "../static/types/types";

const getGrowingPeriodsEndpoint = apiEndpoints.growingPeriod;

export const fetchGrowingPeriods = async (): Promise<GrowingPeriod[]> => {
  try {
    const response = await fetch(`${BASE_URL}${getGrowingPeriodsEndpoint}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch growing periods");
    }

    return response.json();
  } catch (error) {
    console.error("Error during fetch growing periods:", error);
    throw error;
  }
};
