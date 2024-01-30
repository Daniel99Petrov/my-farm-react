import { FarmDetailsProps } from "./farmCardDetails.static";
import { StyledFarmDetails } from "./farmCardDetails.styles";

export default function FarmDetails({ farm }: FarmDetailsProps) {
  return (
    <StyledFarmDetails>
      <h3>{farm.name}</h3>
    </StyledFarmDetails>
  );
}
