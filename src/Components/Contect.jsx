import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3b0a45] via-[#6a0572] to-[#a4508b] flex flex-wrap items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/20">
        {/* LEFT SIDE */}
        <div className="text-white space-y-6">
          <h1 className="text-4xl font-bold tracking-wide bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Contact Parampara Cloth 👑
          </h1>

          <p className="text-gray-200 text-lg leading-relaxed">
            Connect with Parampara Cloth and experience timeless elegance. Our
            Rajputi collection reflects heritage, grace, and luxury.
          </p>

          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-4 bg-white/20 p-4 rounded-xl hover:scale-105 transition duration-300">
              <FaPhoneAlt className="text-yellow-300 text-xl" />
              <span className="font-medium">+91 9828553886</span>
            </div>

            <div className="flex items-center gap-4 bg-white/20 p-4 rounded-xl hover:scale-105 transition duration-300">
              <FaEnvelope className="text-yellow-300 text-xl" />
              <span className="font-medium">info@paramparaclothstore.com</span>
            </div>

            <div className="flex items-center gap-4 bg-white/20 p-4 rounded-xl hover:scale-105 transition duration-300">
              <FaMapMarkerAlt className="text-yellow-300 text-xl" />
              <span className="font-medium">Reengus, Rajasthan, India</span>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919828553886"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 mt-6 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-6">
          <div>
            <label className="block text-yellow-300 font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-xl bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-yellow-300 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-xl bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-yellow-300 font-semibold mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 rounded-xl bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition duration-300"
          >
            Send Message ✨
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="mt-16 w-full">
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-400">
          <iframe
            title="Ringas Map"
            src="https://maps.google.com/maps?q=Ringas%20Rajasthan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[400px]"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
