import { hotServciesImages } from "@/app/mockups/images";
import ReactImageGallery from "react-image-gallery";

export default function HotOffers() {
  return (
    <div className="w-full">
      <div className="mb-4 flex flex-col gap-4 px-6 text-center">
        <h2 className="text-[28px] font-bold text-black">أحدث العروض </h2>
        <h3 className="text-sm font-normal text-lightGray">
          تعرف على أحدث عروض مجمع طرق الحياة الطبي للاستفادة منها
        </h3>
      </div>

      {/* Image carousel */}
      <div className="mb-10 rounded-2xl bg-white p-4 pb-9">
        <ReactImageGallery
          items={hotServciesImages}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={true}
          showNav={false}
          autoPlay={true}
          slideDuration={500}
        />
      </div>
    </div>
  );
}
