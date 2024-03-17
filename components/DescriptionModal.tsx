import CloseIcon from '@/icons/CloseIcon';
import Modal from './Modal';
import { Service } from '@/lib/types';
import ImageGallery from 'react-image-gallery';

export default function DescriptionModal({
  descriptionModalService,
  setDescriptionModalService,
  setSelectedService,
  setReserveModalOpen,
}: {
  descriptionModalService: Service | null;
  setDescriptionModalService: React.Dispatch<
    React.SetStateAction<Service | null>
  >;
  setSelectedService: React.Dispatch<React.SetStateAction<string>>;
  setReserveModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  if(!descriptionModalService) return null;
  return (
    <Modal
      showModal={!!descriptionModalService}
      setShowModal={(open) => {
        if (!open) setDescriptionModalService(null);
      }}
    >
      <div className="description_modal relative z-[100] flex flex-col p-7">
        <div className="mb-4 flex w-full items-center justify-between">
          <h2 className="text-2xl font-bold text-black">
            {descriptionModalService.name}
          </h2>
          <CloseIcon
            onClick={() => setDescriptionModalService(null)}
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>

        {descriptionModalService.images && (
          <ImageGallery
            items={descriptionModalService.images.map((image) => ({
              original: image,
              thumbnail: image,
            }))}
            showThumbnails={true}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={false}
            showNav={false}
          />
        )}
        <h3 className="mb-2.5 text-sm font-bold text-black">وصف الخدمة</h3>

        <p className="mb-2.5 text-justify text-sm text-lightGray">
          {descriptionModalService.description ?? 'لا يوجد وصف'}
        </p>

        <p className="text-highlight mb-7 text-sm font-medium">
          * تم حجز الخدمة {descriptionModalService.reservationsCount ?? '0'} مرة{' '}
        </p>

        <div className="flex items-center justify-between">
          <button
            className="rounded-lg border border-primary bg-transparent px-6 py-3 font-bold text-primary"
            onClick={() => setDescriptionModalService(null)}
          >
            إغلاق
          </button>
          <button
            className="rounded-lg border border-primary bg-primary px-6 py-3 font-bold text-white"
            onClick={() => {
              setSelectedService(descriptionModalService.name);
              setReserveModalOpen(true);
            }}
          >
            حجز
          </button>
        </div>
      </div>
    </Modal>
  );
}
