import { BASE_URL } from "../constants/constants";
import { Field } from "../types/types";

export const fetchFields = async (): Promise<Field[]> => {
  try {
    const response = await fetch(`${BASE_URL}/field`, {
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
    const response = await fetch(`${BASE_URL}/field/${fieldId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch field details');
    }

    return response.json();
  } catch (error) {
    console.error('Error during fetch field details:', error);
    throw error;
  }
};


export const fetchFieldsByFarmId = async (
  farmId: string | undefined
): Promise<Field[]> => {
  try {
    const response = await fetch(`${BASE_URL}/field/by-farm/${farmId}`, {
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
