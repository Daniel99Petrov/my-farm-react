import { SelectContainer, SelectLabel, Select } from "./optionInput.styles";

const OptionInput = ({
  options,
  label,
  onSelect,
  displayProperty,
  ...props
}) => {
  const handleSelectChange = (event: { target: { value: string; }; }) => {
    const selectedOptionId = event.target.value;
    onSelect(selectedOptionId);
  };
  console.log(options);

  return (
    <SelectContainer>
      <SelectLabel>{label}</SelectLabel>
      <Select onChange={handleSelectChange} {...props}>
        <option value="" disabled selected>
          {`Choose ${label}`}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option[displayProperty]}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
};

export default OptionInput;
