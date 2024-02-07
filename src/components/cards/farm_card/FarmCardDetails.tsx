import { FarmDetailsProps } from "./FarmCardDetails.static";
import { StyledFarmDetails } from "./FarmCardDetails.styles";

export default function FarmDetails({ farm }: FarmDetailsProps) {
  return (
    <StyledFarmDetails>
      <h3>{farm.name}</h3>
    </StyledFarmDetails>
  );
}
