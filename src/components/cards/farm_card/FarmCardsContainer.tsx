import { Container } from "../../../ui_elements/CommonStyledElements";
import FarmCard from "./FarmCard";
import { FarmCardContainerProps } from "./FarmCardContainer.static";
import { FarmCardsContainerWrapper } from "./FarmCardContainer.styles";
const FarmCardsContainer = ({ farms }:FarmCardContainerProps) => {
    return (
      <Container>
          <FarmCardsContainerWrapper>
          {farms && farms.length > 0 ? (
          farms.map((farm) => <FarmCard key={farm.id} farm={farm} />)
        ) : (
          <p>No farms available!</p>
        )}
      </FarmCardsContainerWrapper>
        </Container>
    );
  };
  
  export default FarmCardsContainer;