import { useEffect, useState } from 'react';

const UpdateOptionInput = ({ options, label, onSelect, displayProperty, defaultValue, ...props }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue || '');

    useEffect(() => {
        setSelectedValue(defaultValue || '');
    }, [defaultValue]);

    const handleSelectChange = (event) => {
        const selectedOptionId = event.target.value;
        setSelectedValue(selectedOptionId);
        onSelect(selectedOptionId);
    };

    return (
        <div>
            <label>{label}</label>
            <select onChange={handleSelectChange} {...props} value={selectedValue || ''}>
                <option value="" disabled>
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

export default UpdateOptionInput;
