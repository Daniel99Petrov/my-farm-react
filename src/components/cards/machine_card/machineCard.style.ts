import styled from "styled-components";
import { Machine } from "../../../types/types";

export const MachineImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
`;

export interface MachineCardContainerProps {
    machines: Machine[];
  }