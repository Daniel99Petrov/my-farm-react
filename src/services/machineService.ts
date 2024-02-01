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

  export const fetchMachineDetails = async (machineId: string | undefined) => {
    try {
      const response = await fetch(`${BASE_URL}/machine/${machineId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch machine details');
      }
  
      return response.json();
    } catch (error) {
      console.error('Error during fetch machine details:', error);
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

  export const createMachine= async (
    registrationNumber: string,
    brand: string,
    model: string,
    farmId: string,
  ): Promise<Machine> => {
    try {
      const response = await fetch(`${BASE_URL}/machine`, {
        method: 'POST',
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          registrationNumber,
          brand,
          model,
          farmId,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to create field: ${response}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error(`Failed to create field: `, error);
      throw error;
    }
  };