import { BASE_URL } from "../static/constants/constants";
import { apiEndpoints } from "../static/routes/apiEndpoints";
import { Processing } from "../static/types/types";

const getProcessingsEndpoint = apiEndpoints.processing;
const createProcessingEndpoint = apiEndpoints.createProcessing;

export const fetchProcessings = async (): Promise<Processing[]> => {
  try {
    const response = await fetch(`${BASE_URL}${getProcessingsEndpoint}`, {
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
    const response = await fetch(`${BASE_URL}${createProcessingEndpoint}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        growingPeriodId,
        processingTypeId,
        machineId,
        date,
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
