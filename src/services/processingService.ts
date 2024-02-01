import { BASE_URL } from "../constants/constants";
import { Processing } from "../types/types";

export const fetchProcessings = async (): Promise<Processing[]> => {
  try {
    const response = await fetch(`${BASE_URL}/processing`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch processings");
    }

    return response.json();
  } catch (error) {
    console.error("Error during fetch processings:", error);
    throw error;
  }
};

export const createProcessing = async (
  growingPeriodId: string,
  processingTypeId: string,
  machineId: string,
  date: Date
): Promise<Processing> => {
  try {
    const response = await fetch(`${BASE_URL}/processing`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        growingPeriodId,
        processingTypeId,
        machineId,
        date
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to create processing: ${response}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to create processing: `, error);
    throw error;
  }
};
