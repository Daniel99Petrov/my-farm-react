import styled from "styled-components";

export const GreenButton = styled.button`
  padding: 10px 15px;
  background-color: #8db76d;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6a9447;
  }
`;

export const RedButton = styled(GreenButton)`
  background-color: #ff0000;
  &:hover {
    background-color: #cc0000;
  }
`;

export const FormItems = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  padding: 0 2rem;
  overflow: hidden;
`;

export const MapDetailsContainer = styled.div`
max-width: 1500px;
margin: 10px auto;
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 20px;
  padding:10px;
  max-width: 1500px;
  background-color: aliceblue;
`;

export const CardIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;

export const PageTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
margin: 20px;
font-size: 26px;
`