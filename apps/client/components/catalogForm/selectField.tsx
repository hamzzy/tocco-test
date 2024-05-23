import React from 'react';
import Select from 'react-tailwindcss-select';
import 'react-tailwindcss-select/dist/index.css'
interface SelectFieldProps {
  name: string;
  value: any;
  onChange: (selectedOptions: any) => void;
  options: any[];
  error?: string;
  touched?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({ name, value, onChange, options, error, touched }) => {
  return (
    <div>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        options={options}
        isMultiple={true}
      />
      {touched && error ? (
        <div className="text-red-500 text-sm">{error}</div>
      ) : null}
    </div>
  );
};

export default SelectField;
