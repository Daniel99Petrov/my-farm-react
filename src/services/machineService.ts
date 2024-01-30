import { BASE_URL } from "../constants/constants";
import { Machine } from "../types/types";

export const fetchMachines = async (): Promise<Machine[]> => {
    try {
      const response = await fetch(`${BASE_URL}/machine`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch machines");
      }
  
      return response.json();
    } catch (error) {
      console.error("Error during fetch machines:", error);
      throw error;
    }
  };

  export const fetchMachinesByFarmId = async (
    farmId: string | undefined
  ): Promise<Machine[]> => {
    try {
      const response = await fetch(`${BASE_URL}/machine/by-farm/${farmId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const machinesData = await response.json();
        return machinesData;
      } else {
        throw new Error("Failed to fetch machines");
      }
    } catch (error) {
      console.error("Error fetching machines:", error);
      throw error;
    }
  };