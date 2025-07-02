import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="bg-[#f8f9fa] text-gray-900 font-inter">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="text-2xl font-extrabold text-blue-600">CropaTool</div>
        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#faq" className="hover:text-blue-600 transition">FAQ</a>
          <button
            onClick={() => navigate("/crop")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Launch Tool →
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 text-center max-w-5xl mx-auto">
        <p className="text-sm bg-blue-100 text-blue-700 inline-block px-3 py-1 rounded-full font-semibold mb-4">
          🚀 No login required – fully browser-based
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Make <span className="text-blue-600">Passport Photos</span> in Seconds
        </h1>
        <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Upload your photo, crop it, remove the background, and download a ready-to-print passport-size image with a white border — all in your browser.
        </p>
        <button
          onClick={() => navigate("/crop")}
          className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Get Started →
        </button>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Features</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left text-gray-700">
            <div className="hover:bg-blue-50 rounded-lg p-6 transition">
              <h3 className="text-xl font-semibold mb-2">✂️ Crop Manually</h3>
              <p className="text-sm">Precisely crop your image using a live preview and cropper tool.</p>
            </div>
            <div className="hover:bg-blue-50 rounded-lg p-6 transition">
              <h3 className="text-xl font-semibold mb-2">🎯 Background Removal</h3>
              <p className="text-sm">Use AI to remove the background with one click (via remove.bg API).</p>
            </div>
            <div className="hover:bg-blue-50 rounded-lg p-6 transition">
              <h3 className="text-xl font-semibold mb-2">⬇️ Export to PNG</h3>
              <p className="text-sm">Instantly download a print-ready photo with the correct dimensions and white border.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-[#f1f3f5] text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">FAQ</h2>
          <div className="space-y-8 text-left">
            <div className="bg-white rounded-lg p-5 shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg">Is this tool free?</h3>
              <p className="text-sm mt-2 text-gray-600">Yes! CropaTool is completely free to use with no login required.</p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg">Do I need to install anything?</h3>
              <p className="text-sm mt-2 text-gray-600">No installations or sign-ups required. Just open your browser and start.</p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg">Does it work on mobile?</h3>
              <p className="text-sm mt-2 text-gray-600">Yes, it's fully responsive and works on phones and tablets too.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-8 text-gray-500 bg-white">
        Built with ❤️ using React, TailwindCSS, and CropperJS.
      </footer>
    </main>
  );
}
