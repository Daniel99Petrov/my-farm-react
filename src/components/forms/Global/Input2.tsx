import styled from "styled-components";
import { StyledInput, StyledInputWrapper } from "./Input";


export const InputError = styled.div`
  color: #ffca99;
  font-size: 0.8rem;
  height: 2rem;
  padding: 0.5rem 0;

  p {
    margin: 0;
  }
`;

export default function Input({ label, id, error, ...props }) {
  return (
    <StyledInputWrapper>
      <label htmlFor={id}>{label}</label>
      <StyledInput id={id} {...props} />
      <InputError>{error && <p>{error}</p>}</InputError>
    </StyledInputWrapper>
  );
}
