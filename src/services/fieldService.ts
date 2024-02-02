import { BASE_URL } from "../static/constants/constants";
import { apiEndpoints } from "../static/routes/apiEndpoints";
import { Field } from "../static/types/types";

const getFieldsEndpoint = apiEndpoints.field;
const createFieldEndpoint = apiEndpoints.createField;
const getFieldDetailsEndpoint = apiEndpoints.fieldDetails;
const getFieldsByFarmEndpoint = apiEndpoints.fieldsByFarm;

export const fetchFields = async (): Promise<Field[]> => {
  try {
    const response = await fetch(`${BASE_URL}${getFieldsEndpoint}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch fields");
    }

    return response.json();
  } catch (error) {
    console.error("Error during fetch fields:", error);
    throw error;
  }
};

export const fetchFieldDetails = async (fieldId: string | undefined) => {
  try {
    if (!fieldId) {
      throw new Error("fieldId is required");
    }
    const response = await fetch(`${BASE_URL}${getFieldDetailsEndpoint.replace(":fieldId", fieldId)}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch field details");
    }

    return response.json();
  } catch (error) {
    console.error("Error during fetch field details:", error);
    throw error;
  }
};

export const fetchFieldsByFarmId = async (
  farmId: string | undefined
): Promise<Field[]> => {
  try {
    if (!farmId) {
      throw new Error("farmId is required");
    }
    const response = await fetch(`${BASE_URL}${getFieldsByFarmEndpoint.replace(":farmId", farmId)}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const fieldsData = await response.json();
      return fieldsData;
    } else {
      throw new Error("Failed to fetch fields");
    }
  } catch (error) {
    console.error("Error fetching fields:", error);
    throw error;
  }
};

export const createField = async (
  name: string,
  borders: { type: string; coordinates: number[][][] },
  farmId: string,
  soilId: string
): Promise<Field> => {
  try {
    const response = await fetch(`${BASE_URL}${createFieldEndpoint}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        borders,
        farmId,
        soilId,
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
