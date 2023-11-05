import { getOneTrainingDataAdmin } from "@/lib/services/training-data.service";
import moment from "moment";

import Banner from "./banner";

const DetailTraining = async ({ params } : { params: string }) => {
    const oneTrainingData = await getOneTrainingDataAdmin(params);

    // console.log(oneTrainingData)

    return (
        <div className="rounded-lg border border-gray-200 p-8 mt-6 flex gap-10">
            <Banner data={oneTrainingData?.id}/>

            <div>
                <h1 className="text-xl text-gray-800 font-semibold mb-1">{oneTrainingData?.nama}</h1>
                <p className="text-xs md:text-sm text-gray-600">{oneTrainingData?.deskripsi}</p>

                <div className="border-b border-gray-200 my-4" />

                <div className="flex flex-col gap-1">
                    <p className="text-xs md:text-sm text-gray-700">
                        Kuota: <span className="text-green font-semibold md:text-sm text-xs">{oneTrainingData?.quota}</span>
                    </p>
                    <p className="text-xs md:text-sm text-gray-700">
                        Lokasi: <span className="text-green font-semibold md:text-sm text-xs">{oneTrainingData?.location}</span>
                    </p>
                    <p className="text-xs md:text-sm text-gray-700">
                        Batch: <span className="text-green font-semibold md:text-sm text-xs">{oneTrainingData?.batch}</span>
                    </p>
                    <p className="text-xs md:text-sm text-gray-700">
                        Jumlah SKP: <span className="text-green font-semibold md:text-sm text-xs">{oneTrainingData?.skp}</span>
                    </p>
                    <p className="text-xs md:text-sm text-gray-700">
                        Pelatihan Dimulai: <span className="text-green font-semibold md:text-sm text-xs">{moment(oneTrainingData?.training_start).format("DD MMMM yyyy")}</span>
                    </p>
                    <p className="text-xs md:text-sm text-gray-700">
                        Pelatihan Selesai: <span className="text-green font-semibold md:text-sm text-xs">{moment(oneTrainingData?.training_end).format("DD MMMM yyyy")}</span>
                    </p>
                    <p className="text-xs md:text-sm text-gray-700">
                        Harga: <span className="text-green font-semibold md:text-sm text-xs">Rp {oneTrainingData?.price}</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default DetailTraining