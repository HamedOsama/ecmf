import { FC, forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string,
  name: string
  placeholder: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label, name, placeholder
}, ref) => {
  return (
    <div className="">
      <label htmlFor={name} className='text-white text-base sm:text-lg font-light px-1'>
        {label}
      </label>
      <input
        ref={ref}
        name={name}
        placeholder={placeholder}
        className='bg-transparent border border-white rounded-md px-4 py-2 w-full focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500 text-white duration-300' />
    </div>
  )

})

Input.displayName = 'Input';
export default Input