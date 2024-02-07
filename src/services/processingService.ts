import { BASE_URL } from "../static/constants/constants";
import { apiEndpoints } from "../static/routes/apiEndpoints";
import { Processing } from "../static/types/types";

const getProcessingsEndpoint = apiEndpoints.processing;
const createProcessingEndpoint = apiEndpoints.createProcessing;
const getProcessingsByGrowingPeriodIdEndpoint = apiEndpoints.processingsByGrowingPeriod;

export const fetchProcessings = async (): Promise<Processing[]> => {
  try {
    const response = await fetch(`${BASE_URL}${getProcessingsEndpoint}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage =
        errorData?.error?.message || "Unknown error occurred";
      console.error(`Failed to fetch processings: `, errorMessage);
      throw new Error(`Failed to fetch processings: ${errorData}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error during fetch processings:", error);
    throw error;
  }
};

export const fetchProcessingsByGrowingPeriodId = async (
  growingPeriodId: string | undefined
): Promise<Processing[]> => {
  try {
    if (!growingPeriodId) {
      throw new Error("Growing Period Id is required");
    }
    const response = await fetch(
      `${BASE_URL}${getProcessingsByGrowingPeriodIdEndpoint.replace(":growingPeriodId", growingPeriodId)}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const processingsData = await response.json();
      return processingsData;
    } else {
      const errorData = await response.json();
      const errorMessage =
        errorData?.error?.message || "Unknown error occurred";
      console.error(`Failed to fetch processings: `, errorMessage);
      throw new Error(`Failed to fetch processings: ${errorData}`);
    }
  } catch (error) {
    console.error("Error fetching processings:", error);
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
      const errorData = await response.json();
      const errorMessage =
        errorData?.error?.message || "Unknown error occurred";
      console.error(`Failed to create processing: `, errorMessage);
      throw new Error(`Failed to create processing: ${errorData}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to create processing: `, error);
    throw error;
  }
};
