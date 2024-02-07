import { useNavigate } from "react-router-dom";
import { GrowingPeriodCardProps } from "./GrowingPeriodCard.static";
import GrowingPeriodCardDetails from "./GrowingPeriodCardDetails";
import { GrowingPeriodImage, StyledCurrentGrowingPeriodCard, StyledGrowingPeriodCard } from "./GrowingPeriodCard.style";
import growingPeriodImg from "../../../assets/period-placeholder.jpg"

export default function GrowingPeriodCard({ growingPeriod, isCurrent }: GrowingPeriodCardProps & { isCurrent: boolean }) {
    const navigate = useNavigate();
  
    const handleGrowingPeriodClick = () => {
      navigate(`/growing-period/${growingPeriod.id}`);
    };

    return (
      <>
        {isCurrent ? (
          <StyledCurrentGrowingPeriodCard onClick={handleGrowingPeriodClick}>
            <GrowingPeriodImage src={growingPeriodImg} alt="GrowingPeriod" />
            <GrowingPeriodCardDetails growingPeriod={growingPeriod} />
          </StyledCurrentGrowingPeriodCard>
        ) : (
          <StyledGrowingPeriodCard onClick={handleGrowingPeriodClick}>
            <GrowingPeriodImage src={growingPeriodImg} alt="GrowingPeriod" />
            <GrowingPeriodCardDetails growingPeriod={growingPeriod} />
          </StyledGrowingPeriodCard>
        )}
      </>
    );
  }