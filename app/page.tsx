"use client";
import Image from "next/image";
import { EllipsesBackground } from "../components/EllipsesBackground";
import { useEffect, useState } from "react";
import FilterButton from "../components/FilterButton";
import ServiceCard from "../components/ServiceCard";
import { services } from "./mockups/services";
import { serviceTypes } from "./mockups/serviceTypes";
import ImageGallery from "react-image-gallery";
import WhatsappIcon from "../icons/WhatsappIcon";
import InstagramIcon from "../icons/InstagramIcon";
import SnapchatIcon from "../icons/SnapchatIcon";
import LocationPinIcon from "../icons/LocationPinIcon";
import { Option, Reservation, Service } from "@/lib/types";
import { hotServciesImages } from "./mockups/images";
import ReservationModal from "@/components/ReservationModal";
import DescriptionModal from "@/components/DescriptionModal";
import ReservationConfirmationModal from "@/components/ReservationConfirmationModal";
import StayInContact from "@/sections/StayInContact";
import HotOffers from "@/sections/HotOffers";
import Header from "@/sections/Header";
import FilterBar from "@/sections/FilterBar";
import ServicesGrid from "@/sections/ServicesGrid";
import ShowMoreButton from "@/sections/ShowMoreButton";

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
    setPage(page + 1);
  };

  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [descriptionModalService, setDescriptionModalService] =
    useState<Service | null>(null);

  const [reservationDetails, setReservationDetails] =
    useState<Reservation | null>(null);
  const [selectedService, setSelectedService] = useState("");
  const [reservedServices, setReservedServices] = useState<Option[]>([]);

  useEffect(() => {
    if (!selectedService) return;
    setReservedServices((prev) => [
      ...(prev || []),
      { value: selectedService, label: selectedService },
    ]);
  }, [selectedService]);

  const handleReservation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Initialize FormData from the form
    const formData = new FormData(e.target as HTMLFormElement);

    // Convert formData entries to an object
    let data: any = Object.fromEntries(formData.entries());

    // Check if reservedServices is null, and handle accordingly
    if (!reservedServices || reservedServices.length == 0) {
      data = { services: [], ...data };
    } else {
      data = {
        services: reservedServices.map((service) => service.value),
        ...data,
      };
    }

    console.log("Reservation data:", data);
    setReservationDetails(data);
    setReserveModalOpen(false);
  };

  return (
    <main className="relative w-full max-w-[100vw] overflow-x-hidden">
      <EllipsesBackground className="fixed left-0 top-0 z-[-1] w-full text-primary" />
      <div className="mx-auto flex min-h-screen max-w-[375px] flex-col items-center overflow-x-hidden px-4 py-6">
        <Header setReserveModalOpen={setReserveModalOpen} />

        <FilterBar
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <ServicesGrid
          paginatedServices={paginatedServices}
          setSelectedService={setSelectedService}
          setReserveModalOpen={setReserveModalOpen}
          setDescriptionModalService={setDescriptionModalService}
        />

        <ShowMoreButton
          paginatedServices={paginatedServices}
          filteredServices={filteredServices}
          showMore={showMore}
        />

        <HotOffers />

        <StayInContact />

        <ReservationModal
          reserveModalOpen={reserveModalOpen}
          setReserveModalOpen={setReserveModalOpen}
          handleReservation={handleReservation}
          selectedService={selectedService}
          reservedServices={reservedServices}
          setReservedServices={setReservedServices}
        />

        <DescriptionModal
          descriptionModalService={descriptionModalService}
          setDescriptionModalService={setDescriptionModalService}
          setReserveModalOpen={setReserveModalOpen}
          setSelectedService={setSelectedService}
        />

        <ReservationConfirmationModal
          reservationDetails={reservationDetails}
          setReservationDetails={setReservationDetails}
        />
      </div>
    </main>
  );
}
