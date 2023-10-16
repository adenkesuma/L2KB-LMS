import { myCourse } from "@/contsant"
import UserCard from "./userCard"

const MyCourse = () => {
    return (
      <div className='mt-12 rounded-2xl bg-banner-profile p-8 pb-20'>
          <h1 className='text-[38px] font-bold mb-4 text-white'>Pelatihan Saya</h1>

          <div className="grid grid-cols-4 gap-4 -mb-32">
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

export default MyCourse