import React from 'react';

interface FormItemProps {
  value?: boolean;
  onChange?: any;
}

const FormSwitch = ({ value = false, onChange }: FormItemProps) => {
  const doChange = (e: any) => {
    const nextVal = e.target.checked;
    onChange?.(nextVal);
  };
  return (
    <input
      type="checkbox"
      className="toggle toggle-primary"
      checked={value}
      onChange={doChange}
    />
  );
};

export default FormSwitch;
