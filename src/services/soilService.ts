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

  export const fetchSoilDetails = async (soilId: string | undefined) => {
    try {
      const response = await fetch(`${BASE_URL}/soil/${soilId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch soil details');
      }
  
      return response.json();
    } catch (error) {
      console.error('Error during fetch soil details:', error);
      throw error;
    }
  };