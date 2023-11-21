import GetAllFacilities from "./_components/all-facility";

const Facilities = async () => {

  return (
    <div className='min-h-screen pt-4 sm:pt-6 lg:pt-12'>
      <h1 className="sm:text-2xl mb-4 md:mb-6 lg:mb-8 lg:text-4xl text-xl font-semibold sm:font-bold text-gray-800">
        Fasilitas
      </h1>

      <GetAllFacilities />
    </div>
  )
}

export default Facilities
