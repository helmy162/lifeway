import CloseIcon from '@/icons/CloseIcon';
import Modal from './Modal';
import MultiSelectInput from './MultiSelectInput';
import TextInput from './TextInput';
import DatePicker from './DatePicker';
import SelectInput from './SelectInput';
import { periods } from '@/app/mockups/periods';
import { services } from '@/app/mockups/services';
import { Option } from '@/lib/types';

export default function ReservationModal({
  reserveModalOpen,
  setReserveModalOpen,
  handleReservation,
  selectedService,
  reservedServices,
  setReservedServices,
}: {
  reserveModalOpen: boolean;
  setReserveModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleReservation: (e: React.FormEvent<HTMLFormElement>) => void;
  selectedService: string;
  reservedServices: Option[];
  setReservedServices: (services: Option[]) => void;
}) {
  return (
    <Modal showModal={reserveModalOpen} setShowModal={setReserveModalOpen}>
      <form
        className="relative z-[100] flex flex-col gap-4 p-7"
        onSubmit={handleReservation}
      >
        <div className="flex w-full items-center justify-between">
          <h2 className="text-2xl font-bold text-black">حجز موعد</h2>
          <CloseIcon
            onClick={() => setReserveModalOpen(false)}
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
        <MultiSelectInput
          name="service"
          label="الخدمة"
          options={services}
          startingValue={selectedService}
          value={reservedServices}
          setValue={setReservedServices}
        />
        <TextInput name="name" label="الاسم" placeholder="الاسم هنا..." />
        <TextInput
          name="phone"
          label="رقم الجوال"
          placeholder="05xxxxxxxx"
          type="tel"
        />
        <DatePicker />
        <SelectInput name="period" label="الفترة" options={periods} />
        <h3 className="text-sm font-normal text-lightGray">
          يمكنك الآن حجز موعدك من خلال الضغط على الزر أدناه
        </h3>
        <button
          className="rounded-lg border-2 bg-primary px-6 py-3 font-bold text-white"
          type="submit"
        >
          حجز
        </button>
      </form>
    </Modal>
  );
}
