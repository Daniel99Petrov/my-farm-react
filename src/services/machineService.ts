import { BASE_URL } from "../static/constants/constants";
import { apiEndpoints } from "../static/routes/apiEndpoints";
import { Machine } from "../static/types/types";

const getMachinesEndpoint = apiEndpoints.machine;
const getMachineDetailsEndpoint = apiEndpoints.machineDetails;
const createMachineEndpoint = apiEndpoints.createMachine;
const getMachinesByFarmEndpoint = apiEndpoints.machinesByFarm;

export const fetchMachines = async (): Promise<Machine[]> => {
  try {
    const response = await fetch(`${BASE_URL}${getMachinesEndpoint}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch machines");
    }

    return response.json();
  } catch (error) {
    console.error("Error during fetch machines:", error);
    throw error;
  }
};

export const fetchMachineDetails = async (machineId: string | undefined) => {
  try {
    if (!machineId) {
      throw new Error("machineId is required");
    }
    const response = await fetch(
      `${BASE_URL}${getMachineDetailsEndpoint.replace(
        ":machineId",
        machineId
      )}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch machine details");
    }

    return response.json();
  } catch (error) {
    console.error("Error during fetch machine details:", error);
    throw error;
  }
};
export const fetchMachinesByFarmId = async (
  farmId: string | undefined
): Promise<Machine[]> => {
  try {
    if (!farmId) {
      throw new Error("farmId is required");
    }
    const response = await fetch(
      `${BASE_URL}${getMachinesByFarmEndpoint.replace(":farmId", farmId)}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const machinesData = await response.json();
      return machinesData;
    } else {
      throw new Error("Failed to fetch machines");
    }
  } catch (error) {
    console.error("Error fetching machines:", error);
    throw error;
  }
};

export const createMachine = async (
  registrationNumber: string,
  brand: string,
  model: string,
  farmId: string
): Promise<Machine> => {
  try {
    const response = await fetch(`${BASE_URL}${createMachineEndpoint}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        registrationNumber,
        brand,
        model,
        farmId,
      }),
    });

    if (!response.ok) {
      // DONE
      const errorData = await response.json();
      const errorMessage =
        errorData?.error?.message || "Unknown error occurred";
      console.error(`Failed to create machine: `, errorMessage);
      throw new Error(`Failed to create machine: ${errorData}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to create machine: `, error);
    throw error;
  }
};
