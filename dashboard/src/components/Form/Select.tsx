import { forwardRef, ForwardRefRenderFunction, SelectHTMLAttributes } from "react";

interface Option {
  id: string;
  title: string;
  description?: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  variant?: 'default' | 'dark';
  options: Option[];
  error?: string;
  optional?: boolean;
  defaultSelected?: string;
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps>
  = ({ name, label, variant = 'default', options, error = null, optional = false, defaultSelected = null, ...rest }, ref) => {
    return (
      <div className="w-full">
        <div className="flex items-center gap-4 mb-2">
          <label className="text-base text-yellow-500 tracking-wider" htmlFor={name}>
            {label} {optional && <span className="text-gray-400">(opcional)</span>}
          </label>
          {error && <span className="text-red text-sm">({error})</span>}
        </div>

        <select
          ref={ref}
          name={name}
          className={`flex items-center w-full px-5 py-4 text-gray-350 text-xl outline-none ${variant === 'default' ? 'bg-gray-850' : 'bg-gray-950'} rounded-md border-2 border-transparent focus-within:border-yellow-500`}
          {...rest}
        >
          {
            options.map(option => (
              <option value={option.value} key={option.id} className="bg-gray-850">
                {option.title}{option.description && (`, ${option.description}`)}
              </option>
            ))
          }
        </select>
      </div>
    )
  }

export const Select = forwardRef(SelectBase);

