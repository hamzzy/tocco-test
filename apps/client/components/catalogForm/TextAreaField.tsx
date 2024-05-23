import React from 'react';

interface TextAreaFieldProps {
  label: string;
  name: string;
  value: any;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
  error?: string;
  touched?: boolean;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, name, value, onChange, onBlur, error, touched }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <textarea
          id={name}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          rows={3}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {touched && error ? (
          <div className="text-red-500 text-sm">{error}</div>
        ) : null}
      </div>
    </div>
  );
};

export default TextAreaField;
