import { BASE_URL } from "../static/constants/constants";
import { apiEndpoints } from "../static/routes/apiEndpoints";
import { Farm } from "../static/types/types";

export const getFarmsEndpoint = apiEndpoints.farm;
const getFarmDetailsEndpoint = apiEndpoints.farmDetails;
const createFarmEndpoint = apiEndpoints.createFarm;

export const fetchFarms = async (): Promise<Farm[]> => {
  try {
    const response = await fetch(`${BASE_URL}${getFarmsEndpoint}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage =
        errorData?.error?.message || "Unknown error occurred";
      console.error(`Failed to fetch farms: `, errorMessage);
      throw new Error(`Failed to fetch farms: ${errorData}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error during fetch farms:", error);
    throw error;
  }
};

export const fetchFarmDetails = async (farmId: string | undefined) => {
  try {
    if (!farmId) {
      throw new Error("farmId is required");
    }
    const response = await fetch(
      `${BASE_URL}${getFarmDetailsEndpoint.replace(":farmId", farmId)}`,
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
      console.error(`Failed to fetch farm: `, errorMessage);
      throw new Error(`Failed to fetch farm: ${errorData}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error during fetch farm details:", error);
    throw error;
  }
};

export const createFarm = async (
  name: string,
  latitude: string,
  longitude: string
): Promise<Farm> => {
  try {
    const response = await fetch(`${BASE_URL}${createFarmEndpoint}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        latitude,
        longitude,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage =
        errorData?.error?.message || "Unknown error occurred";
      console.error(`Failed to create farm: `, errorMessage);
      throw new Error(`Failed to create farm: ${errorData}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to create farm: `, error);
    throw error;
  }
};
