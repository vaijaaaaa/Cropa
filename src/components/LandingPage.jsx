import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-black text-white font-inter px-6 pt-24 pb-16 flex flex-col items-center justify-start relative">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-black z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            Cropa
          </div>
          <nav className="space-x-6 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <button
              onClick={() => navigate("/crop")}
              className="ml-4 bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition"
            >
              Launch →
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center mt-20 max-w-3xl mx-auto">
        <p className="bg-gray-800 inline-block px-4 py-1 text-sm text-orange-400 rounded-full mb-6 font-semibold">
          ✨ No signup – Free forever
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
          Make <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">Passport Photos</span><br />
          In Seconds
        </h1>

        <p className="text-gray-400 text-lg mt-2 max-w-xl mx-auto">
          Upload, crop, remove background, and download a perfect passport-size photo with white border.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/crop")}
            className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-6 py-3 rounded-md"
          >
            Get Started →
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 border border-gray-600 hover:border-white text-white px-6 py-3 rounded-md font-semibold"
          >
            GitHub Repo
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mt-32 max-w-4xl w-full mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left text-gray-300">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 className="font-semibold text-white mb-2">🖼️ Easy Cropping</h3>
            <p>Crop your image manually with full control and aspect ratio lock.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 className="font-semibold text-white mb-2">🎯 Background Removal</h3>
            <p>Remove backgrounds instantly using the remove.bg API.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 className="font-semibold text-white mb-2">📥 White Border Export</h3>
            <p>Export high-quality passport photos with the required white border.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mt-32 max-w-4xl w-full mx-auto text-left">
        <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white">Is PassportPic really free?</h3>
            <p className="text-gray-400 mt-1">Yes! All features are completely free to use.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Do I need to create an account?</h3>
            <p className="text-gray-400 mt-1">No sign-up or login is required — just upload and go.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Can I use this on my phone?</h3>
            <p className="text-gray-400 mt-1">Absolutely! The tool is fully responsive and works on all modern devices.</p>
          </div>
        </div>
      </section>

      {/* Footer/About Section */}
      <footer id="about" className="mt-32 text-center text-sm text-gray-500 py-10 border-t border-gray-800 w-full">
        <p>Built with ❤️ for quick & easy passport photos. No more studio visits!</p>
      </footer>
    </main>
  );
}
