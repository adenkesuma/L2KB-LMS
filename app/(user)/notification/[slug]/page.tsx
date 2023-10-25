import React from "react";

const NotificationDetail = () => {
  return (
    <main className="mt-4 sm:mt-6 lg:mt-12 min-h-screen">
      <h1 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-gray-800">
        Selamat! Pendaftaran Anda Diterima untuk Pelatihan Unggulan Kami
      </h1>
      <p className="text-xs sm:text-sm text-gray-600 mt-2 lg:mt-4">
        Kami dengan senang hati mengumumkan bahwa pendaftaran Anda untuk
        pelatihan unggulan kami telah diterima. Anda telah membuat langkah
        pertama menuju pengembangan diri yang luar biasa. Kami tak sabar untuk
        berbagi pengetahuan, keterampilan, dan pengalaman hebat bersama Anda.
        Informasi lebih lanjut segera mengikuti. Bersiaplah untuk perjalanan
        yang menarik ini!
      </p>
    </main>
  );
};

export const runtime = "edge";
export default NotificationDetail;
