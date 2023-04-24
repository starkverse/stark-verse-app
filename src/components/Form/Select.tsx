import React from 'react';

interface FormItemProps {
  value?: string;
  onChange?: any;
  options: {
    label: string;
    value: string;
  }[];
}

const FormSelect = ({ value = '', onChange, options }: FormItemProps) => {
  return (
    <select
      className="select w-full select-bordered select-sm"
      onChange={onChange}
    >
      {options.map((item: any) => (
        <option
          selected={value === item.value}
          key={item.value}
          value={item.value}
        >
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
