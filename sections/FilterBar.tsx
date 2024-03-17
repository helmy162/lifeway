import { serviceTypes } from "@/mockups/serviceTypes";
import FilterButton from "@/components/FilterButton";

export default function FilterBar({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="fancy-scroll mb-2.5 flex w-full max-w-full items-end gap-1 overflow-x-auto rounded-lg bg-white p-1 shadow">
      {serviceTypes.map((button) => (
        <FilterButton
          key={button.value}
          button={button}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      ))}
    </div>
  );
}
