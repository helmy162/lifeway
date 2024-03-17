import ServiceCard from "@/components/ServiceCard";

export default function ServicesGrid({
  paginatedServices,
  setSelectedService,
  setReserveModalOpen,
  setDescriptionModalService,
}: {
  paginatedServices: any;
  setSelectedService: React.Dispatch<React.SetStateAction<any>>;
  setReserveModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDescriptionModalService: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <div className="mb-7 grid w-full grid-cols-1 gap-1.5">
      {paginatedServices.map((service: any) => (
        <ServiceCard
          key={service.id}
          service={service}
          setSelectedService={setSelectedService}
          setReserveModalOpen={setReserveModalOpen}
          setDescriptionModalService={setDescriptionModalService}
        />
      ))}
      {
        paginatedServices.length == 0 && (
          <div className="text-center text-darkGray text-lg">
            لا يوجد خدمات متاحة
          </div>
        )
      }
    </div>
  );
}
