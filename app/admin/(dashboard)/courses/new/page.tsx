import NewCourseForm from "./_components/form";

export interface NewCourseFormData {
  nama: string;
  deskripsi: string;
  quota: number;
  tahun_pelaksanaan: number;
  training_type_id: string;
  training_organizer_id: string;
  batch: number;
  training_start: Date;
  training_end: Date;
  regis_start: Date;
  regis_end: Date;
  location: string;
  price: number;
  member: string;
  skp: number;
  tujuan: string[];
  kriteria: string[];
  kompetensi: string[];
  catatan: string[];
  draft: boolean;
  target_candidate: string[];
}

const NewCoursePage = () => {
  return (
    <div className="min-h-screen mb-8 px-4 md:px-8 xl:px-14 pt-10">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl md:text-2xl text-gray-800">
          Buat Pelatihan
        </h1>
      </div>

      <NewCourseForm />
    </div>
  );
};

export default NewCoursePage;
