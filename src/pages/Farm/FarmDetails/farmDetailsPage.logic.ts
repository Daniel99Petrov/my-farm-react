import { useEffect, useRef, useState } from "react";
import { fetchFarmDetails } from "../../../services/farmService";
import { fetchFieldsByFarmId } from "../../../services/fieldService";
import { fetchMachinesByFarmId } from "../../../services/machineService";
import { Farm, Field, Machine } from "../../../types/types";
import L from "leaflet";
import useToggle from "../../../hooks/Toggle";

export const FarmDetailsPageLogic = (farmId: string | undefined) => {
    const [farm, setFarm] = useState<Farm | null>(null);
    const [fields, setFields] = useState<Field[]>([]);
    const [machines, setMachines] = useState<Machine[]>([]);
    const mapRef = useRef<L.Map | null>(null);
    const [showFields, toggleShowFields] = useToggle(true);
  
    useEffect(() => {
      const loadFarmDetails = async () => {
        try {
          const farmData = await fetchFarmDetails(farmId);
          setFarm(farmData);
        } catch (error) {
          console.error("Error loading farm details:", error);
        }
      };
  
      const loadFields = async () => {
        try {
          const fieldsData = await fetchFieldsByFarmId(farmId);
          setFields(fieldsData);
        } catch (error) {
          console.error("Error loading fields:", error);
        }
      };
  
      const loadMachines = async () => {
        try {
          const machinesData = await fetchMachinesByFarmId(farmId);
          setMachines(machinesData);
        } catch (error) {
          console.error("Error loading machines:", error);
        }
      };
  
      loadFarmDetails();
      loadFields();
      loadMachines();
    }, [farmId]);
  
    useEffect(() => {
      if (farm && farm.location) {
        const [longitude, latitude] = farm.location.coordinates;
  
        if (!mapRef.current) {
          const newMap = L.map("map").setView([latitude, longitude], 13);
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(newMap);
          L.marker([latitude, longitude]).addTo(newMap);
          mapRef.current = newMap;
        }
      }
    }, [farm]);
  
    return { farm, fields, machines,showFields,toggleShowFields, handleUpdateFarmInfo: (id: string) => console.log(id) };
  };