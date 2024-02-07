import { InputError, StyledInput, StyledInputWrapper } from "./Input.style";

export default function Input({ label, id, error, ...props }) {
  return (
    <StyledInputWrapper>
      <label htmlFor={id}>{label}</label>
      <StyledInput id={id} {...props} />
      <InputError>{error && <p>{error}</p>}</InputError>
    </StyledInputWrapper>
  );
}
