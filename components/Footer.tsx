import Image from "next/image";
import LocationPointIcon from "@/components/icons/LocationPointIcon";
import MailIcon from "@/components/icons/MailIcon";
import TelephoneIcon from "@/components/icons/TelephoneIcon";

export default function Footer() {
  return (
    <footer className="max-w-[375px] mx-auto">
      <div className="bg-footerBG flex flex-col gap-4 px-4 py-8">
        <div className="flex items-center gap-4 text-lightGray">
          <LocationPointIcon width={24} height={24} />
          <p>المغرزات، العقيق، حطين</p>
        </div>
        <div className="flex items-center gap-4 text-lightGray">
          <TelephoneIcon width={24} height={24} />
          <p>+966 118 29384</p>
        </div>
        <div className="flex items-center gap-4 text-lightGray">
          <MailIcon width={24} height={24} />
          <p>contact@lifeways.com</p>
        </div>
      </div>
      <div className="py-4">
        <Image
          src="/Leadly.svg"
          alt="Leadly"
          width={38}
          height={38}
          className="mx-auto"
        />
      </div>
    </footer>
  );
}
