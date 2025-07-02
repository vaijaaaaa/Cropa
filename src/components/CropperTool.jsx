import { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import axios from "axios";

export default function CropperTool() {
  const cropperRef = useRef(null);
  const [image, setImage] = useState(null);
  const [cropped, setCropped] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setCropped(null); // Reset previous cropped image
    }
  };

  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const canvas = document.createElement("canvas");
      canvas.width = 413 + 20; // add white border (10px each side)
      canvas.height = 531 + 20;
      const ctx = canvas.getContext("2d");

      // Fill with white background
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const croppedCanvas = cropper.getCroppedCanvas({
        width: 413,
        height: 531,
        imageSmoothingQuality: "high",
      });

      ctx.drawImage(croppedCanvas, 10, 10); // draw with 10px padding
      setCropped(canvas.toDataURL("image/png"));
    }
  };

  const handleRemoveBg = async () => {
    if (!image) return;
    try {
      setLoading(true);
      const blob = await fetch(image).then((res) => res.blob());
      const formData = new FormData();
      formData.append("image_file", blob);
      formData.append("size", "auto");

      const response = await axios.post("https://api.remove.bg/v1.0/removebg", formData, {
        headers: {
          "X-Api-Key": "YOUR_API_KEY_HERE",
        },
        responseType: "blob",
      });

      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(response.data);
    } catch (err) {
      alert("Background removal failed. Check your API key.");
      console.error(err);
    } finally {
      setLoading(false);
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
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900 font-inter px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10">
          Passport Photo Editor
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Upload + Cropper */}
          <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
            <label className="block text-sm font-semibold mb-2">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
            />

            {image && (
              <>
                <Cropper
                  src={image}
                  ref={cropperRef}
                  style={{ height: 400, width: "100%" }}
                  aspectRatio={413 / 531}
                  guides={true}
                  viewMode={1}
                  autoCropArea={1}
                  background={false}
                  responsive={true}
                />

                <div className="flex gap-4 mt-4">
                  <button
                    onClick={handleCrop}
                    className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Crop
                  </button>
                  <button
                    onClick={handleRemoveBg}
                    disabled={loading}
                    className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 transition"
                  >
                    {loading ? "Removing..." : "Remove BG"}
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Preview + Download */}
          <div className="bg-white p-6 rounded-xl shadow border border-gray-200 text-center">
            <h2 className="text-lg font-semibold mb-4">Preview</h2>
            {cropped ? (
              <>
                <img
                  src={cropped}
                  alt="Cropped"
                  className="mx-auto border border-gray-300 rounded-md"
                />
                <button
                  onClick={handleDownload}
                  className="mt-6 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
                >
                  Download Photo
                </button>
              </>
            ) : (
              <p className="text-gray-500">No cropped photo yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
