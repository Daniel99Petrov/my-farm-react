import { ChangeEvent, useState } from "react";
import styled from "styled-components";

const StyledInputWrapper = styled.div`
  position: relative;
  width: 90%;
  margin-bottom: 16px;
`;

const StyledInput = styled.input`
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: #555;
  pointer-events: none;
  transition: font-size 0.2s, transform 0.2s;
`;

interface InputProps {
  type: string;
  name: string
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
}

export default function Input(props: InputProps) {
  const [isLabelVisible, setIsLabelVisible] = useState(true);

  const handleInputFocus = () => {
    setIsLabelVisible(false);
  };

  const handleInputBlur = () => {
    if (!props.value) {
      setIsLabelVisible(true);
    }
  };

  return (
    <StyledInputWrapper>
      <StyledInput
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {isLabelVisible && <StyledLabel>{props.label}</StyledLabel>}
    </StyledInputWrapper>
  );
}