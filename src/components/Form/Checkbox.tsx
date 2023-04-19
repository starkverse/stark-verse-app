import React, { useState } from 'react';

interface FormItemProps {
  options: {
    value: string;
    label: string;
  }[];
  value?: string[];
  onChange?: any;
}

const FormItem = ({ options = [], value = [], onChange }: FormItemProps) => {
  const [selected, setSelect] = useState<string[]>(value);
  const doChange = (e: any) => {
    const nextVal = [...selected];
    const v = e.target.value;
    if (e.target.checked) {
      nextVal.push(v);
    } else {
      nextVal.splice(selected.indexOf(v), 1);
    }
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
              checked={selected.includes(String(o.value))}
              type="checkbox"
              className="checkbox checkbox-md rounded-lg"
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default FormItem;
