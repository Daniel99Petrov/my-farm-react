const OptionInput = ({ options, label, onSelect, displayProperty }) => {
  const handleSelectChange = (event) => {
    const selectedOptionId = event.target.value;
    onSelect(selectedOptionId);
  };
  return (
    <div>
      <label>{label}</label>
      <select onChange={handleSelectChange}>
        <option value="" disabled selected>
          {`Choose ${label}`}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option[displayProperty]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionInput;
