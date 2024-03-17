import React, { useState } from "react";

const days = [
  "الأحد",
  "الإثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];

export default function DatePicker() {
  const [currentWeek, setCurrentWeek] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handlePreviousWeek = () => {
    setCurrentWeek((prevWeek) => prevWeek - 1);
  };

  const handleNextWeek = () => {
    setCurrentWeek((prevWeek) => prevWeek + 1);
  };

  return (
    <div className="w-full rounded-lg">
        <input type="hidden" name="date" value={selectedDate} />
      <div className="mb-4 flex items-center justify-between">
        <label className="text-sm text-black">التاريخ</label>
        <div className="flex items-center">
          <button
            className="text-black disabled:cursor-not-allowed disabled:opacity-50"
            onClick={handlePreviousWeek}
            disabled={currentWeek === 0}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
          الأسبوع
          <button className="" onClick={handleNextWeek}>
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 6 }, (_, index) => {
          const date = new Date();
          date.setDate(date.getDate() + currentWeek * 6 + index);

          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();

          const thisDate = new Date(`${month}/${day}/${year}`);

          const dayNumber = thisDate.getDay();

          const formattedDate = `${day}/${month}/${year}`;

          let dayName = days[dayNumber];

          if (currentWeek === 0 && index === 0) dayName = "اليوم";

          const isSelected = selectedDate == formattedDate;

          return (
            <button
              key={formattedDate}
              type="button"
              onClick={() => setSelectedDate(formattedDate)}
              className={`border-borderGray flex flex-col items-start justify-center rounded-lg border p-2 text-right ${
                isSelected ? "bg-primary/10" : "bg-transparent"
              }`}
            >
            {isSelected && <CheckCircleIcon className="h-6 w-6 text-primary" />}
            {!isSelected && <div className="h-6 w-6 border border-borderGray rounded-full"/>}

              <h3 className="text-xs font-semibold text-black">{dayName}</h3>
              <h4 className="text-xs text-lightGray">{formattedDate}</h4>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.99996 1.66675C5.40829 1.66675 1.66663 5.40841 1.66663 10.0001C1.66663 14.5917 5.40829 18.3334 9.99996 18.3334C14.5916 18.3334 18.3333 14.5917 18.3333 10.0001C18.3333 5.40841 14.5916 1.66675 9.99996 1.66675ZM13.9833 8.08341L9.25829 12.8084C9.14162 12.9251 8.98329 12.9917 8.81662 12.9917C8.64996 12.9917 8.49162 12.9251 8.37496 12.8084L6.01662 10.4501C5.77496 10.2084 5.77496 9.80841 6.01662 9.56675C6.25829 9.32508 6.65829 9.32508 6.89996 9.56675L8.81662 11.4834L13.1 7.20008C13.3416 6.95841 13.7416 6.95841 13.9833 7.20008C14.225 7.44175 14.225 7.83341 13.9833 8.08341Z"
        fill="#25D366"
      />
    </svg>
  );
}

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.65 4.93337L8.97499 7.60837L7.33333 9.2417C6.64166 9.93337 6.64166 11.0584 7.33333 11.75L11.65 16.0667C12.2167 16.6334 13.1833 16.225 13.1833 15.4334V10.7584V5.5667C13.1833 4.7667 12.2167 4.3667 11.65 4.93337Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.6667 9.24161L11.025 7.59994L8.34998 4.92494C7.78332 4.36661 6.81665 4.76661 6.81665 5.56661V10.7583V15.4333C6.81665 16.2333 7.78332 16.6333 8.34998 16.0666L12.6667 11.7499C13.3583 11.0666 13.3583 9.93327 12.6667 9.24161Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
