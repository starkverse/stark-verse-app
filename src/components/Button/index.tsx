import classNames from "classnames";
import { useState } from "react";

const Button = ({ disabled, children, type = 'default', size='md', className = '', circle, onClick, ...props }: any) => {
  const [loading, setLoading] = useState(false);
  const doClick = async (e: any) => {
    try {
      setLoading(true);
      await onClick?.(e);
    } finally {
      setLoading(false);
    }
  }
  return (
    <button onClick={doClick} {...props} className={classNames(`${className} inline-flex items-center rounded-md border py-2`, {
      'bg-primary border-primary hover:bg-primary-500 transition-all': type === 'primary',
      'border-primary hover:bg-primary hover:border-primary-500 transition-all': type === 'primary-out',
      'border-gray-700 hover:border-primary hover:bg-primary': type === 'default',
      'px-4 text-sm': size === 'md',
      'px-6 text-lg': size === 'lg',
      'px-2 text-xs': size === 'sm',
      '!rounded-full': circle,
      'text-gray-400 pointer-events-none': disabled || loading,
    })}>
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  )
}

export default Button;