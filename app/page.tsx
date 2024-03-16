"use client";
import Image from "next/image";
import { EllipsesBackground } from "./components/EllipsesBackground";
import { useEffect, useState } from "react";
import FilterButton from "./components/FilterButton";
import ServiceCard from "./components/ServiceCard";
import { services } from "./mockups/services";
import { serviceTypes } from "./mockups/serviceTypes";
import ImageGallery from "react-image-gallery";
import WhatsappIcon from "./icons/WhatsappIcon";
import InstagramIcon from "./icons/InstagramIcon";
import SnapchatIcon from "./icons/SnapchatIcon";
import LocationPinIcon from "./icons/LocationPinIcon";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredServices, setFilteredServices] = useState(services);
  const [paginatedServices, setPaginatedServices] = useState<any>(
    services.slice(0, 3),
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    const newServices = services.filter(
      (service) => activeFilter === "all" || service.type === activeFilter,
    );
    setFilteredServices(newServices);
    setPage(1);
    setPaginatedServices(newServices.slice(0, 3));
  }, [activeFilter]);

  useEffect(() => {
    setPaginatedServices(filteredServices.slice(0, page * 3));
  }, [filteredServices, page]);

  const showMore = () => {
    if (paginatedServices.length === filteredServices.length) return;
    const newLength = paginatedServices.length + 3;
    setPage(page + 1);
  };

  return (
    <main className="relative w-screen max-w-[100vw] overflow-x-hidden">
      <EllipsesBackground className="fixed left-0 top-0 z-[-1] w-full " />
      <div className="mx-auto flex min-h-screen max-w-[375px] flex-col items-center overflow-x-hidden px-4 py-6">
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
            مجمع طرق الحياة الطبي يقدم تجربة استثنائية وطاقم طبي مميز في
            الجلدية، التجميل والليزر.
          </h3>
        </div>

        <button className="mb-8 h-[41px] w-[141px] rounded-lg border-2 border-primary bg-white text-sm font-semibold text-primary shadow">
          احجز الان
        </button>

        {/* horizontal scroll filter bar with buttons */}
        <div className="mb-2.5 flex w-full max-w-full items-end gap-1 overflow-x-auto rounded-lg bg-white p-1 shadow">
          {serviceTypes.map((button) => (
            <FilterButton
              key={button.value}
              button={button}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          ))}
        </div>

        {/* services grid */}
        <div className="mb-7 grid w-full grid-cols-1 gap-1.5">
          {paginatedServices.map((service: any) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* show more button */}
        {paginatedServices.length < filteredServices.length && (
          <button
            className="mb-7 text-center text-[15px] font-bold text-primary"
            onClick={() => showMore()}
          >
            عرض المزيد
          </button>
        )}

        <div className="mb-4 flex flex-col gap-4 px-6 text-center">
          <h2 className="text-[28px] font-bold text-black">أحدث العروض </h2>
          <h3 className="text-sm font-normal text-lightGray">
            تعرف على أحدث عروض مجمع طرق الحياة الطبي للاستفادة منها
          </h3>
        </div>

        {/* Image carousel */}
        <div className="mb-10 rounded-2xl bg-white p-4 pb-9">
          <ImageGallery
            items={images}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
            showNav={false}
            autoPlay={true}
            slideDuration={500}
          />
        </div>

        {/* Stay In Contact */}
        <div className="flex w-full flex-col gap-2 rounded-2xl bg-primary p-7">
          <h2 className="text-center text-[28px] font-bold text-white">
            ابق على تواصل معنا
          </h2>
          <h3 className="mb-1.5 text-center text-sm font-normal text-white/70">
            تابعنا على وسائل التواصل الاجتماعية
          </h3>
          <a className="flex items-center gap-1.5 rounded-[20px] bg-white p-2.5" href="#">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
              <WhatsappIcon width={16} height={16} />
            </div>
            <span className="text-sm font-semibold text-darkGray">
              تواصل معنا على الواتس اب
            </span>
          </a>
          <a className="flex items-center gap-1.5 rounded-[20px] bg-white p-2.5" href="#">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
              <SnapchatIcon width={16} height={16} />
            </div>
            <span className="text-sm font-semibold text-darkGray">
              تابعنا على سناب شات
            </span>
          </a>
          <a className="flex items-center gap-1.5 rounded-[20px] bg-white p-2.5" href="#">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
              <InstagramIcon width={16} height={16} />
            </div>
            <span className="text-sm font-semibold text-darkGray">
              تابعنا على انستقرام
            </span>
          </a>
          <a className="flex items-center gap-1.5 rounded-[20px] bg-white p-2.5" href="#">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
              <LocationPinIcon width={16} height={16} />
            </div>
            <span className="text-sm font-semibold text-darkGray">
              احصل على الموقع عبر خرائط جوجل
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}

const images = [
  {
    original: "./image1.png",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];