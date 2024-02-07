import { BASE_URL } from "../static/constants/constants";
import { apiEndpoints } from "../static/routes/apiEndpoints";
import { GrowingPeriod } from "../static/types/types";

const getGrowingPeriodsEndpoint = apiEndpoints.growingPeriod;
const getGrowingPeriodDetailsEndpoint = apiEndpoints.growingPeriodDetails
const getGrowingPeriodsByFieldIdEndpoint = apiEndpoints.growingPeriodsByField;
const createGrowingPeriodEndpoint = apiEndpoints.createGrowingPeriod;

export const fetchGrowingPeriods = async (): Promise<GrowingPeriod[]> => {
  try {
    const response = await fetch(`${BASE_URL}${getGrowingPeriodsEndpoint}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage =
        errorData?.error?.message || "Unknown error occurred";
      console.error(`Failed to fetch growing periods: `, errorMessage);
      throw new Error(`Failed to fetch growing periods: ${errorData}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error during fetch growing periods:", error);
    throw error;
  }
};

export const fetchGrowingPeriodDetails = async (growingPeriodId: string | undefined) => {
  try {
    if (!growingPeriodId) {
      throw new Error("growingPeriodId is required");
    }
    const response = await fetch(
      `${BASE_URL}${getGrowingPeriodDetailsEndpoint.replace(
        ":growingPeriodId",
        growingPeriodId
      )}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage =
        errorData?.error?.message || "Unknown error occurred";
      console.error(`Failed to fetch growingPeriod: `, errorMessage);
      throw new Error(`Failed to fetch growingPeriod: ${errorData}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error during fetch growingPeriod details:", error);
    throw error;
  }
};

export const fetchGrowingPeriodsByFieldId = async (
  fieldId: string | undefined
): Promise<GrowingPeriod[]> => {
  try {
    if (!fieldId) {
      throw new Error("fieldId is required");
    }
    const response = await fetch(
      `${BASE_URL}${getGrowingPeriodsByFieldIdEndpoint.replace(":fieldId", fieldId)}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const growingPeriodsData = await response.json();
      return growingPeriodsData;
    } else {
      const errorData = await response.json();
      const errorMessage =
        errorData?.error?.message || "Unknown error occurred";
      console.error(`Failed to fetch growing periods: `, errorMessage);
      throw new Error(`Failed to fetch growing periods: ${errorData}`);
    }
  } catch (error) {
    console.error("Error fetching growing periods:", error);
    throw error;
  }
};
export const createGrowingPeriod = async (
  fieldId: string,
  cropId: string,
  machineId: string,
  processingTypeId: string,
  date: Date
): Promise<GrowingPeriod> => {
  try {
    const response = await fetch(`${BASE_URL}${createGrowingPeriodEndpoint}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fieldId,
        cropId,
        machineId,
        processingTypeId,
        date,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage =
        errorData?.error?.message || "Unknown error occurred";
      console.error(`Failed to create growing period: `, errorMessage);
      throw new Error(`Failed to create growing period: ${errorData}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to create growing period: `, error);
    throw error;
  }
};

