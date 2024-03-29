import { useState } from "react";

const TextInput = ({
  name,
  label,
  placeholder,
  ...rest
}: {
  name: string;
  label: string;
  placeholder?: string;
  [key: string]: any;
}) => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm text-black">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        className="border-borderGray rounded-lg border p-2.5  text-right text-base font-semibold text-lightGray focus-within:!outline-none focus:!outline-primary"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
