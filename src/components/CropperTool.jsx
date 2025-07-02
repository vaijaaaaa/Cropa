import { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

export default function CropperTool() {
  const cropperRef = useRef(null);
  const [image, setImage] = useState(null);
  const [cropped, setCropped] = useState(null);

  const onImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const canvas = cropper.getCroppedCanvas({
        width: 413, // Passport photo width in pixels (300 DPI)
        height: 531,
        fillColor: "#ffffff", // white background by default
      });

      setCropped(canvas.toDataURL("image/png"));
    }
  };

  const handleDownload = () => {
    if (!cropped) return;
    const a = document.createElement("a");
    a.href = cropped;
    a.download = "passport_photo.png";
    a.click();
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Passport Photo Maker</h1>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
        {/* Upload & Cropper */}
        <div className="w-full md:w-1/2">
          <input
            type="file"
            accept="image/*"
            onChange={onImageChange}
            className="mb-4 file:bg-teal-500 file:text-white file:px-4 file:py-2 file:rounded"
          />

          {image && (
            <Cropper
              src={image}
              ref={cropperRef}
              style={{ height: 400, width: "100%" }}
              aspectRatio={413 / 531}
              guides={true}
              viewMode={1}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false}
            />
          )}

          {image && (
            <button
              onClick={handleCrop}
              className="mt-4 px-6 py-2 bg-teal-500 rounded hover:bg-teal-600 transition"
            >
              Crop Image
            </button>
          )}
        </div>

        {/* Preview & Download */}
        <div className="w-full md:w-1/2 text-center">
          {cropped && (
            <>
              <h2 className="text-xl font-semibold mb-2">Preview</h2>
              <img
                src={cropped}
                alt="Cropped"
                className="mx-auto border-4 border-white rounded-md"
              />
              <button
                onClick={handleDownload}
                className="mt-4 px-6 py-2 bg-teal-400 text-black font-semibold rounded hover:bg-teal-300 transition"
              >
                Download
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
