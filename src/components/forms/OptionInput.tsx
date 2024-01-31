const OptionInput = ({ options, label, onSelect }) => {
    return (
      <div>
        <label>
          {label}:
          <select onChange={(e) => onSelect(e.target.value)}>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  };
  
  export default OptionInput;