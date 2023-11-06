import Image from "next/image";

function Modal({ imageUrl, onClose }: any) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="modal-overlay fixed w-full h-full bg-gray-800 opacity-50" onClick={onClose}></div>
      <div className="modal-container bg-white w-1/2 mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content pt-4 pb-8 text-left px-8">
            <div className="modal-close text-4xl cursor-pointer mb-6 z-50" onClick={onClose}>
                &times;
            </div>
            <Image 
                src={imageUrl} 
                alt="Gambar" 
                width={1000}
                height={1000}
                className="w-full h-full"
            />
        </div>
      </div>
    </div>
  );
}

export default Modal;
