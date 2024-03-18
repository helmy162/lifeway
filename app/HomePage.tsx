"use client"
import { EllipsesBackground } from "../components/EllipsesBackground";
import { useEffect, useState } from "react";
import { services } from "../mockups/services";
import { Option, Reservation, Service } from "@/lib/types";
import ReservationModal from "@/components/ReservationModal";
import DescriptionModal from "@/components/DescriptionModal";
import ReservationConfirmationModal from "@/components/ReservationConfirmationModal";
import StayInContact from "@/sections/StayInContact";
import HotOffers from "@/sections/HotOffers";
import Header from "@/sections/Header";
import FilterBar from "@/sections/FilterBar";
import ServicesGrid from "@/sections/ServicesGrid";
import ShowMoreButton from "@/sections/ShowMoreButton";
import CustomersOpinion from "@/sections/CustomersOpinion";

export default function HomePage() {
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
  return(
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

        <CustomersOpinion />

        <StayInContact />

        <ReservationModal
          reserveModalOpen={reserveModalOpen}
          setReserveModalOpen={setReserveModalOpen}
          selectedService={selectedService}
          reservedServices={reservedServices}
          setReservedServices={setReservedServices}
          setReservationDetails={setReservationDetails}
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
  )
}