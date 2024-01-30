import { BASE_URL } from "../constants/constants";
import { GrowingPeriod } from "../types/types";

export const fetchGrowingPeriods = async (): Promise<GrowingPeriod[]> => {
  try {
    const response = await fetch(`${BASE_URL}/growing-period`, {
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
