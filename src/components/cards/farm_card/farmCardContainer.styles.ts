import styled from "styled-components";

export const FarmCardsContainerWrapper = styled.div`
  /* h2 {
    margin-bottom: 10px;
  } */

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