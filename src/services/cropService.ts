import { BASE_URL } from "../constants/constants";
import { Crop } from "../types/types";

export const fetchCrops = async (): Promise<Crop[]> => {
  try {
    const response = await fetch(`${BASE_URL}/crop`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch crops");
    }

    return response.json();
  } catch (error) {
    console.error("Error during fetch crops:", error);
    throw error;
  }
};
