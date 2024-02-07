import styled from "styled-components";

export const InputError = styled.div`
  color: #de6b00;
  font-size: 0.8rem;
  height: 2rem;
  padding: 0.5rem 0;

  p {
    margin: 0;
  }
`;

export const StyledInputWrapper = styled.div`
  position: relative;
  width: 90%;
  margin-bottom: 16px;

  label {
    display: block;
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
    color: #9bafaf;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const StyledInput = styled.input`
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;