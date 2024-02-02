import { BASE_URL } from "../static/constants/constants";
import { apiEndpoints } from "../static/routes/apiEndpoints";
import { Soil } from "../static/types/types";

const getSoilsEndpoint = apiEndpoints.soil;
const createSoilEndpoint = apiEndpoints.createSoil;
const getSoilDetailsEndpoint = apiEndpoints.soilDetails;

export const fetchSoils = async (): Promise<Soil[]> => {
  try {
    const response = await fetch(`${BASE_URL}${getSoilsEndpoint}`, {
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
    if (!soilId) {
      throw new Error("soilId is required");
    }
    const response = await fetch(`${BASE_URL}${getSoilDetailsEndpoint.replace(":soilId", soilId)}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch soil details");
    }

    return response.json();
  } catch (error) {
    console.error("Error during fetch soil details:", error);
    throw error;
  }
};

export const createSoil = async (name: string): Promise<Soil> => {
  try {
    const response = await fetch(`${BASE_URL}${createSoilEndpoint}`, {
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
      throw new Error(`Failed to create soil: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to create soil: `, error);
    throw error;
  }
};
