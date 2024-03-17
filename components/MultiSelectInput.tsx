import { Option } from "@/lib/types";
import { useState } from "react";
import Select from "react-select";

const MultiSelectInput = ({
  options,
  name,
  label,
  startingValue,
  value,
  setValue,
}: {
  options: { name: string }[];
  name: string;
  label: string;
  startingValue?: string;
  value: Option[] | null;
  setValue: (value: Option[]) => void;
}) => {
  const handleChange = (
    newValue: ReadonlyArray<{ value: string; label: string }>,
  ) => {
    // console.log(newValue);
    setValue(newValue as any);
  };

  const selectOptions = options.map((option) => ({
    value: option.name,
    label: option.name,
  }));

  console.log("value", value);

  return (
    <div
      className="border-borderGray flex flex-col gap-3 rounded-lg border p-4"
      key={name}
    >
      <label htmlFor={name} className="text-xs text-lightGray">
        {label}
      </label>
      <Select
        className="text-lg font-semibold text-black"
        options={selectOptions}
        value={value}
        isMulti
        onChange={handleChange}
      />
    </div>
  );
};

export default MultiSelectInput;
