import { forwardRef } from 'react';

const Input = ({ size = '', className = '', ...props }: any, ref: any) => {
  return (
    <input
      autoComplete="off"
      ref={ref}
      type="text"
      className={`input input-bordered bg-transparent input-${size} w-full ${className}`}
      {...props}
    />
  );
};

export default forwardRef(Input);
