import styled from "styled-components";

export const GrowingPeriodCardsContainerWrapper = styled.div`

  background-color: aliceblue;
  margin: 10px auto;
  padding: 10px 20px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const StyledGrowingPeriodDetails = styled.div`
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const StyledGrowingPeriodCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.05);
  }
`;

export const StyledCurrentGrowingPeriodCard = styled(StyledGrowingPeriodCard)`
background-color: #8db76d;
&:hover {
    background-color: #8dd76d;
    transform: scale(1.05);
  }
`

export const GrowingPeriodImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
`;
