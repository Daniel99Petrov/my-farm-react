import { BASE_URL } from "../static/constants/constants";
import { apiEndpoints } from "../static/routes/apiEndpoints";
import { ProcessingType } from "../static/types/types";

const getProcessingTypesEndpoint = apiEndpoints.processingType;
const createProcessingTypeEndpoint = apiEndpoints.createProcessingType;

export const fetchProcessingTypes = async (): Promise<ProcessingType[]> => {
  try {
    const response = await fetch(`${BASE_URL}${getProcessingTypesEndpoint}`, {
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

export const createProcessingType = async (
  name: string
): Promise<ProcessingType> => {
  try {
    const response = await fetch(`${BASE_URL}${createProcessingTypeEndpoint}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create ProcessingType: ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to create ProcessingType: `, error);
    throw error;
  }
};
