import { useNavigate } from "react-router-dom";
import farmImg from "../../../assets/farm-placeholder.jpg";
import FarmCardDetails from "./FarmCardDetails";
import { FarmCardProps } from "./FarmCard.static";
import { StyledFarmCard, FarmImage } from "./FarmCard.styles";


export default function FarmCard({ farm }: FarmCardProps) {

  const navigate = useNavigate();

  const handleFarmClick = () => {
    navigate(`/farm/${farm.id}`);
  };

  return (
    <StyledFarmCard onClick={handleFarmClick}>
      <FarmImage src={farmImg} alt="Farm"/>
      <FarmCardDetails farm={farm} />
    </StyledFarmCard>
  );
}
