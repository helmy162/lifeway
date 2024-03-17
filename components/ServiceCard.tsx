import React from "react";

export default function ServiceCard({
  service,
  setSelectedService,
  setReserveModalOpen,
}: {
  service: any;
  setSelectedService: React.Dispatch<React.SetStateAction<any>>;
  setReserveModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleSelectService = () => {
    setReserveModalOpen(true);
    setSelectedService(service.name);
  };

  return (
    <div className="border-borderGray flex w-full flex-col gap-4 rounded-lg border bg-white p-4">
      <div className="flex h-[46px] items-start justify-between">
        <h2 className="text-base font-semibold text-black">{service.name}</h2>
        <div className="flex flex-col gap-1 font-semibold">
          <h3 className="text-xl text-primary">
            {service.price} <span className="text-sm text-black">ريال</span>
          </h3>
          {service.oldPrice && (
            <h3 className="text-sm text-lightGray line-through">
              {service.oldPrice} ريال
            </h3>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button className="font-semibold text-darkGray">تفاصيل الخدمة</button>
        <button
          className="h-[39px] w-[93px] rounded-lg border border-primary text-sm text-primary"
          onClick={handleSelectService}
        >
          حجز موعد
        </button>
      </div>
    </div>
  );
}
