import { BASE_URL } from "../constants/constants";
import { Soil } from "../types/types";

export const fetchSoils = async (): Promise<Soil[]> => {
    try {
      const response = await fetch(`${BASE_URL}/soil`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch soils");
      }
  
      return response.json();
    } catch (error) {
      console.error("Error during fetch soils:", error);
      throw error;
    }
  };