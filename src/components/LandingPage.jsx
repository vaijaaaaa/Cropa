import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-center items-center px-6">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Create <span className="text-teal-400">Passport-Size</span> Photos Instantly
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-xl mx-auto">
          Upload your photo, crop it manually, remove background, add a white border, and
          export a perfect passport-size image — all from your browser.
        </p>
        <button
          onClick={() => navigate("/crop")}
          className="mt-10 px-8 py-4 bg-teal-400 text-black font-semibold rounded-xl hover:scale-105 transition-all duration-200"
        >
          Get Started →
        </button>
      </div>
    </main>
  );
}
