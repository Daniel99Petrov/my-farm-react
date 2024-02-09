import { useEffect, useRef, useState } from "react";
import { fetchFieldDetails } from "../../../../services/fieldService";
import {
  Farm,
  Field,
  Soil,
} from "../../../../static/types/types";
import L from "leaflet";
import { fetchSoilDetails } from "../../../../services/soilService";
import { fetchFarmDetails } from "../../../../services/farmService";
import useDeleteField from "../../../../hooks/Field/UseDeleteField";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../static/routes/routes";

import { useGrowingPeriodsByFieldId } from "../../../../hooks/GrowingPeriod/UseGrowingPeriodsByFieldId";

export const FieldDetailsPageLogic = (fieldId: string | undefined) => {
  const [field, setField] = useState<Field | null>(null);
  const [soil, setSoil] = useState<Soil | null>(null);
  const [farm, setFarm] = useState<Farm | null>(null);
  // const [growingPeriods, setGrowingPeriods] = useState<GrowingPeriod[]>([]);
  const { deleteField } = useDeleteField();
  const navigate = useNavigate();
  const mapRef = useRef<L.Map | null>(null);
  let {growingPeriods} = useGrowingPeriodsByFieldId(fieldId);
  if(!growingPeriods) {
    growingPeriods = [];
  }
  useEffect(() => {
    const loadField = async () => {
      try {
        const fieldData = await fetchFieldDetails(fieldId);
        setField(fieldData);
      } catch (error) {
        console.error("Error loading field details:", error);
      }
    };
    // const loadGrowingPeriods = async () => {
    //   try {
    //     const growingPeriodsData = await fetchGrowingPeriodsByFieldId(fieldId);
    //     setGrowingPeriods(growingPeriodsData);
    //   } catch (error) {
    //     console.error("Error loading growing periods:", error);
    //   }
    // };

    loadField();
    // loadGrowingPeriods();
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

  const handleCreateGrowingPeriod = (id: string) => {
    navigate(routes.createGrowingPeriod.replace(":fieldId", id));
  };
  const handleCreateProcessing = (fieldId: string, growingPeriodId: string | undefined) => {
    if (growingPeriodId) {
      navigate(
        routes.createProcessing.replace(":growingPeriodId", growingPeriodId)
      );
    } else {
      navigate(
       routes.createGrowingPeriod.replace(":fieldId", fieldId)
    )}
  };

  return {
    field,
    farm,
    soil,
    growingPeriods,
    handleCreateGrowingPeriod,
    handleCreateProcessing,
    handleUpdateFieldInfo: (id: string) =>
      navigate(routes.updateField.replace(":fieldId", id)),
    handleDeleteField: (id: string) => {
      deleteField(id);
      navigate("/field");
    },
  };
};
