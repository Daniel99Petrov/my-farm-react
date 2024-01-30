import { BASE_URL } from "../constants/constants";
import { ProcessingType } from "../types/types";

export const fetchProcessingTypes = async (): Promise<ProcessingType[]> => {
    try {
      const response = await fetch(`${BASE_URL}/processing-type`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch processing types");
      }
  
      return response.json();
    } catch (error) {
      console.error("Error during fetch processing types:", error);
      throw error;
    }
  };