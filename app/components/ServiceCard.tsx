export default function ServiceCard({ service }: { service: any }) {
  return (
    <div className="border-borderGray flex flex-col gap-4 rounded-lg border bg-white p-4 w-full">
      <div className="flex h-[46px] items-start justify-between">
        <h2 className="font-semibold text-black text-base">{service.name}</h2>
        <div className="flex flex-col gap-1 font-semibold">
          <h3 className="text-xl text-primary">
            {service.price} <span className="text-sm text-black">ريال</span>
          </h3>
          {
            service.oldPrice && (
              <h3 className="text-sm text-lightGray line-through">
                {service.oldPrice} ريال
              </h3>
            )
          }
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button className="text-darkGray font-semibold">تفاصيل الخدمة</button>
        <button className="h-[39px] w-[93px] text-sm text-primary border border-primary rounded-lg">حجز موعد</button>
      </div>
    </div>
  );
}
