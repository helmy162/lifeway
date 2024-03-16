export default function FilterButton({
  button,
  activeFilter,
  setActiveFilter,
}: {
  button: {
    label: string;
    value: string;
  };
  activeFilter: string;
  setActiveFilter: (value: string) => void;
}) {
  const isActive = activeFilter === button.value;
  return (
    <button
      className={`${isActive ? "bg-primary text-white" : "bg-white text-black"} border-borderGray min-w-fit rounded-lg border px-3.5 py-2.5 text-sm font-semibold`}
      onClick={() => setActiveFilter(button.value)}
    >
      {button.label}
    </button>
  );
}
