import { useEffect, useRef, useState } from "react";
import { fetchFieldDetails } from "../../../../services/fieldService";
import { Farm, Field, Soil } from "../../../../static/types/types";
import L from "leaflet";
import { fetchSoilDetails } from "../../../../services/soilService";
import { fetchFarmDetails } from "../../../../services/farmService";

export const FieldDetailsPageLogic = (fieldId: string | undefined) => {
  const [field, setField] = useState<Field | null>(null);
  const [soil, setSoil] = useState<Soil | null>(null);
  const [farm, setFarm] = useState<Farm | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const loadField = async () => {
      try {
        const fieldData = await fetchFieldDetails(fieldId);
        setField(fieldData);
      } catch (error) {
        console.error("Error loading field details:", error);
      }
    };

    loadField();
  }, [fieldId]);

  useEffect(() => {
    console.log(field);

    if (field) {
      const loadSoil = async () => {
        try {
          const soilData = await fetchSoilDetails(field.soilId);
          setSoil(soilData);
        } catch (error) {
          console.error("Error loading soil:", error);
        }
      };

      const loadFarm = async () => {
        try {
          const farmData = await fetchFarmDetails(field.farmId);
          setFarm(farmData);
        } catch (error) {
          console.error("Error loading farm:", error);
        }
      };

      loadSoil();
      loadFarm();
    }
  }, [field]);

  useEffect(() => {
    console.log(field);

    if (field && field.borders) {
      const borders = field.borders;
      const coordinates = borders.coordinates;

      // Check if map container is already initialized
      if (!mapRef.current) {
        // Create a new map
        const newMap = L.map("fieldMap");
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
          newMap
        );

        // Create an array to store LatLng objects
        const latLngs = coordinates[0].map((coord) =>
          L.latLng(coord[1], coord[0])
        );

        // Create a Leaflet Polygon with the array of LatLngs
        const polygon = L.polygon(latLngs);

        // Add the Polygon to the map
        polygon.addTo(newMap);

        // Fit the map to the bounds of the Polygon
        newMap.fitBounds(polygon.getBounds());

        // Save the new map reference
        mapRef.current = newMap;
      }
    }
  }, [field]);

  return {
    field,
    farm,
    soil,
    handleUpdateFieldInfo: (id: string) => console.log(id),
  };
};
