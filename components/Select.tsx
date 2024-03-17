import { useState } from "react";

const LabeledSelectInput = ({
  options,
  name,
  label,
  startingValue,
}: {
  options: { name: string;}[];
  name: string;
  label: string;
  startingValue?: string;
}) => {
  const [value, setValue] = useState(startingValue?? options[0].name);

  return (
    <div className="border-borderGray flex flex-col gap-3 rounded-lg border p-4">
      <label htmlFor={name} className="text-xs text-lightGray">{label}</label>
      <select
        id={name}
        name={name}
        className="text-lg font-semibold text-black !outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LabeledSelectInput;
