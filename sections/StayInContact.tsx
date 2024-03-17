import InstagramIcon from "@/icons/InstagramIcon";
import LocationPinIcon from "@/icons/LocationPinIcon";
import SnapchatIcon from "@/icons/SnapchatIcon";
import WhatsappIcon from "@/icons/WhatsappIcon";

export default function StayInContact() {
  return (
    <div className="flex w-full flex-col gap-2 rounded-2xl bg-primary p-7">
      <h2 className="text-center text-[28px] font-bold text-white">
        ابق على تواصل معنا
      </h2>
      <h3 className="mb-1.5 text-center text-sm font-normal text-white/70">
        تابعنا على وسائل التواصل الاجتماعية
      </h3>
      <a
        className="flex items-center gap-1.5 rounded-[20px] bg-white p-2.5"
        href="#"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
          <WhatsappIcon width={16} height={16} />
        </div>
        <span className="text-sm font-semibold text-darkGray">
          تواصل معنا على الواتس اب
        </span>
      </a>
      <a
        className="flex items-center gap-1.5 rounded-[20px] bg-white p-2.5"
        href="#"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
          <SnapchatIcon width={16} height={16} />
        </div>
        <span className="text-sm font-semibold text-darkGray">
          تابعنا على سناب شات
        </span>
      </a>
      <a
        className="flex items-center gap-1.5 rounded-[20px] bg-white p-2.5"
        href="#"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
          <InstagramIcon width={16} height={16} />
        </div>
        <span className="text-sm font-semibold text-darkGray">
          تابعنا على انستقرام
        </span>
      </a>
      <a
        className="flex items-center gap-1.5 rounded-[20px] bg-white p-2.5"
        href="#"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
          <LocationPinIcon width={16} height={16} />
        </div>
        <span className="text-sm font-semibold text-darkGray">
          احصل على الموقع عبر خرائط جوجل
        </span>
      </a>
    </div>
  );
}
