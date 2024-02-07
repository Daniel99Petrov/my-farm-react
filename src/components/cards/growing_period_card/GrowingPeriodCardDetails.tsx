import { useEffect, useState } from "react";
import { Crop } from "../../../static/types/types";
import { Container } from "../../../ui_elements/CommonStyledElements";
import { GrowingPeriodCardProps } from "./GrowingPeriodCard.static";
import { StyledGrowingPeriodDetails } from "./GrowingPeriodCard.style";
import { fetchCropDetails } from "../../../services/cropService";

export default function GrowingPeriodDetails({ growingPeriod }: GrowingPeriodCardProps) {
    const createdYear = new Date(growingPeriod.created).getFullYear();
    const [crop, setCrop] = useState<Crop>();
    useEffect(() => {
      const loadCrop = async () => {
        try {
          const fieldData = await fetchCropDetails(growingPeriod.cropId);
          setCrop(fieldData);
        } catch (error) {
          console.error("Error loading field details:", error);
        }
      }; 
  
      loadCrop()
    }, [growingPeriod]);
    return (
      <StyledGrowingPeriodDetails>
        <Container>
        <h3>{crop?.name}</h3>
        <h3>{createdYear}/{createdYear+1}</h3>
        </Container>
      </StyledGrowingPeriodDetails>
    );
  }