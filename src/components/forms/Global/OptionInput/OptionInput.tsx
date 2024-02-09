const OptionInput = ({ options, label, onSelect, displayProperty, ...props }) => {
  const handleSelectChange = (event) => {
    const selectedOptionId = event.target.value;
    onSelect(selectedOptionId);
  };
  console.log(options);
  
  return (
    <div>
      <label>{label}</label>
      <select onChange={handleSelectChange} {...props}> 
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
