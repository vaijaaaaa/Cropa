import { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

export default function CropperTool() {
  const cropperRef = useRef(null);
  const [image, setImage] = useState(null);
  const [croppedDataUrl, setCroppedDataUrl] = useState(null);

  const onSelectImage = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const cropImage = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper && cropper.getCroppedCanvas()) {
      const canvas = cropper.getCroppedCanvas({
        width: 413,
        height: 531,
        fillColor: "#fff",
      });

      const borderedCanvas = document.createElement("canvas");
      borderedCanvas.width = 450;
      borderedCanvas.height = 569;
      const ctx = borderedCanvas.getContext("2d");

      if (ctx) {
        ctx.fillStyle = "#ffffff"; 
        ctx.fillRect(0, 0, 450, 569);
        ctx.drawImage(canvas, 18.5, 19);
        const dataUrl = borderedCanvas.toDataURL("image/jpeg");
        setCroppedDataUrl(dataUrl);
      }
    }
  };

  const downloadImage = () => {
    if (!croppedDataUrl) return;
    const a = document.createElement("a");
    a.href = croppedDataUrl;
    a.download = "passport-photo.jpg";
    a.click();
  };

  return (
    <div className="min-h-screen bg-black text-white font-inter px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent mb-10">
        Passport Photo Cropper
      </h1>

      {/* Upload */}
      <div className="mb-6 flex justify-center">
        <input
          type="file"
          accept="image/*"
          onChange={onSelectImage}
          className="text-white file:bg-gray-800 file:border file:border-gray-700 file:rounded-md file:px-4 file:py-2 file:text-white file:cursor-pointer"
        />
      </div>

      {image && (
        <div className="flex flex-col lg:flex-row gap-10 items-start justify-center">
          {/* Cropper Section */}
          <div className="flex-1 max-w-md w-full border border-gray-700 rounded-lg overflow-hidden bg-[#111] p-4">
            <Cropper
              src={image}
              style={{ height: 400, width: "100%" }}
              aspectRatio={413 / 531}
              guides={false}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false}
              ref={cropperRef}
              viewMode={1}
            />
          </div>

          {/* Preview Section */}
          {croppedDataUrl && (
            <div className="flex-1 max-w-md w-full bg-[#111] border border-gray-700 rounded-lg p-4 shadow-md">
              <h2 className="text-lg font-semibold mb-3 text-center">Preview</h2>
              <div className="aspect-[413/531] border-4 border-white rounded overflow-hidden">
                <img
                  src={croppedDataUrl}
                  alt="Cropped"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={downloadImage}
                className="mt-4 w-full bg-gray-800 border border-gray-600 hover:border-white text-white px-4 py-2 rounded-md font-semibold"
              >
                Download
              </button>
            </div>
          )}
        </div>
      )}

      {/* Crop Button */}
      {image && (
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={cropImage}
            className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-6 py-3 rounded-md"
          >
            Crop & Preview →
          </button>
        </div>
      )}
    </div>
  );
}
