function CardSkeleton({ sum }: { sum: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-6 lg:mt-12">
      {Array.from({ length: sum }).map((_v, i) => {
        return (
          <div className="rounded-xl bg-white p-2 sm:p-3" key={i}>
            <figure>
              <div className="rounded-lg h-28 lg:h-40 w-full bg-cover object-cover animate-pulse bg-gray-100" />
            </figure>
            <div className="animate-pulse bg-gray-100 w-full sm:w-[150px] h-5 mt-4 rounded-lg mb-4"></div>

            <div className="flex justify-between flex-col gap-2">
              <div className="rounded-lg w-full sm:w-[300px] h-5 animate-pulse bg-gray-100"></div>
              <div className="rounded-lg w-full sm:w-[300px] h-8 animate-pulse bg-gray-100"></div>

              <div className="sm:flex flex-col gap-1 mt-2 sm:mt-6 space-y-1 hidden">
                <div className="block rounded-lg w-full lg:w-[180px] h-4 animate-pulse bg-gray-100"></div>
                <div className="block rounded-lg w-full lg:w-[220px] h-4 animate-pulse bg-gray-100"></div>
                <div className="block rounded-lg w-full lg:w-[230px] h-4 animate-pulse bg-gray-100"></div>
                <div className="block rounded-lg w-full lg:w-[90px] h-4 animate-pulse bg-gray-100"></div>
              </div>

              <div className="rounded-lg w-full h-10 animate-pulse bg-gray-100"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardSkeleton;
