import CloseIcon from "@/components/icons/CloseIcon";
import Modal from "./Modal";
import { Reservation } from "@/lib/types";
import ConfirmationIcon from "@/components/icons/ConfirmationIcon";
import { translate } from "@/mockups/translate";

export default function ReservationConfirmationModal({
  reservationDetails,
  setReservationDetails,
}: {
  reservationDetails: Reservation | null;
  setReservationDetails: React.Dispatch<
    React.SetStateAction<Reservation | null>
  >;
}) {

  const handleAddToCalendar = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Add to calendar");
  };

  if (!reservationDetails) return null;
  return (
    <Modal
      showModal={!!reservationDetails}
      setShowModal={(open) => {
        if (!open) setReservationDetails(null);
      }}
      key={reservationDetails?.name}
    >
      <div className="description_modal relative z-[100] flex flex-col p-7">
        <div className="mb-4 flex w-full items-center justify-between">
          <h2 className="text-2xl font-bold text-black">تأكيد الحجز</h2>
          <CloseIcon
            onClick={() => setReservationDetails(null)}
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>

        <ConfirmationIcon className="m-auto mb-6 w-full" />

        <h2 className="mb-2 text-center text-xl font-semibold text-black">
          تم الحجز بنجاح!
        </h2>

        <h3 className="mb-2.5 text-sm font-bold text-black">ملخص الحجز</h3>

        <div className="mb-5 rounded-lg bg-[#F5F5F5] p-3">
          {Object.entries(reservationDetails).map(([key, value]) => (
            <p className="text-xs text-black">
              <span className="font-semibold">
                {translate[key as keyof Reservation]}:
              </span>{" "}
              <span className="font-bold ">
                {key == "services" && typeof value == "object"
                  ? value.join(", ")
                  : value}
              </span>
            </p>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <button
            className="rounded-lg border border-primary bg-transparent px-6 py-3 font-bold text-primary"
            onClick={() => setReservationDetails(null)}
          >
            إغلاق
          </button>
          <button
            className="rounded-lg border border-primary bg-primary px-6 py-3 font-bold text-white"
            onClick={handleAddToCalendar}
          >
            أضف إلى التقويم
          </button>
        </div>
      </div>
    </Modal>
  );
}
