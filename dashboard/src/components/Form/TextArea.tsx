import { forwardRef, ForwardRefRenderFunction, TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string;
  variant?: 'default' | 'dark';
  error?: string;
  optional?: boolean;
}

const TextAreaBase: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> 
 = ({ name, label, variant = 'default', error = null, optional = false, ...rest }, ref) => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-2">
        <label className="text-base text-yellow-500 tracking-wider" htmlFor={name}>
          {label} {optional && <span className="text-gray-400">(opcional)</span>}
        </label>
        { error && <span className="text-red text-sm">({error})</span> }
      </div>

      <div className={`flex items-center px-5 py-4 ${variant === 'default' ? 'bg-gray-850' : 'bg-gray-950'} rounded-md border-2 border-transparent focus-within:border-yellow-500`}>
        <textarea
          name={name}
          ref={ref}
          {...rest}
          className="bg-transparent w-full text-gray-350 text-xl outline-none h-40 resize-none"
        />
      </div>    
    </div>
  )
}

export const TextArea = forwardRef(TextAreaBase)

