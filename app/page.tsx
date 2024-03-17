import Image from "next/image";
import HomePage from "./HomePage";
import { EllipsesBackground } from "@/components/EllipsesBackground";

export default function Home() {
  return (
    <main
      className="relative w-full max-w-[100vw] overflow-x-hidden text-primary"
    >
      <Image
        src="/background.svg"
        alt="background"
        width={806}
        height={6804}
        className="fixed inset-0 -z-10 mx-auto w-full object-contain text-primary"
      />

      <HomePage />
    </main>
  );
}
