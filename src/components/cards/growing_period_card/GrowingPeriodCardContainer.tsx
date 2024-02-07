import { useEffect, useState } from "react";
import { Container } from "../../../ui_elements/CommonStyledElements";
import GrowingPeriodCard from "./GrowingPeriodCard";
import { GrowingPeriodCardContainerProps } from "./GrowingPeriodCard.static";
import { GrowingPeriodCardsContainerWrapper } from "./GrowingPeriodCard.style";

const GrowingPeriodCardsContainer = ({
  growingPeriods,
}: GrowingPeriodCardContainerProps) => {
  const [currentGrowingPeriodId, setCurrentGrowingPeriodId] = useState<
    string | null
  >(null);
  useEffect(() => {
    if (growingPeriods && growingPeriods.length > 0) {
      setCurrentGrowingPeriodId(growingPeriods[0].id);
    }
  }, [growingPeriods]);
  return (
    <Container>
      <GrowingPeriodCardsContainerWrapper>
        {growingPeriods && growingPeriods.length > 0 ? (
          growingPeriods.map((period) => (
            <GrowingPeriodCard
              key={period.id}
              growingPeriod={period}
              isCurrent={period.id === currentGrowingPeriodId}
            />
          ))
        ) : (
          <p>No Growing Periods available!</p>
        )}
      </GrowingPeriodCardsContainerWrapper>
    </Container>
  );
};

export default GrowingPeriodCardsContainer;
