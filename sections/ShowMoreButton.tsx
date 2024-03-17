export default function ShowMoreButton({
    paginatedServices,
    filteredServices,
    showMore,
  }: {
    paginatedServices: any;
    filteredServices: any;
    showMore: () => void;
}) {
    if(paginatedServices.length >= filteredServices.length) return null;
    return(
        <button
            className="mb-7 text-center text-[15px] font-bold text-primary"
            onClick={showMore}
          >
            عرض المزيد
          </button>
    )
  
}