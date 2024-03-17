import Image from "next/image";

export default function Header({ setReserveModalOpen}: { setReserveModalOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={66}
        height={41}
        className="mb-8"
      />
      <div className="mb-5 flex flex-col gap-4 px-6 text-center">
        <h2 className="text-2xl font-bold text-black">
          احصل على خدماتنا واحجز بكل يسر وسهولة
        </h2>
        <h3 className="text-sm font-normal text-lightGray">
          مجمع طرق الحياة الطبي يقدم تجربة استثنائية وطاقم طبي مميز في الجلدية،
          التجميل والليزر.
        </h3>
      </div>

      <button
        className="mb-8 h-[41px] w-[141px] rounded-lg border-2 border-primary bg-white text-sm font-semibold text-primary shadow"
        onClick={() => setReserveModalOpen(true)}
      >
        احجز الان
      </button>
    </>
  );
}
