import React, { useState } from 'react';

interface FormItemProps {
  options: {
    value: string;
    label: string;
  }[];
  value?: string;
  onChange?: any;
}

const FormRadio = ({ options = [], value = '', onChange }: FormItemProps) => {
  const [selected, setSelect] = useState<string>(value);
  const doChange = (e: any) => {
    const nextVal = e.target.value;
    setSelect(nextVal);
    onChange?.(nextVal);
  };
  return (
    <div>
      {options.map((o: any) => (
        <div className="form-control" key={o.value}>
          <label className="label cursor-pointer px-0">
            <span className="label-text text-inherit">{o.label}</span>
            <input
              value={o.value}
              onChange={doChange}
              checked={selected === String(o.value)}
              type="radio"
              className="radio"
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default FormRadio;
