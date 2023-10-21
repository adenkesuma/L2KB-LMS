import { myCourse } from "@/contsant"
import UserCard from "./userCard"

const MyCourseBanner = () => {
    return (
      <div className='mt-6 sm:mt-12 rounded-2xl bg-banner-profile sm:h-32 p-4 sm:p-8 pb-20'>
          <h1 className='text-xl font-semibold sm:text-[38px] sm:font-bold mb-4 text-white'>Pelatihan Saya</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 -mb-32">
            {myCourse.map((item, idx) => (
              <UserCard 
                key={idx*4}
                path={item.path}
                idx={idx}
                icon={item.icon}
                description={item.description}
              />
            ))}
          </div>
      </div>
    )
}

export default MyCourseBanner