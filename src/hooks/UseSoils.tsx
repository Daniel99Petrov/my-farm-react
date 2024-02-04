import { useQuery } from "@tanstack/react-query";
import { fetchSoils, getSoilsEndpoint } from "../services/soilService";
import { BASE_URL } from "../static/constants/constants";
import { useEffect, useState } from "react";
import { Soil } from "../static/types/types";


const useSoils = () => {
  const {
    data: soils,
    isLoading,
    error,
    refetch
  } = useQuery({queryKey:['soils'],queryFn: getSoils});
  async function getSoils() {
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
      
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error("Error during fetch soils:", error);
      throw error;
    }
  }


  return { soils, isLoading, error, refetch };
};
export default useSoils;
