import Link from "next/link"

const AdminCourses = () => {
  return (
    <div className='min-h-screen p-12'>
        <div className="flex justify-between items-center">
            <h1 className="font-bold text-[38px] text-gray-800">Daftar Pelatihan</h1>
            <Link href="/admin/courses/new-course" className="flex justify-center items-center gap-4 mt-12 text-center w-[240px] text-white font-medium p-2 rounded-xl bg-green">
                <span className="text-2xl">+</span>
                <span>Tambah Pelatihan</span>
            </Link>
        </div>

        <div className="flex justify-start items-center gap-8 mt-8">
            <button className={`text-green focus:bg-green focus:text-white p-2 border border-opacity-green rounded-xl w-[180px] bg-light-green font-medium`}>
                Semua Pelatihan
            </button>
            <button className="text-green focus:bg-green focus:text-white p-2 border border-opacity-green rounded-xl w-[180px] bg-light-green font-medium">
                Draf
            </button>
        </div>

        <div className='rounded-xl border border-gray-100 mt-8 bg-white'>
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full text-left text-sm font-light">
                      <thead class="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" class="px-6 py-4">#</th>
                          <th scope="col" class="px-6 py-4">First</th>
                          <th scope="col" class="px-6 py-4">Last</th>
                          <th scope="col" class="px-6 py-4">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                          <td class="whitespace-nowrap px-6 py-4">Mark</td>
                          <td class="whitespace-nowrap px-6 py-4">Otto</td>
                          <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                        </tr>
                        <tr
                          class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                          <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                          <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                          <td class="whitespace-nowrap px-6 py-4">@fat</td>
                        </tr>
                        <tr
                          class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                          <td class="whitespace-nowrap px-6 py-4">Larry</td>
                          <td class="whitespace-nowrap px-6 py-4">Wild</td>
                          <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AdminCourses