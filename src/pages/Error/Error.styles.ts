import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ErrorMessage = styled.h1`
  font-size: 3rem;
  color: #e74c3c;
  margin-bottom: 20px;
`;

export const ErrorDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
`;