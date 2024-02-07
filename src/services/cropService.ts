import { apiEndpoints } from "../static/routes/apiEndpoints";
import { BASE_URL } from "../static/constants/constants";
import { Crop } from "../static/types/types";

const getCropsEndpoint = apiEndpoints.crop;
const getCropDetailsEndpoint = apiEndpoints.cropDetails;
const createCropEndpoint = apiEndpoints.createCrop;

export const fetchCrops = async (): Promise<Crop[]> => {
  try {
    const response = await fetch(`${BASE_URL}${getCropsEndpoint}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage =
        errorData?.error?.message || "Unknown error occurred";
      console.error(`Failed to fetch crops: `, errorMessage);
      throw new Error(`Failed to fetch crops: ${errorData}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error during fetch crops:", error);
    throw error;
  }
};

export const fetchCropDetails = async (cropId: string | undefined) => {
  try {
    if (!cropId) {
      throw new Error("cropId is required");
    }
    const response = await fetch(
      `${BASE_URL}${getCropDetailsEndpoint.replace(":cropId", cropId)}`,
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
      console.error(`Failed to fetch crop: `, errorMessage);
      throw new Error(`Failed to fetch crop: ${errorData}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error during fetch crop details:", error);
    throw error;
  }
};

export const createCrop = async (name: string): Promise<Crop> => {
  try {
    const response = await fetch(`${BASE_URL}${createCropEndpoint}`, {
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
      const errorData = await response.json();
      const errorMessage =
        errorData?.error?.message || "Unknown error occurred";
      console.error(`Failed to create crop: `, errorMessage);
      throw new Error(`Failed to create crop: ${errorData}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to create Crop: `, error);
    throw error;
  }
};
