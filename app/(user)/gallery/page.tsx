import GetAllGallery from "./_components/all-galleries";

const Gallery = async () => {

  return (
    <div className='min-h-screen pt-4 sm:pt-6 lg:pt-12'>
      <h1 className="sm:text-2xl mb-4 md:mb-6 lg:mb-8 lg:text-4xl text-xl font-semibold sm:font-bold text-gray-800">
        Galeri
      </h1>

      <GetAllGallery />
    </div>
  )
}

export default Gallery
